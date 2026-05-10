import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../data/portfolio";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} | Senior React.js & .NET Full-Stack Software Engineer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  category: "technology",
  classification: "Senior Full-Stack Software Engineer Portfolio",
  keywords: [
    "Vasif Aliyev",
    "Vasif Aliyev portfolio",
    "Senior Full-Stack Software Engineer",
    "Senior React.js .NET Developer",
    "Senior React .NET C# Engineer",
    "React.js .NET full-stack engineer",
    "Senior Software Engineer Kraków",
    "Senior Full Stack Developer Poland",
    "Remote Senior Full-Stack Engineer Europe",
    "Senior React Next.js Developer",
    "InsurTech software engineer",
    "SaaS platform engineer",
    "Enterprise SaaS React .NET Engineer",
    "Next.js developer",
    "React developer Kraków",
    ".NET C# engineer",
    ".NET full-stack engineer",
    "digital platform builder",
    "product engineer",
    "React Native developer",
    "enterprise software engineer",
    "enterprise systems engineer",
    "microservices DDD React .NET",
    "domain driven design software engineer",
    "workflow automation engineer",
    "automotive platform developer",
    "e-commerce platform developer",
    "multi-tenant SaaS architecture",
    "enterprise insurance software",
    "AI-assisted software engineering",
    "AI-driven digital platforms",
    "business model transformation",
    "service quality digital platforms",
    "platform economy research",
    "decision support systems",
    "ICT in management",
    "LLM enterprise workflows",
    "OpenAI Codex",
    "Claude Code",
    "Azure",
    "AWS",
    "React Native",
    ".NET developer",
    "C# developer",
    "Jagiellonian University",
    "Vercel portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
  },
  openGraph: {
    type: "profile",
    url: site.url,
    title: `${site.name} | Senior React.js & .NET Full-Stack Software Engineer`,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vasif Aliyev - Senior Full-Stack Software Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Senior React.js & .NET Full-Stack Software Engineer`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${manrope.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink-950 focus:shadow-soft"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
