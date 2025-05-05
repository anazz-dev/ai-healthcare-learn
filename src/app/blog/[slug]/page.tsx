import fs from 'fs';
import path from 'path';
// Removed MarkdownRenderer import
import { notFound } from 'next/navigation';

// Function to get post HTML content
async function getPostHtmlContent(slug: string): Promise<string | null> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  // Look for .html file instead of .md
  const filePath = path.join(postsDirectory, `${slug}.html`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    // Handle file not found or other errors
    console.error(`Error reading blog post HTML ${slug}:`, error);
    return null;
  }
}

// Define params type for the page
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const htmlContent = await getPostHtmlContent(slug);

  if (!htmlContent) {
    notFound(); // Trigger 404 if post not found
  }

  // Extract title from the first H1 tag (simple approach)
  // This might need adjustment based on Pandoc's output
  const titleMatch = htmlContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const title = titleMatch ? titleMatch[1] : 'Blog Post'; // Fallback title

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Render HTML content using dangerouslySetInnerHTML */}
      <article 
        className="prose dark:prose-invert max-w-none" 
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

// Optional: Generate static paths if you know all slugs beforehand
// export async function generateStaticParams() {
//   // Read slugs from the content directory, looking for .html files
//   const postsDirectory = path.join(process.cwd(), 'src/content/blog');
//   const filenames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.html'));
//   return filenames.map((filename) => ({
//     slug: filename.replace(/\.html$/, ''),
//   }));
// }

