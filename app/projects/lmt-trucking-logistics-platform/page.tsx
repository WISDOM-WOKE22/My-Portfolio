import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { generatePageMetadata, generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "LMT Trucking Logistics Platform | Wisdom Woke",
  description: "LMT Trucking is a car shipping and vehicle transportation platform built with Next.js. Production logistics system offering car shipping, vehicle transportation services with real-time tracking and booking management.",
  path: "/projects/lmt-trucking-logistics-platform",
  keywords: [
    "LMT Trucking",
    "Car Shipping Platform",
    "Vehicle Transportation",
    "Logistics Software",
    "Next.js Logistics",
    "Transportation Management",
  ],
  image: "/lmt.png",
});

export default function LMTTruckingProjectPage() {
  const projectSchema = generateProjectSchema({
    name: "LMT Trucking Logistics Platform",
    description: "Car Shipping and Vehicle Shipping Services Company offering comprehensive transportation services with real-time tracking and booking management.",
    url: "https://lmttrucking.vercel.app/",
    image: "/lmt.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    datePublished: "2024-01-01",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/#projects" },
    { name: "LMT Trucking", url: "/projects/lmt-trucking-logistics-platform" },
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
                <li className="text-foreground">LMT Trucking</li>
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
                LMT Trucking: Car Shipping & Vehicle Transportation Platform
              </h1>
              <p className="text-xl text-[#686868] mb-6">
                Production logistics platform for car shipping and vehicle transportation services
              </p>
            </header>

            <div className="mb-12">
              <Image
                src="/lmt.png"
                alt="LMT Trucking Platform Dashboard"
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
                  LMT Trucking is a comprehensive car shipping and vehicle transportation services platform 
                  that connects customers with reliable vehicle shipping solutions. The platform offers a 
                  wide range of services including car shipping, vehicle transportation, and logistics management.
                </p>
                <p className="text-[18px] text-[#686868]">
                  Built with Next.js and modern web technologies, the platform provides an intuitive interface 
                  for booking, tracking, and managing vehicle shipments with real-time updates and transparent 
                  pricing.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Problem Statement</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  The vehicle shipping industry lacks transparency, efficient booking systems, and real-time 
                  tracking capabilities. Customers often struggle to find reliable carriers and track their 
                  shipments throughout the transportation process.
                </p>
                <p className="text-[18px] text-[#686868]">
                  LMT Trucking addresses these challenges by providing a streamlined platform that simplifies 
                  the booking process, offers transparent pricing, and enables real-time shipment tracking for 
                  both customers and carriers.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Architecture & Technical Implementation</h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
                  <ul className="list-disc list-inside text-[18px] text-[#686868] space-y-2">
                    <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
                    <li><strong>Deployment:</strong> Vercel for optimal performance</li>
                    <li><strong>Styling:</strong> Tailwind CSS for responsive design</li>
                    <li><strong>Performance:</strong> Next.js SSR/SSG for fast loading</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc list-inside text-[18px] text-[#686868] space-y-2">
                    <li>Intuitive booking system for vehicle shipments</li>
                    <li>Real-time shipment tracking and updates</li>
                    <li>Transparent pricing and quote generation</li>
                    <li>Responsive design for all devices</li>
                    <li>Service information and customer support</li>
                    <li>Performance-optimized with Next.js</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Performance & User Experience</h2>
                <p className="text-[18px] text-[#686868] mb-4">
                  The platform is built with performance in mind, utilizing Next.js server-side rendering 
                  and static generation to ensure fast page loads and optimal Core Web Vitals scores.
                </p>
                <p className="text-[18px] text-[#686868]">
                  Responsive design ensures seamless experience across desktop, tablet, and mobile devices, 
                  making it easy for customers to book and track shipments from any device.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Live Project</h2>
                <Link
                  href="https://lmttrucking.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
                >
                  Visit LMT Trucking Platform
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

