'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const links = [
  { href: '/readiness-index', label: 'Knowledge check', matches: ['/', '/readiness-index'] },
  { href: '/modules', label: 'Learning path', matches: ['/modules'] },
  { href: '/blog', label: 'Reading', matches: ['/blog'] },
];

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const isActive = (matches: string[]) => matches.some(path => pathname === path || (path !== '/' && pathname.startsWith(`${path}/`)));
  return (
    <header className="site-header">
      <div className="academy-shell header-inner">
        <Link href="/" className="brand" aria-label="Clinical AI Academy home"><span className="brand-symbol" aria-hidden="true">c<span>ai</span>a</span><span>Clinical AI<span className="brand-subtitle">ACADEMY</span></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link href={link.href} key={link.href} className={isActive(link.matches) ? 'nav-link active' : 'nav-link'} aria-current={isActive(link.matches) ? 'page' : undefined}>{link.label}</Link>)}</nav>
        <div className="mobile-nav"><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Clinical AI Academy</SheetTitle></SheetHeader><nav className="mobile-nav-links" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isActive(link.matches) ? 'page' : undefined}>{link.label}</Link>)}</nav></SheetContent></Sheet></div>
      </div>
    </header>
  );
}
