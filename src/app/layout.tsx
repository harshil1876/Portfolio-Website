import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CommandPalette } from "@/components/CommandPalette";
import { ChatBot } from "@/components/ChatBot";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshil Patel | AI & Data Science Engineer",
  description:
    "Portfolio of Harshil Patel — AI & Data Science Engineer building intelligent systems. Expertise in Machine Learning, NLP, LLMs, Full-Stack Development.",
  keywords: [
    "AI Engineer",
    "Data Science",
    "Machine Learning",
    "Portfolio",
    "Harshil Patel",
    "NLP",
    "LLM",
    "Full Stack Developer",
  ],
  authors: [{ name: "Harshil Patel" }],
  openGraph: {
    title: "Harshil Patel | AI & Data Science Engineer",
    description:
      "Building intelligent systems that solve real-world problems. Machine Learning, NLP, LLMs, Full-Stack Development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshil Patel | AI & Data Science Engineer",
    description:
      "Building intelligent systems that solve real-world problems.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <CommandPalette />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
