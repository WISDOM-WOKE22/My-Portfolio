import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { generatePageMetadata, generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Amidarh AI Learning Platform | Wisdom Woke",
  description: "Amidarh is an AI-powered EdTech platform built with Next.js, MERN stack, and cloud infrastructure. Production system serving thousands of users with real-time learning features, AI-driven content recommendations, and scalable architecture.",
  path: "/projects/amidarh-ai-learning-platform",
  keywords: [
    "Amidarh",
    "EdTech Platform",
    "AI Learning Platform",
    "Next.js EdTech",
    "MERN Stack",
    "Cloud EdTech",
    "AI Education",
  ],
  image: "/amidarh.png",
});

export default function AmidarhProjectPage() {
  const projectSchema = generateProjectSchema({
    name: "Amidarh AI Learning Platform",
    description: "AI-powered EdTech platform offering various products to keep users ahead. Built with Next.js, MERN stack, and cloud infrastructure.",
    url: "https://amidarh.com",
    image: "/amidarh.png",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "AWS",
      "TypeScript",
      "Tailwind CSS",
    ],
    datePublished: "2024-01-01",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/#projects" },
    { name: "Amidarh AI Learning Platform", url: "/projects/amidarh-ai-learning-platform" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <Header />
        <article className="min-h-screen">
          <div className="flex items-center justify-center py-10 px-3">
          <div className="w-full max-w-4xl">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-[#686868]">
                <li>
                  <Link href="/" className="hover:text-foreground">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/#projects" className="hover:text-foreground">Projects</Link>
                </li>
                <li>/</li>
                <li className="text-foreground">Amidarh</li>
              </ol>
            </nav>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[#686868] hover:text-foreground mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Amidarh: AI-Powered EdTech Platform
              </h1>
              <p className="text-xl text-[#686868] mb-6">
                Production EdTech platform serving thousands of users with AI-driven learning experiences
              </p>
            </header>

            <div className="mb-12">
              <Image
                src="/amidarh.png"
                alt="Amidarh AI Learning Platform Dashboard"
                width={1200}
                height={675}
                className="w-full rounded-lg border border-gray-200"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  Amidarh is a comprehensive AI-powered EdTech and productivity platform designed to keep users 
                  ahead in their learning journey. The platform offers various products and services, leveraging 
                  AI to personalize learning experiences and optimize educational outcomes.
                </p>
                <p className="text-[18px] text-[#686868]">
                  Built with modern full-stack technologies, Amidarh demonstrates production-grade architecture 
                  capable of scaling to serve thousands of concurrent users while maintaining performance and 
                  reliability.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Problem Statement</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  Traditional EdTech platforms lack personalization and struggle to adapt to individual learning 
                  patterns. Users need a platform that combines multiple educational tools with AI-driven insights 
                  to optimize their learning journey.
                </p>
                <p className="text-[18px] text-[#686868]">
                  The challenge involved building a scalable, multi-product platform that could handle real-time 
                  interactions, AI processing, and diverse user needs while maintaining high performance and 
                  user experience standards.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Architecture & Technical Implementation</h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
                  <ul className="list-disc list-inside text-[18px] text-[#686868] space-y-2">
                    <li><strong>Frontend:</strong> Next.js 15, React, TypeScript, Tailwind CSS</li>
                    <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
                    <li><strong>Database:</strong> MongoDB for flexible document storage</li>
                    <li><strong>Cloud Infrastructure:</strong> AWS (EC2, S3, CloudFront)</li>
                    <li><strong>AI Integration:</strong> Custom AI models for content recommendations</li>
                    <li><strong>Real-time Features:</strong> WebSocket connections for live updates</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc list-inside text-[18px] text-[#686868] space-y-2">
                    <li>AI-powered content recommendations and personalization</li>
                    <li>Multi-product platform architecture</li>
                    <li>Real-time learning progress tracking</li>
                    <li>Scalable cloud infrastructure</li>
                    <li>Responsive design for all devices</li>
                    <li>Performance-optimized with Next.js SSR/SSG</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Performance & Scalability</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  The platform is built with scalability in mind, utilizing Next.js server-side rendering and 
                  static generation for optimal performance. Cloud infrastructure on AWS ensures high availability 
                  and the ability to scale horizontally based on demand.
                </p>
                <p className="text-[18px] text-[#686868]">
                  Database optimization, caching strategies, and efficient API design ensure fast response times 
                  even under high load, supporting thousands of concurrent users without degradation.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">AI Integration</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  Amidarh leverages AI to provide personalized learning experiences, content recommendations, 
                  and adaptive learning paths. The AI system analyzes user behavior, learning patterns, and 
                  performance data to optimize the educational experience.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Live Project</h2>
                <Link
                  href="https://amidarh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
                >
                  Visit Amidarh Platform
                  <MoveUpRight className="w-5 h-5" />
                </Link>
              </section>
            </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
      </>
    );
}

