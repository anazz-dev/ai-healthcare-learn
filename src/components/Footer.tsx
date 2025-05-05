import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 p-4 mt-8">
      <nav className="container mx-auto text-center text-sm">
        <ul className="flex justify-center space-x-4">
          {/* Optional links based on design spec */}
          {/* <li><Link href="/about" className="hover:underline">About</Link></li> */}
          <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
          {/* <li><Link href="/contact" className="hover:underline">Contact</Link></li> */}
        </ul>
        <p className="mt-2">&copy; {new Date().getFullYear()} AI for Healthcare Learning. All rights reserved.</p>
      </nav>
    </footer>
  );
}

