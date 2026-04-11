"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Course Modules",
    href: "/modules",
    description: "Dive into structured lessons covering AI fundamentals to advanced topics.",
  },
  {
    title: "My Progress",
    href: "/progress",
    description: "Track your learning journey and view completed modules and certificates.",
  },
]

const navItems = [
  { href: "/", text: "Home" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
  { href: "https://clinicalaiacademy.substack.com/", text: "Newsletter", external: true },
  { href: "https://www.youtube.com/@clinicalaiacademy?sub_confirmation=1", text: "YouTube", external: true },
  { href: "https://www.linkedin.com/company/clinical-ai-academy", text: "LinkedIn", external: true },
]

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg md:text-xl font-bold whitespace-nowrap flex-none"
        >
          CLINICAL AI ACADEMY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center ml-auto gap-2">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex items-center gap-1 space-x-0">

              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Learn Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-white text-blue-600 hover:bg-gray-100">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Blog */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/blog" className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}>
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Newsletter */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="https://clinicalaiacademy.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}
                  >
                    Newsletter
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Social icons */}
          <Link
            href="https://www.youtube.com/@clinicalaiacademy?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center justify-center w-9 h-9 rounded bg-white text-blue-600 hover:bg-gray-100 transition-colors"
          >
            <YouTubeIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/clinical-ai-academy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded bg-white text-blue-600 hover:bg-gray-100 transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex-none">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-blue-700">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.text}
                  </Link>
                ))}
                <hr className="my-2" />
                <Link
                  href="/modules"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Course Modules
                </Link>
                <Link
                  href="/progress"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Progress
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
