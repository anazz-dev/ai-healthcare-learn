import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');
export function generateStaticParams() {
  return fs.readdirSync(postsDirectory).filter(name => name.endsWith('.html')).map(name => ({ slug: name.replace(/\.html$/, '') }));
}
export const dynamicParams = false;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!/^[a-zA-Z0-9-]+$/.test(slug)) notFound();
  const filePath = path.join(postsDirectory, `${slug}.html`);
  if (!fs.existsSync(filePath)) notFound();
  const html = fs.readFileSync(filePath, 'utf8');
  return <div className="academy-shell py-10"><article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} /></div>;
}
