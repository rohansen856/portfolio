"use client"

import { cn } from "@/lib/utils"
import { TypeWriter } from "@/components/type-writer"

export function Terminal(props: React.HTMLAttributes<HTMLDivElement>) {
    var startDate = "2004-10-26"
    function getDateDifference(startDate: string) {
        var start = new Date(startDate).getTime()
        var end = new Date().getTime()

        var difference = Math.abs(end - start)

        var millisecondsInDay = 1000 * 3600 * 24

        var days = Math.floor(difference / millisecondsInDay)
        var months = Math.floor(days / 30)
        var years = Math.floor(months / 12)

        return {
            days: days % 30,
            months: months % 12,
            years: years,
        }
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
                    acquired 5 skills, and worked in 2 domains in {diff.years}
                    yrs
                </p>
                <p className="text-green-400">$ flutter pub get skills</p>
                <TypeWriter />
            </div>
        </aside>
    )
}
