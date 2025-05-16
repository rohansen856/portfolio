import Image from "next/image"
import { Globe } from "lucide-react"

import { cn } from "@/lib/utils"

type ExperienceArrProps = {
    name: string
    position: string
    start: Date
    end: Date
    timeline: string
    points: string[]
    color: string
    logo?: string
}[]

export function Experience() {
    const experiences: ExperienceArrProps = [
        {
            name: "BetterMindLabs",
            position: "Software Development Intern",
            start: new Date("2024-06-01"),
            end: new Date("2024-10-31"),
            timeline: "June 2024 - Oct 2024",
            points: [
                "Collaborated with 2 senior developers to create and maintain 2 primary codebases for marketing of the primary bettermindlabs site",
                "Used No-code tools like WIX studio and Coding Framework like Reactjs to replicate website for better performance metrices",
            ],
            color: "teal",
            logo: "/experience/bml.png",
        },
        {
            name: "Summer of Bitcoin'25",
            position: "Open Source Developer",
            start: new Date("2025-05-01"),
            end: new Date("2025-08-31"),
            timeline: "May 2024 - Aug 2024",
            points: [
                "Summer of Bitcoin open source under the Braidpool organization",
                "Creating of an AI assisted coding and FIM tool built specifically for bitcoin or blockchain related tasks",
            ],
            color: "teal",
            logo: "/experience/sob.png",
        },
        {
            name: "Open Source Contributions",
            position: "Open Source enthusiast",
            start: new Date("2023-01-01"),
            end: new Date("2024-01-01"),
            timeline: "> 1 Year",
            points: [
                "More than 30 professional contributions in various open source projects",
                "Contributed to multiple repositories in various professional organizations like CCExtractor, CORD, Zulip",
            ],
            color: "teal",
        },
    ]

    const sortedExperiences = experiences.sort(
        (a, b) => b.start.getTime() - a.start.getTime()
    )

    return (
        <section
            className="container relative mb-16 mt-6 w-full"
            about="experience"
            id="experience"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Experience
            </h3>
            {sortedExperiences.map((exp) => (
                <div
                    key={exp.name}
                    className={cn(
                        "relative mb-12 overflow-hidden md:mb-4 md:border-l-4 md:pl-4",
                        `border-${exp.color}-600/50 from-${exp.color}-600/10 to-transparent py-4 md:bg-gradient-to-r`
                    )}
                >
                    {exp.logo && (
                        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 md:hidden">
                            <Image
                                src={exp.logo}
                                alt={`${exp.name} logo`}
                                width={200}
                                height={200}
                                className="overflow-hidden rounded-full object-contain"
                            />
                        </div>
                    )}

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Globe className="text-teal-600" />
                                <h2 className="-mb-1 font-heading text-3xl">
                                    {exp.name}
                                </h2>
                            </div>
                            <p className="mb-6 text-xl">
                                {exp.position} ({exp.timeline})
                            </p>
                            <ul className="space-y-2">
                                {exp.points.map((i) => (
                                    <li key={i}>- {i}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="my-auto hidden shrink-0 md:ml-6 md:block">
                            {exp.logo && (
                                <Image
                                    src={exp.logo}
                                    alt={`${exp.name} logo`}
                                    width={100}
                                    height={100}
                                    className="mr-12 overflow-hidden rounded-full border-2 border-teal-600/50 bg-teal-600/10 object-contain p-1"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
