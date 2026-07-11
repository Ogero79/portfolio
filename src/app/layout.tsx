import type { Metadata } from "next";
import { Space_Grotesk, Syne, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ogero.dev'),
  title: {
    default: "Brian Ogero — Software Engineer & Security Researcher",
    template: "%s | Brian Ogero",
  },
  description: "Software engineer specializing in AI-integrated applications, secure web architectures, and enterprise-grade software. Based in Kenya.",
  keywords: [
    "Brian Ogero",
    "Software Engineer",
    "Cybersecurity",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Kenya",
    "Security Researcher",
  ],
  authors: [{ name: "Brian Ogero" }],
  creator: "Brian Ogero",
  publisher: "Brian Ogero",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable}`}
        style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
      >
        <div id="main">{children}</div>
      </body>
    </html>
  );
}
