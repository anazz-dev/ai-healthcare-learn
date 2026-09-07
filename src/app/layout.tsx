import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout"; // Import the custom Layout component


export const metadata: Metadata = {
  title: "Clinical AI Academy",
  description: "A clinical AI knowledge check and an open learning path for healthcare professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout> {/* Wrap children with the custom Layout */}
      </body>
    </html>
  );
}

