import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { generatePageMetadata, generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Trupper Multitenant Exam Management System | Wisdom Woke",
  description: "Trupper is a comprehensive multitenant exam management system built with Next.js and MERN stack. Production system streamlining exam processes for institutions with real-time monitoring, automated grading, and scalable architecture.",
  path: "/projects/trupper-multitenant-exam-system",
  keywords: [
    "Trupper",
    "Exam Management System",
    "Multitenant SaaS",
    "EdTech Platform",
    "Next.js Exam System",
    "MERN Stack",
    "Institutional Software",
  ],
  image: "/trupper.png",
});

export default function TrupperProjectPage() {
  const projectSchema = generateProjectSchema({
    name: "Trupper Multitenant Exam Management System",
    description: "Comprehensive exam management system designed to streamline the entire exam process for institutions. Multitenant SaaS platform with real-time monitoring and automated grading.",
    url: "https://site.amidarh.com/trupper",
    image: "/trupper.png",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Multitenant Architecture",
      "Real-time Systems",
    ],
    datePublished: "2024-01-01",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/#projects" },
    { name: "Trupper Exam System", url: "/projects/trupper-multitenant-exam-system" },
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
                <li className="text-foreground">Trupper</li>
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
                Trupper: Multitenant Exam Management System
              </h1>
              <p className="text-xl text-[#686868] mb-6">
                Production exam management platform streamlining institutional exam processes with multitenant architecture
              </p>
            </header>

            <div className="mb-12">
              <Image
                src="/trupper.png"
                alt="Trupper Exam Management System Dashboard"
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
                  Trupper is a comprehensive exam management system designed to streamline the entire exam process 
                  for educational institutions. Built as a multitenant SaaS platform, it enables multiple institutions 
                  to manage their exams independently while sharing the same infrastructure.
                </p>
                <p className="text-[18px] text-[#686868]">
                  The system handles exam creation, scheduling, real-time monitoring, automated grading, result 
                  generation, and comprehensive reporting—all within a secure, scalable architecture.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Problem Statement</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  Educational institutions struggle with manual exam processes, lack of real-time monitoring, 
                  and inefficient result management. Traditional systems are often institution-specific, expensive, 
                  and difficult to scale.
                </p>
                <p className="text-[18px] text-[#686868]">
                  Trupper addresses these challenges by providing a unified, multitenant platform that allows 
                  institutions to manage their entire exam lifecycle efficiently while maintaining data isolation 
                  and security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Architecture & Technical Implementation</h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
                  <ul className="list-disc list-inside text-[18px] text-[#686868] space-y-2">
                    <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
                    <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
                    <li><strong>Database:</strong> MongoDB with multitenant data isolation</li>
                    <li><strong>Real-time:</strong> WebSocket for live exam monitoring</li>
                    <li><strong>Authentication:</strong> JWT-based with role-based access control</li>
                    <li><strong>Cloud:</strong> AWS infrastructure for scalability</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc list-inside text-[18px] text-[#686868] space-y-2">
                    <li>Multitenant architecture with complete data isolation</li>
                    <li>Real-time exam monitoring and proctoring capabilities</li>
                    <li>Automated grading for objective questions</li>
                    <li>Comprehensive exam scheduling and management</li>
                    <li>Advanced reporting and analytics</li>
                    <li>Role-based access control (Admin, Instructor, Student)</li>
                    <li>Secure exam delivery with anti-cheating measures</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Multitenant Architecture</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  The system implements a sophisticated multitenant architecture ensuring complete data isolation 
                  between institutions while sharing infrastructure efficiently. Each tenant (institution) has 
                  isolated data, custom branding, and independent configuration.
                </p>
                <p className="text-[18px] text-[#686868]">
                  This architecture enables cost-effective scaling, centralized maintenance, and rapid deployment 
                  of new features across all tenants while maintaining security and compliance requirements.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Performance & Scalability</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  Built to handle concurrent exams across multiple institutions, Trupper utilizes optimized 
                  database queries, caching strategies, and efficient real-time communication to maintain 
                  performance under high load.
                </p>
                <p className="text-[18px] text-[#686868]">
                  The platform supports thousands of simultaneous exam takers with real-time monitoring, 
                  ensuring system stability and responsive user experience.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Live Project</h2>
                <Link
                  href="https://site.amidarh.com/trupper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
                >
                  Visit Trupper Platform
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

