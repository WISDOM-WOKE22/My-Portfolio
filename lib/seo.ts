import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wisdomwoke.com";

/**
 * Generate Person schema for Wisdom Woke
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wisdom Woke",
    jobTitle: "Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer & AI Engineer specializing in AI-powered EdTech platforms, scalable MERN/Next.js systems, cloud deployments (AWS/GCP), and real-time applications.",
    url: siteUrl,
    sameAs: [
      "https://github.com/WISDOM-WOKE22",
      "https://linkedin.com/in/wisdom-woke-703488237/",
      "https://twitter.com/WISDOMWOKE1",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "AI Engineering",
      "EdTech Platforms",
      "MERN Stack",
      "Next.js",
      "AWS Cloud Computing",
      "GCP",
      "Real-time Applications",
      "Backend Quality Engineering",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Redis",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Software Engineering",
    },
  };
}

/**
 * Generate Website schema
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wisdom Woke Portfolio",
    url: siteUrl,
    description: "Portfolio of Wisdom Woke, Full-Stack Developer & AI Engineer",
    author: {
      "@type": "Person",
      name: "Wisdom Woke",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema({
  title,
  description,
  url,
  breadcrumb,
}: {
  title: string;
  description: string;
  url: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteUrl}${url}`,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Wisdom Woke Portfolio",
      url: siteUrl,
    },
    about: {
      "@type": "Person",
      name: "Wisdom Woke",
    },
    ...(breadcrumb && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.url}`,
        })),
      },
    }),
  };
}

/**
 * Generate Project schema
 */
export function generateProjectSchema({
  name,
  description,
  url,
  image,
  techStack,
  datePublished,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  techStack?: string[];
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    ...(image && {
      image: image.startsWith("http") ? image : `${siteUrl}${image}`,
    }),
    ...(techStack && {
      softwareRequirements: techStack.join(", "),
    }),
    author: {
      "@type": "Person",
      name: "Wisdom Woke",
    },
    ...(datePublished && {
      datePublished,
    }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate page metadata
 */
export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}/og-image.jpg`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Wisdom Woke Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@WISDOMWOKE1",
      images: [imageUrl],
    },
  };
}

