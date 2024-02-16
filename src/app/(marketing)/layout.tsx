import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { AppShowcaseBg } from "@/components/app-bg"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <AppShowcaseBg />
            <header className="container z-40">
                <div className="flex h-12 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />
                </div>
            </header>
            <main className="flex-1">{children}</main>
        </div>
    )
}
