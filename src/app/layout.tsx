import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/colors.css"
import "@/styles/globals.css"
import "@/styles/custom.css"

import { siteConfig } from "@/config/site"
import { absoluteUrl, cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { Sidebar } from "@/components/side-nav"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { VisitCounter } from "@/components/visit-counter"

// import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
})

interface RootLayoutProps {
    children: React.ReactNode
}

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Portfolio",
        "Rohan",
        "Rohan Sen",
        "Rohan Chandra Sen",
        "Rohan Sen Portfolio",
        "Rohan Sen Profile",
        "Rohan Sen Resume",
        "Rohan Sen CV",
        "Rohan Sen Projects",
        "Rohan Sen Achievements",
        "Rohan Sen Skills",
        "Rohan Sen Experience",
        "Rohan Sen Open Source",
        "Rohan Sen Open Source Contributions",
        "Rohan Sen Open Source Projects",
    ],
    authors: [
        {
            name: "rcsen",
            url: "https://rcsen.vercel.app",
        },
    ],
    creator: "rcsen",
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@rcsen",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "dark min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontHeading.variable
                )}
            >
                <header className="hidden sm:block">
                    <Sidebar />
                </header>
                <VisitCounter />
                {children}
                <Analytics />
                <Toaster />
                <TailwindIndicator />
            </body>
        </html>
    )
}
