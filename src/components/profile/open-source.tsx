import { ExternalLink, Github } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ContributionProps = {
    projectName: string
    prNumber: number
    description: string
    prLink: string
    language: string
    organization: string
    color?: string
}

const contributions: ContributionProps[] = [
    {
        projectName: "CCExtractor",
        prNumber: 1234,
        description:
            "Implemented a new feature for subtitle extraction from video files with improved accuracy",
        prLink: "https://github.com/CCExtractor/ccextractor/pull/1234",
        language: "C++",
        organization: "CCExtractor",
        color: "teal",
    },
    {
        projectName: "CORD",
        prNumber: 567,
        description:
            "Fixed a critical bug in the data processing pipeline that improved performance by 30%",
        prLink: "https://github.com/CORD/cord/pull/567",
        language: "Python",
        organization: "CORD",
        color: "teal",
    },
    {
        projectName: "Zulip",
        prNumber: 8910,
        description:
            "Enhanced the UI/UX of the messaging component with new accessibility features",
        prLink: "https://github.com/zulip/zulip/pull/8910",
        language: "TypeScript",
        organization: "Zulip",
        color: "teal",
    },
    {
        projectName: "React",
        prNumber: 2345,
        description:
            "Contributed to the documentation for the new concurrent rendering features",
        prLink: "https://github.com/facebook/react/pull/2345",
        language: "JavaScript",
        organization: "Facebook",
        color: "teal",
    },
    {
        projectName: "TensorFlow",
        prNumber: 6789,
        description:
            "Added support for a new optimization algorithm in the machine learning pipeline",
        prLink: "https://github.com/tensorflow/tensorflow/pull/6789",
        language: "Python",
        organization: "Google",
        color: "teal",
    },
    {
        projectName: "Next.js",
        prNumber: 3456,
        description:
            "Improved the build process to reduce compilation time for large projects",
        prLink: "https://github.com/vercel/next.js/pull/3456",
        language: "TypeScript",
        organization: "Vercel",
        color: "teal",
    },
]

export function OpenSourceContributions() {
    return (
        <section
            className="container relative mb-16 mt-6 w-full"
            about="open-source-contributions"
            id="open-source-contributions"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Open Source Contributions
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contributions.map((contribution) => (
                    <div
                        key={`${contribution.projectName}-${contribution.prNumber}`}
                        className={cn(
                            "group relative overflow-hidden rounded-xl border-2 bg-gradient-to-br p-6 transition-all duration-300 hover:shadow-lg",
                            `border-${
                                contribution.color || "teal"
                            }-600/30 from-${
                                contribution.color || "teal"
                            }-600/5 hover:border- to-transparent${
                                contribution.color || "teal"
                            }-600/50`
                        )}
                    >
                        <div className="absolute -right-10 -top-10 z-0 opacity-5 transition-all duration-300 group-hover:opacity-10">
                            <Github size={120} />
                        </div>

                        <div className="relative z-10 flex h-full flex-col">
                            <div className="mb-2 flex items-center gap-2">
                                <Github className="text-teal-600" size={20} />
                                <h4 className="font-heading text-xl font-semibold">
                                    {contribution.projectName}{" "}
                                    <span className="text-teal-500">
                                        #{contribution.prNumber}
                                    </span>
                                </h4>
                            </div>

                            <p className="mb-3 text-sm text-muted-foreground">
                                {contribution.organization}
                            </p>

                            <p className="mb-4 grow">
                                {contribution.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between">
                                <Badge
                                    variant="outline"
                                    className="border-teal-600/30 bg-teal-600/10 text-teal-500"
                                >
                                    {contribution.language}
                                </Badge>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-1 border-teal-600/30 hover:bg-teal-600/10 hover:text-teal-500"
                                    asChild
                                >
                                    <a
                                        href={contribution.prLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View PR <ExternalLink size={14} />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
