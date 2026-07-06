import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIRO Water Enhancer",
  description: "Add AIRO to your water with a simple squeeze or twist.",
};

import { GlobalFooter } from "@/components/GlobalFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
