import Image from "next/image"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CircularBg } from "@/components/circle-background"

export function Skills() {
    const allSkills = [
        "typescript",
        "blender",
        "dartlang",
        "react",
        "cpp",
        "figma",
        "next-js",
        "flutter",
        "docker",
    ]
    function shuffleArray(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }
    const skills = shuffleArray(allSkills)

    return (
        <section
            className="container mb-16 mt-20 flex w-full flex-col items-center pb-32"
            about="skills"
            id="skills"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Skills
            </h3>
            <div className="mt-12 flex flex-col">
                <h3 className="mb-16 text-center text-5xl font-bold">
                    Language Skills
                </h3>
                <div className="mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    {[
                        "java",
                        "javascript",
                        "typescript",
                        "c",
                        "cpp",
                        "python",
                        "dartlang",
                        "golang",
                        "rust",
                        "kotlin",
                    ].map((i) => (
                        <span className="relative mb-12 flex size-16 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/skills/${i}.svg`}
                                alt=""
                                fill
                                className="overflow-hidden rounded-xl bg-secondary object-contain p-4"
                            />{" "}
                            <p className="absolute -bottom-8 text-nowrap text-center text-lg">
                                {i}
                            </p>
                        </span>
                    ))}
                </div>
                <h3 className="mb-16 text-center text-5xl font-bold">
                    Frameworks
                </h3>
                <div className="mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    {[
                        "react",
                        "next-js",
                        "aws",
                        "nodejs",
                        "svelte",
                        "vite",
                        "polygon",
                        "cargo",
                        "django",
                        "gingonic",
                        "flask",
                        "astro",
                        "flutter",
                    ].map((i) => (
                        <span className="relative mb-12 flex size-16 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/skills/${i}.svg`}
                                alt=""
                                fill
                                className="overflow-hidden rounded-xl bg-secondary object-contain p-4"
                            />{" "}
                            <p className="absolute -bottom-8 text-nowrap text-center text-lg">
                                {i}
                            </p>
                        </span>
                    ))}
                </div>
                <h3 className="mb-16 text-center text-5xl font-bold">
                    Operating Systems
                </h3>
                <div className="mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    {[
                        "windows",
                        "linux",
                        "apple",
                        "ubuntu",
                        "arch",
                        "kali",
                        "redhat",
                        "fedora",
                    ].map((i) => (
                        <span className="relative mb-12 flex size-16 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/skills/${i}.svg`}
                                alt=""
                                fill
                                className="overflow-hidden rounded-xl bg-secondary object-contain p-4"
                            />{" "}
                            <p className="absolute -bottom-8 text-nowrap text-center text-lg">
                                {i}
                            </p>
                        </span>
                    ))}
                </div>
                <h3 className="mb-16 text-center text-5xl font-bold">
                    Database
                </h3>
                <div className="mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    {[
                        "postgresql",
                        "mysql",
                        "mongodb",
                        "graphql",
                        "supabase",
                        "neondb",
                        "planetscale",
                        "chroma",
                    ].map((i) => (
                        <span className="relative mb-12 flex size-16 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/skills/${i}.svg`}
                                alt=""
                                fill
                                className="overflow-hidden rounded-xl bg-secondary object-contain p-4"
                            />{" "}
                            <p className="absolute -bottom-8 text-nowrap text-center text-lg">
                                {i}
                            </p>
                        </span>
                    ))}
                </div>
                <h3 className="mb-16 text-center text-5xl font-bold">
                    Tools and Softwares
                </h3>
                <div className="grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    {[
                        "vscode",
                        "visual-studio",
                        "android-studio",
                        "jetbrains",
                        "eclipse",
                        "neovim",
                        "bitcoin",
                        "blender",
                        "slack",
                        "gitlab",
                        "bitbucket",
                        "replit",
                        "figma",
                        "docker",
                        "aws",
                        "postman",
                        "kafka",
                        "grafana",
                    ].map((i) => (
                        <span className="relative mb-12 flex size-16 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/skills/${i}.svg`}
                                alt=""
                                fill
                                className="overflow-hidden rounded-xl bg-secondary object-contain p-4"
                            />{" "}
                            <p className="absolute -bottom-8 text-nowrap text-center text-lg">
                                {i}
                            </p>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
