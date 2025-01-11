import type { Metadata } from "next";
// import {  Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";

// const bricolage = Bricolage_Grotesque({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Wisdom Woke | Full-Stack Software Developer",
  description: "FullStack Software developer. I am a passionate and continuously learning engineer who thrives on embracing challenges that push the boundaries of my current skill set, allowing me to grow and contribute meaningfully to innovative projects.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "Backend Development",
    "Frontend Development",
    "AWS",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Wisdom Woke | Full-Stack Software Developer",
    description: "Full-stack software developer specializing in modern web technologies. Building scalable applications with clean code and innovative solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Wisdom Woke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Woke | Full-Stack Software Developer",
    description: "Full-stack software developer specializing in modern web technologies.",
    creator: "@WISDOMWOKE1"
  }
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
