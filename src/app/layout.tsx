import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-ten-orpin-4z4as87101.vercel.app/"),
  title: "Akinola Victor — Software Engineer",
  description: " software engineer based in Lagos, Nigeria. I build scalable web and mobile applications with JavaScript, TypeScript, React, Node.js, Java and SpringBoot",
  keywords: [
    "Akinola Victor",
    "software engineer Lagos",
    "fullstack developer Nigeria",
    "React developer",
    "Node.js developer",
    "Next.js developer",
    "Java software engineer",
    "SpringBoot developer",
    "web developer Lagos",
    "mobile app developer Nigeria",
    "software engineer portfolio",
    "Akinola Victor portfolio"
  ],
  authors: [{ name: "Akinola Victor", url: "https://my-portfolio-ten-orpin-4z4as87101.vercel.app/" }],

  openGraph: {
    title: "Akinola Victor — Fullstack Software Engineer",
    description:
      "Fullstack engineer based in Lagos building scalable web and mobile applications.",
    url: "https://my-portfolio-ten-orpin-4z4as87101.vercel.app/",
    siteName: "Akinola Victor Portfolio",
    images: [
      {
        url: "/my-portfolio-icon.jpg",
        width: 800,
        height: 800,
        alt: "Akinola Victor",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akinola Victor — Software Engineer",
    description: "Software engineer based in Lagos.",
    creator: "@prime_victor1",
    images: ["/my-portfolio-icon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
