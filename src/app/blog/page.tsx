import React from 'react';
import Link from 'next/link';

// In a real application, you would fetch this list dynamically
const posts = [
  {
    slug: 'introduction-to-ai-in-diagnostics',
    title: 'Unlocking the Future: An Introduction to AI in Diagnostics for Clinicians',
    excerpt: 'AI is rapidly becoming an integral part of modern medicine, particularly in diagnostics. Understand the fundamentals and why AI literacy is essential...',
    date: 'May 04, 2025', // Example date
  },
  // Add more posts here later
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Health AI Academy Blog</h1>
      
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

