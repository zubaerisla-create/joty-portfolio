import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jotirmoya Bhakta Sarker — Software Engineering Student & Future Researcher",
  description:
    "Personal portfolio of Jotirmoya Bhakta Sarker, Software Engineering undergraduate at Daffodil International University. Passionate about analytical problem solving, software development, and academic research.",
  keywords: [
    "Jotirmoya Bhakta Sarker",
    "Jotirmoy",
    "Software Engineering",
    "Daffodil International University",
    "DIU",
    "Problem Solver",
    "Academic Research",
    "Competitive Programming",
  ],
  authors: [{ name: "Jotirmoya Bhakta Sarker" }],
  creator: "Jotirmoya Bhakta Sarker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jotirmoya.dev",
    title: "Jotirmoya Bhakta Sarker — Software Engineering Student & Future Researcher",
    description:
      "BSc in Software Engineering at Daffodil International University. Exploring problem solving, modern development, and academic research.",
    siteName: "Jotirmoya Bhakta Sarker Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jotirmoya Bhakta Sarker — Portfolio",
    description:
      "Software Engineering student at Daffodil International University. Problem solver and future researcher.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFCF7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas text-charcoal font-sans antialiased selection:bg-pastel-pink selection:text-charcoal noise-overlay flex flex-col">
        {children}
      </body>
    </html>
  );
}
