import Image from "next/image"
import { ChevronRight, Globe } from "lucide-react"

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
            name: "European Summer of Code'26",
            position: "Open Source Mentee Intern",
            start: new Date("2025-12-01"),
            end: new Date("2026-03-31"),
            timeline: "Dec 2025 - Mar 2026",
            points: [
                "European Summer of Code 2026 Mentee under OpenML & AIonDemand",
                "Built AutoML evaluation workflow on OpenML, automating dataset ingestion, model benchmarking, and experiment tracking.",
                "Developed ML utilities for AIonDemand improving model stability across demand prediction workloads.",
            ],
            color: "teal",
            logo: "/experience/esoc.png",
        },
        {
            name: "Cero Hero",
            position: "Backend Intern",
            start: new Date("2025-07-15"),
            end: new Date("2025-10-14"),
            timeline: "July 2025 - Oct 2025",
            points: [
                "Worked as a backend intern at Cero Hero, a sustainability-focused Finnish startup.",
                "Developed Golang APIs for user management, product catalog, and processing services.",
            ],
            color: "teal",
            logo: "/experience/cerohero.png",
        },
        {
            name: "Linux Foundation Mentorship'25",
            position: "Open Source Mentee",
            start: new Date("2025-05-01"),
            end: new Date("2025-08-31"),
            timeline: "May 2025 - Aug 2025",
            points: [
                "Selected as an LFX Mentee under the Open Mainframe Project",
                "Contributing to Zowe Zebra - monitoring performance of zOS systems",
            ],
            color: "teal",
            logo: "/experience/lfx.png",
        },
        {
            name: "Summer of Bitcoin'25",
            position: "Open Source Developer",
            start: new Date("2025-05-01"),
            end: new Date("2025-08-31"),
            timeline: "May 2025 - Aug 2025",
            points: [
                "Summer of Bitcoin open source under the Braidpool organization",
                "Creating of an AI assisted coding and FIM tool built specifically for bitcoin or blockchain related tasks",
            ],
            color: "teal",
            logo: "/experience/sob.png",
        },
        {
            name: "C4GT DMP'25",
            position: "Developer Mentee",
            start: new Date("2025-05-01"),
            end: new Date("2025-08-31"),
            timeline: "May 2025 - Aug 2025",
            points: [
                "Selected as a Developer Mentee for C4GT (Code for GovTech) 2025 under NSUT organization",
                "Contributing to open-source digital public infrastructure in collaboration with government bodies",
                "Working on impactful solutions aligned with the Digital Public Goods (DPG) mission for public benefit",
            ],
            color: "teal",
            logo: "/experience/c4gt.png",
        },
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
                            <ul className="space-y-3">
                                {exp.points.map((i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                                        <span className="leading-relaxed text-gray-700 dark:text-gray-300">
                                            {i}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="my-auto mr-12 hidden aspect-square shrink-0 md:ml-6 md:grid">
                            {exp.logo && (
                                <Image
                                    src={exp.logo}
                                    alt={`${exp.name} logo`}
                                    width={100}
                                    height={100}
                                    className="m-auto overflow-hidden rounded-full border-2 border-teal-600/50 bg-teal-500/20 object-contain p-1"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
