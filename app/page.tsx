import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import WorkLife from "@/components/workLife";
import Contact from "@/components/contact";
import { generatePageMetadata, generatePersonSchema, generateWebsiteSchema, generateWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Wisdom Woke | Full-Stack Developer & AI Engineer",
  description: "Full-Stack Developer & AI Engineer specializing in AI-powered EdTech platforms, scalable MERN/Next.js systems, cloud deployments (AWS/GCP), and real-time applications. Production experience with Amidarh, Trupper, and enterprise systems.",
  path: "/",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "EdTech Developer",
    "MERN Stack",
    "Next.js Developer",
    "AWS Cloud Engineer",
    "Production Experience",
  ],
});

export default function Home() {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();
  const webpageSchema = generateWebPageSchema({
    title: "Wisdom Woke | Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer & AI Engineer specializing in AI-powered EdTech platforms, scalable MERN/Next.js systems, cloud deployments (AWS/GCP), and real-time applications.",
    url: "/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <div>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <WorkLife />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
