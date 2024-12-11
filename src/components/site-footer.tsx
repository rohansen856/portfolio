import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer
            className={cn(
                "flex w-full flex-col items-center justify-center gap-4 p-4 md:p-8",
                className
            )}
        >
            <div className="flex flex-col items-center border-t-2 px-4 pt-2 md:flex-row md:gap-4">
                <Icons.logo />
                <p className="text-center text-sm leading-loose md:text-left">
                    Built by{" "}
                    <a
                        href={siteConfig.links.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Rohan Sen
                    </a>
                    . Hosted on{" "}
                    <a
                        href="https://vercel.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Vercel
                    </a>
                    . The source code is available on{" "}
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
            <p className="text-center">
                Hit me up anytime u want! always available for a good talk 😊
            </p>
        </footer>
    )
}
