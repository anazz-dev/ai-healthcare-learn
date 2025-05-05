
"use client"

import * as React from "react"
import Link from "next/link"

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

// Updated components array: Removed Case Studies and Resource Library
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Course Modules",
    href: "/modules",
    description:
      "Dive into structured lessons covering AI fundamentals to advanced topics.",
  },
  // {
  //   title: "Case Studies",
  //   href: "/case-studies",
  //   description:
  //     "Explore real-world examples of AI applications in various healthcare settings.",
  // },
  // {
  //   title: "Resource Library",
  //   href: "/resources",
  //   description:
  //     "Access curated articles, tools, and references to deepen your understanding.",
  // },
]

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold mr-6">Clinical AI Academy</Link>
        {/* Ensure text color contrasts with the default trigger background */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "text-gray-900 dark:text-white")}>
                  Home
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* Added text-gray-900 for visibility */}
              <NavigationMenuTrigger className="text-gray-900 dark:text-white">Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* Adjusted grid layout for single item */}
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
            <NavigationMenuItem>
              <NavigationMenuLink href="/progress" className={cn(navigationMenuTriggerStyle(), "text-gray-900 dark:text-white")}>
                  My Progress
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
          {/* Ensure title text is visible in dropdown */}
          <div className="text-sm font-medium leading-none text-gray-900 dark:text-white">{title}</div> 
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-gray-600 dark:text-gray-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

