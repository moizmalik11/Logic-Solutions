import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Hero, About, Services, Features, Portfolio, Testimonials, Team, FAQ, Contact } from '@/components/sections';
import { getHero } from '@/services/hero';
import { getAbout } from '@/services/about';
import HeroShutter from '@/components/ui/HeroShutter';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const heroData = await getHero().catch(() => null);
  const aboutData = await getAbout().catch(() => null);

  const title = heroData?.title || 'Corporate Website';
  const description = aboutData?.body?.substring(0, 160) || 'We build scalable, high-performance web applications and enterprise software solutions.';
  const keywords = ['web development', 'corporate', 'services', 'portfolio'];
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const image = heroData?.background_image || aboutData?.image || `${url}/default-og.jpg`;

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
      siteName: 'CompanyName',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function Home() {
  const aboutData = await getAbout().catch(() => null);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CompanyName',
    url: siteUrl,
    logo: aboutData?.image || `${siteUrl}/logo.png`,
    description: aboutData?.body || 'We build scalable, high-performance web applications.',
    sameAs: [
      'https://linkedin.com/company/yourcompany',
      'https://twitter.com/yourcompany',
      'https://facebook.com/yourcompany',
    ],
  };

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Inject JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroShutter hero={<Hero />}>
          <About />
          <Services />
          <Features />
          <Portfolio />
          <Testimonials />
          <Team />
          <FAQ />
          <Contact />
        </HeroShutter>
      </main>
      <Footer />
    </>
  );
}
