export default function ServicePage() {
  return (
<main>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>AI Output Review for Clinicians | Clinical AI Academy</title>
  <meta name="description" content="A 30-minute, clinician-to-clinician educational review of AI-generated clinical content. Non-binding. Book via Calendly. Invoice sent after the session." />
  <style>
    :root{
      --bg:#0b1220;
      --text:#e8eefc;
      --muted:#b8c3e6;
      --line:rgba(232,238,252,.12);
      --accent:#6aa6ff;
      --accent2:#44d19e;
      --warn:#ffd166;
      --shadow: 0 16px 40px rgba(0,0,0,.35);
      --radius:18px;
      --max: 980px;
      --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family:var(--font);
      background: radial-gradient(1100px 550px at 20% 0%, rgba(106,166,255,.16), transparent 60%),
                  radial-gradient(900px 500px at 80% 10%, rgba(68,209,158,.14), transparent 62%),
                  var(--bg);
      color:var(--text);
      line-height:1.5;
    }
    a{color:inherit}
    .wrap{max-width:var(--max); margin:0 auto; padding:28px 18px 60px}
    header{
      display:flex; align-items:center; justify-content:space-between; gap:14px;
      padding:10px 0 22px;
    }
    .brand{
      display:flex; align-items:center; gap:10px; text-decoration:none;
      font-weight:800; letter-spacing:.2px;
    }
    .logo{
      width:34px; height:34px; border-radius:10px;
      background: linear-gradient(135deg, rgba(106,166,255,.95), rgba(68,209,158,.9));
      box-shadow: 0 10px 22px rgba(0,0,0,.25);
      flex:0 0 auto;
    }
    nav{display:flex; gap:14px; flex-wrap:wrap; justify-content:flex-end}
    nav a{
      text-decoration:none; color:var(--muted);
      padding:8px 10px; border-radius:12px;
      border:1px solid transparent;
    }
    nav a:hover{color:var(--text); border-color:var(--line); background:rgba(255,255,255,.03)}
    .hero{
      display:grid; grid-template-columns: 1.25fr .75fr; gap:18px;
      align-items:stretch;
      margin-top:8px;
    }
    .card{
      background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
      border:1px solid var(--line);
      border-radius:var(--radius);
      box-shadow:var(--shadow);
    }
    .hero-main{padding:26px 24px}
    h1{
      font-size: clamp(28px, 3.2vw, 44px);
      margin:0 0 10px;
      line-height:1.12;
      letter-spacing:-.4px;
    }
    .sub{
      color:var(--muted);
      font-size: clamp(15px, 1.4vw, 18px);
      margin:0 0 18px;
      max-width: 72ch;
    }
    .pillrow{display:flex; gap:10px; flex-wrap:wrap; margin:14px 0 18px}
    .pill{
      display:inline-flex; align-items:center; gap:8px;
      padding:8px 10px; border-radius:999px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.03);
      color:var(--muted);
      font-size:13px;
      white-space:nowrap;
    }
    .dot{width:8px; height:8px; border-radius:50%; background:var(--accent2)}
    .cta-row{display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-top:6px}
    .btn{
      display:inline-flex; align-items:center; justify-content:center;
      padding:12px 14px;
      border-radius:14px;
      border:1px solid rgba(255,255,255,.14);
      text-decoration:none;
      font-weight:800;
      letter-spacing:.2px;
      transition: transform .06s ease, background .15s ease, border-color .15s ease;
    }
    .btn:hover{transform: translateY(-1px)}
    .btn-primary{
      background: linear-gradient(135deg, rgba(106,166,255,.95), rgba(68,209,158,.85));
      border-color: transparent;
      color: #07101f;
    }
    .btn-secondary{
      background: rgba(255,255,255,.03);
      color: var(--text);
    }
    .fine{
      margin:10px 0 0;
      color: rgba(232,238,252,.72);
      font-size: 13px;
    }
    .hero-side{padding:18px}
    .price{
      padding:18px;
      border-radius:16px;
      background:rgba(0,0,0,.18);
      border:1px solid var(--line);
    }
    .price h2{margin:0 0 6px; font-size:18px}
    .price .amt{font-size:38px; font-weight:900; letter-spacing:-.6px; margin:6px 0 0}
    .price .per{color:var(--muted); margin:0}
    ul{padding-left:18px; margin:10px 0 0; color:rgba(232,238,252,.86)}
    li{margin:6px 0}
    section{margin-top:18px}
    .sec{padding:20px 20px}
    h3{margin:0 0 10px; font-size:18px}
    p{margin:0 0 10px; color:rgba(232,238,252,.86)}
    .muted{color:var(--muted)}
    .note{
      border-left:3px solid var(--warn);
      padding:12px 12px 12px 14px;
      background: rgba(255,209,102,.08);
      border-radius:14px;
      border:1px solid rgba(255,209,102,.18);
      color: rgba(232,238,252,.9);
      font-size: 14px;
    }
    .grid{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:16px;
      margin-top:16px;
    }
    .faq details{
      border:1px solid var(--line);
      background: rgba(255,255,255,.02);
      border-radius:14px;
      padding:12px 12px;
      margin:10px 0;
    }
    .faq summary{
      cursor:pointer; font-weight:800;
      color: var(--text);
      outline:none;
    }
    footer{
      margin-top:22px;
      padding:18px;
      color:rgba(232,238,252,.65);
      font-size: 12px;
      border-top:1px solid var(--line);
    }
    .kbd{
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 8px;
      border:1px solid var(--line);
      background: rgba(255,255,255,.04);
      color: rgba(232,238,252,.86);
      display:inline-block;
    }
    @media (max-width: 900px){
      .hero{grid-template-columns:1fr}
      .grid{grid-template-columns:1fr}
      nav{justify-content:flex-start}
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <a class="brand" href="#top" aria-label="Clinical AI Academy">
        <div class="logo" aria-hidden="true"></div>
        <div>Clinical AI Academy</div>
      </a>
      <nav aria-label="Primary">
        <a href="#service">Service</a>
        <a href="#deliverables">Deliverables</a>
        <a href="#boundaries">Boundaries</a>
        <a href="#book">Book</a>
      </nav>
    </header>

    <main id="top" class="hero">
      <div class="card hero-main">
        <h1>Clinician-to-clinician review of AI-generated clinical content.</h1>
        <p class="sub">
          A focused 30-minute session to stress-test AI outputs (LLMs, chatbots, copilots): what’s sound,
          what’s missing, where hallucination risk is highest, and how to align with evidence and guidelines.
          Designed for clinicians and clinical teams using AI in real workflows.
        </p>

        <div class="pillrow" aria-label="Key points">
          <span class="pill"><span class="dot" aria-hidden="true"></span>Non-binding educational review</span>
          <span class="pill"><span class="dot" aria-hidden="true"></span>Guideline-aware critique</span>
          <span class="pill"><span class="dot" aria-hidden="true"></span>Failure-mode & safety check</span>
          <span class="pill"><span class="dot" aria-hidden="true"></span>Live-only by default</span>
        </div>

        <div class="cta-row">
          <a class="btn btn-primary" href="#book">Book on Calendly</a>
          <a class="btn btn-secondary" href="#service">What you get</a>
        </div>

        <p class="fine">
          <strong>Scope note:</strong> Educational peer support. Final clinical responsibility remains with the treating clinician/team.
        </p>
      </div>

      <aside class="card hero-side" aria-label="Pricing">
        <div class="price">
          <h2>30-minute session</h2>
          <div class="amt">€100</div>
          <p class="per">per 30 minutes • online (Zoom)</p>
          <ul>
            <li>Review of the AI output + prompt</li>
            <li>Risk, gaps, and “what to verify” list</li>
            <li>Suggested questions for guideline/evidence checks</li>
            <li>Escalation flags (safety-critical omissions)</li>
          </ul>
          <p class="fine" style="margin-top:12px">
            Payment via invoice (“Rechnung”) after the meeting.
          </p>
        </div>
      </aside>
    </main>

    <section id="service" class="card sec">
      <h3>What this is for</h3>
      <p>
        If you or your team are using AI to draft notes, differential lists, patient instructions, triage suggestions,
        or literature summaries, this service provides a rapid, expert review of the output quality and safety profile.
      </p>
      <div class="grid">
        <div class="card sec" style="box-shadow:none">
          <h3 style="margin-top:0">Typical use cases</h3>
          <ul>
            <li>AI-generated differential diagnosis or red-flag lists</li>
            <li>AI-crafted patient-facing explanations (readability, safety, omissions)</li>
            <li>AI summaries of guidelines/papers (accuracy, missing nuance)</li>
            <li>Prompt design for safer, more clinically useful outputs</li>
          </ul>
        </div>
        <div class="card sec" style="box-shadow:none">
          <h3 style="margin-top:0">What to bring (minimal)</h3>
          <ul>
            <li>The AI output (copy/paste)</li>
            <li>The exact prompt used (if available)</li>
            <li>Optional context: keep it de-identified</li>
            <li>No attachments required</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="deliverables" class="card sec">
      <h3>Deliverables (during the call)</h3>
      <ul>
        <li><strong>Quality audit:</strong> internal consistency, unsupported leaps, missing decision points.</li>
        <li><strong>Safety audit:</strong> red flags, contraindications, escalation triggers, uncertainty handling.</li>
        <li><strong>Evidence alignment:</strong> where the output is likely guideline-consistent vs. speculative.</li>
        <li><strong>Next checks:</strong> what to verify quickly (guidelines, key trials, local SOPs).</li>
        <li><strong>Prompt improvements:</strong> changes that materially reduce hallucination risk.</li>
      </ul>
      <p class="muted" style="margin-top:10px">
        Sessions are live and non-recorded by default to minimise data handling.
      </p>
    </section>

    <section id="boundaries" class="card sec">
      <h3>Boundaries</h3>
      <div class="note" role="note">
        This is a clinician-to-clinician educational service. It is <strong>not</strong> a second opinion, not a medical consultation,
        and does not establish a physician–patient relationship. Clinical decisions remain with the treating clinician/team.
      </div>
      <p class="muted" style="margin-top:10px">
        Data minimisation: please avoid sending identifiable patient data. I do not record sessions.
      </p>
    </section>

    <section id="book" class="card sec">
      <h3>Book</h3>
      <p class="muted">
        Book your slot via Calendly. You’ll receive the meeting details by email. Payment is handled after the session via invoice (“Rechnung”).
      </p>

      <div class="cta-row" style="margin-top:10px">
        <a class="btn btn-primary"
           href="https://calendly.com/contact-clinicalaiacademy/30min"
           target="_blank" rel="noopener noreferrer">
          Book on Calendly
        </a>
        <a class="btn btn-secondary" href="#faq">FAQ</a>
      </div>

      <p class="fine" style="margin-top:12px">
        Optional: in the Calendly notes, paste the AI output and prompt (de-identified; no patient identifiers).
      </p>
    </section>

    <section id="faq" class="card sec faq">
      <h3>FAQ</h3>

      <details>
        <summary>Is this a medical consultation or second opinion?</summary>
        <p>
          No. This is an educational review of AI-generated content for clinicians. It does not replace clinical judgment,
          local policies, or guideline-based care. Final responsibility remains with the treating clinician/team.
        </p>
      </details>

      <details>
        <summary>Can we discuss a real patient case?</summary>
        <p>
          If needed, yes—please keep it de-identified and minimal. The focus is the AI output quality and safety,
          not patient-specific diagnosis or treatment decisions.
        </p>
      </details>

      <details>
        <summary>Do you store outputs or recordings?</summary>
        <p>
          No recordings. Please avoid sending identifiable patient data. By default, no documents are retained.
        </p>
      </details>

      <details>
        <summary>How does payment work?</summary>
        <p>
          You book the meeting on Calendly. After the session, you receive an invoice (“Rechnung”) by email for €100 (30 minutes),
          payable by bank transfer (or another method you specify).
        </p>
      </details>
    </section>

    <footer>
      <div>
        <strong>Professional notice:</strong> Educational clinician support only. Not medical consultation. Not a second opinion.
        No physician–patient relationship is established.
      </div>
      <div style="margin-top:8px">
        © <span id="y"></span> Clinical AI Academy • Email: <span class="kbd">contact@clinicalaiacademy.com</span>
      </div>
    </footer>
  </div>

  <script>
    document.getElementById("y").textContent = new Date().getFullYear();
  </script>
</body>
</html>
<main>
  )
}
