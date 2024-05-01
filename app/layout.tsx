import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Background } from "@/components/ui/background";
import { LanguageProvider } from "@/context/languageContext";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando Bouchet Porfolio",
  description: "Porfolio of Fernando Bouchet",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={OpenSans.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Background />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
