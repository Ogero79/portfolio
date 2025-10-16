import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brianportfolio.com'),
  title: {
    default: "Brian - Full Stack Developer Portfolio",
    template: "%s | Brian Portfolio",
  },
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and get in touch for collaboration.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "JavaScript", "Portfolio", "Brian"],
  authors: [{ name: "Brian" }],
  creator: "Brian",
  publisher: "Brian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brianportfolio.com",
    siteName: "Brian Portfolio",
    title: "Brian - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@brian",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-3 py-2 rounded-md z-50">Skip to content</a>
          <div id="main">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
