import { cn } from "@/lib/utils"

import { ProjectCard } from "../project-card"

const projectsConfig = [
    {
        color: "from-slate-50 to-indigo-200 dark:border-slate-700 dark:from-slate-800 dark:to-indigo-900",
        name: "Portbuilder",
        description: "A Web Project Made using nextjs, tailwindcss and drizzle",
        link: "https://github.com/rohansen856",
    },
    {
        color: "from-purple-50 to-fuchsia-300 dark:border-slate-700 dark:from-purple-900/50 dark:to-fuchsia-700",
        name: "CampusOrbit - Flutter",
        description: "A Flutter App created for IIITDMJ students",
        link: "https://github.com/rohansen856",
    },
    {
        color: "from-slate-50 to-blue-300 dark:border-slate-700 dark:from-slate-800 dark:to-blue-900",
        name: "Campusorbit - WEB",
        description: "A Web Admin panel to manage Campusorbit - Flutter app",
        link: "https://github.com/rohansen856",
    },
]

export function Projects() {
    return (
        <section
            className="relative mb-16 mt-6 w-full"
            about="projects"
            id="projects"
        >
            <h3 className="mb-12 w-full py-3 text-center text-3xl font-bold lg:text-4xl">
                Projects
            </h3>
            <div className="my-16 flex w-full flex-col items-center justify-center gap-8 px-8">
                {projectsConfig.map((i, index) => (
                    <ProjectCard
                        className={cn(
                            index % 2 === 0
                                ? "md:mr-[-15%] lg:mr-[-20%]"
                                : "md:mr-[15%] lg:mr-[20%]"
                        )}
                        gradient={i.color}
                        name={i.name}
                        description={i.description}
                        link={i.link}
                    />
                ))}
            </div>
        </section>
    )
}
