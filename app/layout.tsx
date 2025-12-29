import type { Metadata } from "next";
// import {  Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";

// const bricolage = Bricolage_Grotesque({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wisdomwoke.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wisdom Woke | Full-Stack Developer & AI Engineer",
    template: "%s | Wisdom Woke"
  },
  description: "Full-Stack Developer & AI Engineer specializing in AI-powered EdTech platforms, scalable MERN/Next.js systems, cloud deployments (AWS/GCP), and real-time applications. Production experience with Amidarh, Trupper, and enterprise systems.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "EdTech Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "AWS Cloud Engineer",
    "GCP Developer",
    "Real-time Applications",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Backend Development",
    "Frontend Development",
    "AWS EC2",
    "Docker",
    "Redis",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Wisdom Woke" }],
  creator: "Wisdom Woke",
  publisher: "Wisdom Woke",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Wisdom Woke Portfolio",
    title: "Wisdom Woke | Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer & AI Engineer with production experience in AI-powered EdTech platforms, scalable MERN/Next.js systems, and cloud deployments. Expert in real-time applications and backend quality engineering.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wisdom Woke - Full-Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Woke | Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer & AI Engineer specializing in AI-powered EdTech platforms and scalable systems.",
    creator: "@WISDOMWOKE1",
    site: "@WISDOMWOKE1",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
  classification: "Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${bricolage.variable} antialiased`}
        className={`antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
