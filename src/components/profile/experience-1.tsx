import { Globe } from "lucide-react"

export async function Experience() {
    const experiences = [
        {
            name: "BetterMindLabs",
            position: "Software Development Intern",
            timeline: "June 2024 - Oct 2024",
            points: [
                "Collaborated with 2 senior developers to create and maintain 2 primary codebases for marketing of the primary bettermindlabs site",
                "Used No-code tools like WIX studio and Coding Framework like Reactjs to replicate website for better performance metrices",
            ],
        },
        {
            name: "GSSOC'24",
            position: "Open Source Developer",
            timeline: "March 2024 - May 2024",
            points: [
                "Start of my open source journey",
                "Added more than 10,000 lines of code through merged PRs to more than 16 repositories as a part of GSSOC'24 open source program",
            ],
        },
        {
            name: "Hacktoberfest'24",
            position: "Open Source Developer",
            timeline: "Oct 2024 - Nov 2024",
            points: [
                "Continuation of my open source journey",
                "Contributed to more than 20 repositories as a part of Hacktoberfest'24 open source program",
            ],
        },
    ]
    return (
        <section
            className="container relative mb-16 mt-6 w-full"
            about="experience"
            id="experience"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Experience
            </h3>
            {experiences.map((exp) => (
                <div className="pb-12">
                    <div className="flex items-center gap-2">
                        <Globe className="text-teal-600" />
                        <h2 className="-mb-1 font-heading text-3xl">
                            {exp.name}
                        </h2>
                    </div>
                    <p className="mb-6 text-xl ">
                        {exp.position}
                        {"  "}({exp.timeline})
                    </p>

                    <ul className="space-y-2">
                        {exp.points.map((i) => (
                            <li>- {i}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}
