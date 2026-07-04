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
  title: "LogicSolution — Web, Mobile & AI Development Agency",
  description: "LogicSolution builds custom websites, mobile apps, and AI-powered products for startups and businesses worldwide. Where logic meets innovation, one product at a time.",
  keywords: "web development agency, mobile app development, AI development company, custom software development, SaaS development, Laravel development, Next.js development",
  openGraph: {
    type: "website",
    title: "LogicSolution — Web, Mobile & AI Development Agency",
    description: "LogicSolution builds custom websites, mobile apps, and AI-powered products for startups and businesses worldwide.",
    images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlobalBackground />
          <div className="relative z-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
