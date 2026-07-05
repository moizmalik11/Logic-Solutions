import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { GlobalBackground } from "@/components/ui/GlobalBackground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://logicsolution.vercel.app'),
  title: "LogicSolution — Web, Mobile & AI Development Agency",
  description: "LogicSolution builds custom websites, mobile apps, and AI-powered products for startups and businesses worldwide. Where logic meets innovation, one product at a time.",
  keywords: "web development agency, mobile app development, AI development company, custom software development, SaaS development, Laravel development, Next.js development",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    title: "LogicSolution — Web, Mobile & AI Development Agency",
    description: "LogicSolution builds custom websites, mobile apps, and AI-powered products for startups and businesses worldwide.",
    images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicSolution — Web, Mobile & AI Development Agency",
    description: "LogicSolution builds custom websites, mobile apps, and AI-powered products for startups and businesses worldwide.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LogicSolution',
    url: 'https://logicsolution.vercel.app',
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    description: 'LogicSolution builds custom websites, mobile apps, and AI-powered products for startups and businesses worldwide.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8900',
      contactType: 'customer service'
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <GlobalBackground />
          <div className="relative z-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
