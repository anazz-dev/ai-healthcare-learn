import Link from 'next/link';

export default function Footer() {
  return <footer className="site-footer"><div className="academy-shell footer-inner"><div><p className="footer-brand">Clinical AI Academy</p><p>Open learning about AI in healthcare.</p></div><nav aria-label="Further resources"><Link href="/blog">Reading</Link><a href="https://www.youtube.com/@clinicalaiacademy" target="_blank" rel="noopener noreferrer">YouTube</a><a href="https://clinicalaiacademy.substack.com/" target="_blank" rel="noopener noreferrer">Newsletter</a><Link href="/privacy">Privacy</Link></nav><p className="copyright">© {new Date().getFullYear()} Clinical AI Academy</p></div></footer>;
}
