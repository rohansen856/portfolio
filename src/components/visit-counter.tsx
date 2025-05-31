"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

import { AnimatedGradientText } from "./magicui/animated-gradient-text"
import { NumberTicker } from "./magicui/number-ticker"

export function VisitCounter() {
    const [count, setCount] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("/api/visit")
            .then((res) => res.json())
            .then((data: any) => {
                setCount(data.count)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching visit count:", error)
                setCount(null)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="absolute top-4 flex w-full items-center text-center lg:top-8 xl:top-12">
            <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                <span
                    className={cn(
                        "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                    )}
                    style={{
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "subtract",
                        WebkitClipPath: "padding-box",
                    }}
                />
                <AnimatedGradientText className="text-sm font-medium">
                    Total Visits
                </AnimatedGradientText>
                <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                {isLoading ? (
                    <Loader2 className="animate-spin text-teal-500" />
                ) : (
                    <NumberTicker
                        value={count ?? 0}
                        className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white"
                    />
                )}
            </div>
        </div>
    )
}
