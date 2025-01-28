import type { Metadata } from "next";
import "./globals.css";

// Importing necessary components
import FloatingButtonComponent from "@/Components/FloatingButtonComponent";

export const metadata: Metadata = {
  title: "Wanderlust",
  description: "Your Gateway to Unforgettable Adventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <FloatingButtonComponent />
      </body>
    </html>
  );
}
