"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react" // Import Menu icon

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
} from "@/components/ui/sheet" // Import Sheet components
import { Button } from "@/components/ui/button" // Import Button

// Updated components array for the "Learn" dropdown
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Courses", // Changed from "Course Modules"
    href: "/modules",
    description: "", // Tagline removed as per user request
  },
  {
    title: "My Progress", // Added "My Progress" here
    href: "/progress",
    description: "", // No tagline, consistent with "Courses"
  },
]

// Define navigation items for mobile menu (excluding items under "Learn")
const navItems = [
  { href: "/", text: "Home" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
  // "My Progress" is removed from here as it's now under "Learn"
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold mr-6">CLINICAL AI ACADEMY</Link>

        {/* Desktop Navigation (Hidden on small screens) */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "text-gray-900 dark:text-white")}>
                    Home
                  </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-900 dark:text-white">Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] lg:w-[400px] ">
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
              <NavigationMenuItem>
                <NavigationMenuLink href="/blog" className={cn(navigationMenuTriggerStyle(), "text-gray-900 dark:text-white")}>
                    Blog
                  </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={cn(navigationMenuTriggerStyle(), "text-gray-900 dark:text-white")}>
                    Contact
                  </NavigationMenuLink>
              </NavigationMenuItem>
              {/* "My Progress" standalone link removed from desktop nav */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation (Hamburger Button - Hidden on medium screens and up) */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {/* Mobile Links from navItems array */}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-900 dark:text-white hover:underline"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {item.text}
                  </Link>
                ))}
                {/* Mobile Learn Links - explicitly listed */}
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 pt-2">Learn:</p>
                <Link
                  href="/modules"
                  className="text-lg font-medium text-gray-900 dark:text-white hover:underline pl-4"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  Courses
                </Link>
                <Link
                  href="/progress"
                  className="text-lg font-medium text-gray-900 dark:text-white hover:underline pl-4"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
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
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900 dark:text-white">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-gray-600 dark:text-gray-400">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

