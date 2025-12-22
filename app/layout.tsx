import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Open_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fernando Bouchet | Full Stack Developer",
  description: "Portfolio of Fernando Bouchet, showcasing skills and projects as a Full Stack Developer.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Fernando Bouchet"],
  authors: [{ name: "Fernando Bouchet" }],
  openGraph: {
    title: "Fernando Bouchet | Full Stack Developer",
    description: "Portfolio of Fernando Bouchet, showcasing skills and projects as a Full Stack Developer.",
    url: "https://your-portfolio-url.com", // Replace with actual URL if known
    siteName: "Fernando Bouchet Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Bouchet | Full Stack Developer",
    description: "Portfolio of Fernando Bouchet, showcasing skills and projects as a Full Stack Developer.",
    creator: "@yourhandle", // Replace with actual handle if known
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
        url: "/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
        url: "/favicon-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
