"use client"

import { cn } from "@/lib/utils"
import { TypeWriter } from "@/components/type-writer"

export function Terminal(props: React.HTMLAttributes<HTMLDivElement>) {
    var startDate = "2004-10-26"
    function getDateDifference(startDate: string) {
        const start = new Date(startDate)
        const now = new Date()

        let years = now.getFullYear() - start.getFullYear()
        let months = now.getMonth() - start.getMonth()
        let days = now.getDate() - start.getDate()

        if (days < 0) {
            months -= 1
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
            days += prevMonth.getDate()
        }

        if (months < 0) {
            years -= 1
            months += 12
        }

        return { years, months, days }
    }

    const diff = getDateDifference(startDate)

    return (
        <aside
            className={cn(
                "w-full max-w-lg rounded-lg bg-black p-6 font-mono text-white",
                props.className
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex space-x-2 text-red-500">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
                <p className="text-green-400">$ npm run intro</p>
                <p className="text-white">
                    + rcsen@{diff.years}.{diff.months}.{diff.days}
                </p>
                <p className="text-white">
                    Open Source Enthusiast, Blockchain and Cloud developer, In
                    love with AI & Machime learning
                </p>
                <p className="text-green-400">$ flutter pub get skills</p>
                <TypeWriter />
            </div>
        </aside>
    )
}
