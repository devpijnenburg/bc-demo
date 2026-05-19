import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BrightCubes — Digital Transformation for Modern Business",
    template: "%s | BrightCubes",
  },
  description:
    "BrightCubes helps businesses transform digitally with smart analytics, cloud solutions, and cutting-edge technology strategies.",
  keywords: [
    "digital transformation",
    "smart analytics",
    "cloud solutions",
    "technology consulting",
    "BrightCubes",
  ],
  authors: [{ name: "BrightCubes" }],
  creator: "BrightCubes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightcubes.io",
    siteName: "BrightCubes",
    title: "BrightCubes — Digital Transformation for Modern Business",
    description:
      "BrightCubes helps businesses transform digitally with smart analytics, cloud solutions, and cutting-edge technology strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightCubes — Digital Transformation for Modern Business",
    description:
      "BrightCubes helps businesses transform digitally with smart analytics, cloud solutions, and cutting-edge technology strategies.",
    creator: "@brightcubes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
