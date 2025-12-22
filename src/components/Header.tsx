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
  {/*{ href: "/service", text: "Peer Check" },*/},
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
  { href: "https://clinicalaiacademy.substack.com/", text: "Newsletter", external: true },
]

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
        <div className="hidden md:flex items-center ml-auto">
          {/* Added max-w-none to prevent the menu from clipping items */}
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex items-center gap-1 space-x-0">
              
              {/* Home */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Service - Explicitly placed here to ensure it shows */}
              {/*} <NavigationMenuItem>
                <Link href="/service" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}>
                    Peer Check
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>*/}

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
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Newsletter */}
              <NavigationMenuItem>
                <Link href="https://clinicalaiacademy.substack.com/" legacyBehavior passHref>
                  <NavigationMenuLink
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(navigationMenuTriggerStyle(), "bg-white text-blue-600 hover:bg-gray-100")}
                  >
                    Newsletter
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
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