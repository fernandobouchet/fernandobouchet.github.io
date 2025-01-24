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
  description: "Porfolio of Fernando Bouchet",
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
          <LanguageProvider>{children} </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
