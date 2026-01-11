import React from 'react';
import Link from 'next/link';

// In a real application, you would fetch this list dynamically
const posts = [
  {
    slug: 'ai-job-replacement-model',
    title: 'When Will AI Replace a Job? A Transparent, Task-Based Prediction Model',
    excerpt: 'Task-based model that estimates when AI plausibly displaces the majority of a job’s tasks, explicitly separating technical feasibility from organizational adoption and acknowledging when replacement may never occur.',
  },

   {
  slug: 'clinical-ai-resource-space',
  title: 'Clinical AI Resource Space — Key Papers, Tools, and Learning Materials',
  excerpt: 'An open, living collection of resources on AI in medicine — from key papers and datasets to talks, tools, and community events.',
},


  {
  slug: 'clinical-ai-curriculum',
  title: 'Clinical and Medical AI Curriculum for Healthcare Professionals',
  excerpt: 'A structured curriculum guiding healthcare professionals from AI basics to advanced governance and practice.',
  },

  {
    slug: 'introduction-to-ai-in-diagnostics',
    title: 'An Introduction to AI in Diagnostics for Clinicians',
    excerpt: 'AI is rapidly becoming an integral part of modern medicine, particularly in diagnostics. Understand the fundamentals and why AI literacy is essential...',
  },

  {
    slug: 'ai-literacy-in-healthcare',
    title: 'AI Literacy in Healthcare: A Comprehensive Guide for Clinicians, Administrators, and MedTech Companies',
    excerpt: 'AI literacy is now a core competency in modern healthcare. This guide details the essential skills, regulatory requirements in the EU and USA, ethical safeguards, and best‑practice steps for integrating AI tools safely and effectively. Clinical AI Readiness Score (CARS), is a comprehensive conceptual framework for assessing the deployment readiness of AI systems in healthcare settings, addressing technical, clinical, ethical, and operational dimensions.',
  },

   {
    slug: 'cars',
    title: 'Clinical AI Readiness Score (CARS): A Proposed Framework for Assessing Artificial Intelligence Deployment Readiness in Healthcare Settings',
    excerpt: 'Despite significant advances in artificial intelligence (AI) research for healthcare applications, the translation from research to clinical practice remains limited.',
  },

    {
  slug: 'what-is-clinical-ai',
  title: 'What is Clinical AI? A Primer for Healthcare Professionals',
  excerpt: 'Clinical AI refers to artificial intelligence systems that directly support patient care through diagnostics, prognostics, and treatment decisions — a critical subset of medical AI that clinicians need to understand.',
  },
  
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

