import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: 'Payment processing is not configured.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const origin = request.headers.get('origin') || 'https://clinicalaiacademy.com';
    const encodedName = encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));

    const stripePayload = {
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Clinical AI Literacy – Certificate of Completion',
              description: 'Verified certificate for completing all 8 modules of the Clinical AI Literacy for Healthcare Professionals course.',
            },
            unit_amount: 4900,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      metadata: {
        learner_name: name,
        learner_email: email,
      },
      success_url: `${origin}/payment-success?name=${encodedName}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/progress?payment=cancelled`,
    };

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(
        Object.entries(flattenStripePayload(stripePayload)).map(([k, v]) => [k, String(v)])
      ).toString(),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Stripe API error:', errorBody);
      return NextResponse.json(
        { error: 'Failed to create payment session. Please try again.' },
        { status: 500 }
      );
    }

    const session = await response.json();
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

function flattenStripePayload(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const fieldKey = prefix ? `${prefix}[${key}]` : key;
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          Object.assign(result, flattenStripePayload(item as Record<string, unknown>, `${fieldKey}[${index}]`));
        } else {
          result[`${fieldKey}[${index}]`] = String(item);
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenStripePayload(value as Record<string, unknown>, fieldKey));
    } else {
      result[fieldKey] = String(value);
    }
  }
  return result;
}
