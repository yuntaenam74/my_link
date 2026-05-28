import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/query-provider";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'})

export const metadataBase = new URL('https://my-link.example.com');

export const metadata = {
  title: {
    default: "MyLink",
    template: "%s - MyLink",
  },
  description: "나만의 모든 링크를 하나의 페이지로 모아보는 서비스",
  openGraph: {
    title: "MyLink",
    description: "나만의 모든 링크를 하나의 페이지로 모아보는 서비스",
    url: "https://my-link.example.com",
    siteName: "MyLink",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MyLink Open Graph Image",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyLink",
    description: "나만의 모든 링크를 하나의 페이지로 모아보는 서비스",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = "width=device-width,initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body>
        <QueryProvider>
          <ThemeProvider>
            {children}
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
