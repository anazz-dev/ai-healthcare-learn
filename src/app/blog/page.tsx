import React from 'react';
import Link from 'next/link';

// In a real application, you would fetch this list dynamically
const posts = [
  {
    slug: 'introduction-to-ai-in-diagnostics',
    title: 'An Introduction to AI in Diagnostics for Clinicians',
    excerpt: 'AI is rapidly becoming an integral part of modern medicine, particularly in diagnostics. Understand the fundamentals and why AI literacy is essential...',
    date: 'May 04, 2025', // Example date
  },

  {
    slug: 'ai-literacy-in-healthcare',
    title: 'AI Literacy in Healthcare: A Comprehensive Guide for Clinicians, Administrators, and MedTech Companies',
    excerpt: 'AI literacy is now a core competency in modern healthcare. This guide details the essential skills, regulatory requirements in the EU and USA, ethical safeguards, and best‑practice steps for integrating AI tools safely and effectively.',
    date: 'May 06, 2025', // Publication date
  }

  {
  slug: 'decision-curve-tutorial',
  title: 'Decision Curve Analysis in Clinical Practice: A Step-by-Step Tutorial for Clinicians',
  excerpt: 'Decision Curve Analysis (DCA) helps clinicians evaluate the real-world utility of prediction models. This tutorial introduces DCA using a PSA-based biopsy decision case, guiding readers through net benefit, threshold probability, and clinical decision-making trade-offs.',
  date: 'May 19, 2025'
  }


  
  
  // Add more posts here later
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Clinical AI Academy Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline dark:text-blue-400">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline dark:text-blue-400 font-medium">
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">No blog posts yet. Check back soon!</p>
      )}
    </div>
  );
}

