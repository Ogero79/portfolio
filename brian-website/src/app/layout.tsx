import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL('https://ogero.dev'),
  title: {
    default: "Brian Ogero - Full Stack Developer & Security Enthusiast",
    template: "%s | Brian Ogero",
  },
  description: "Brian Ogero - Full Stack Developer specializing in React, Next.js, TypeScript, and web security. Computer Security & Forensics student building secure, modern web applications.",
  keywords: [
    "Brian Ogero",
    "ogero",
    "ogero.dev",
    "Full Stack Developer",
    "Web Developer",
    "Computer Security",
    "Forensics",
    "Kabarak University",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python Developer",
    "Web Security",
    "UX/UI Designer",
    "Figma",
    "Tailwind CSS",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Applications",
    "Responsive Design",
    "Modern Web Development",
    "Kenya Developer",
    "Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Brian Ogero" }],
  creator: "Brian Ogero",
  publisher: "Brian Ogero",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ogero.dev",
    siteName: "Brian Ogero Portfolio",
    title: "Brian Ogero - Full Stack Developer & Security Enthusiast",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and web security. Computer Security & Forensics student at Kabarak University.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Ogero Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Ogero - Full Stack Developer & Security Enthusiast",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and web security.",
    creator: "@ogeroofficial",
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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-3 py-2 rounded-md z-50"
        >
          Skip to content
        </a>
        <div id="main">{children}</div>
      </body>
    </html>
  );
}
