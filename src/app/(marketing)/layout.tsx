import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { AppShowcaseBg } from "@/components/app-bg"
import { MainNav } from "@/components/main-nav"
import { RightBar } from "@/components/side-bar"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <AppShowcaseBg />
            <RightBar className="hidden md:flex lg:hidden xl:flex" />
            <header className="container fixed top-0 z-40 backdrop-blur">
                <div className="flex h-12 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />
                </div>
            </header>
            <main className="flex-1">{children}</main>
        </div>
    )
}
