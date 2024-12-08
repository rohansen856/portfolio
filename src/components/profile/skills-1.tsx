import Image from "next/image"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CircularBg } from "@/components/circle-background"

interface SkillsProps {
    skills: string[]
}

export function Skills(props: SkillsProps) {
    function shuffleArray(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }
    const skills = shuffleArray(props.skills)

    return (
        <section
            className="container mb-16 mt-20 flex w-full flex-col items-center pb-32"
            about="skills"
            id="skills"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Skills
            </h3>
            {props.skills.length > 0 ? (
                <div className="relative mt-12 grid max-w-[500px] rotate-45 grid-cols-3 place-items-center gap-6 md:gap-8 lg:gap-12">
                    <CircularBg />
                    {skills.map((i) => (
                        <div className="h-20 w-20 rotate-[-45deg] cursor-pointer duration-300 direction-reverse hover:scale-110">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Image
                                            src={`/${i}.svg`}
                                            alt=""
                                            width={16}
                                            height={16}
                                            className="h-full w-full"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="capitalize">{i}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex w-full text-xl lg:text-2xl">
                    <p className="m-auto rounded-md bg-muted px-12 py-5">
                        Nothing Yet
                    </p>
                </div>
            )}
            <div className="mt-40 flex flex-col">
                <h3 className="mb-16 text-center text-5xl font-bold">
                    Language Skills
                </h3>
                <div className="mb-32 grid grid-cols-4 place-content-center gap-2 md:gap-4 lg:grid-cols-6 xl:gap-8">
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
                        <span className="relative mb-12 flex size-24 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/${i}.svg`}
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
                <div className="mb-32 grid grid-cols-4 place-content-center gap-2 md:gap-4 lg:grid-cols-6 xl:gap-8">
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
                        <span className="relative mb-12 flex size-24 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/${i}.svg`}
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
                <div className="mb-32 grid grid-cols-4 place-content-center gap-2 md:gap-4 lg:grid-cols-6 xl:gap-8">
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
                        <span className="relative mb-12 flex size-24 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/${i}.svg`}
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
                <div className="mb-32 grid grid-cols-4 place-content-center gap-2 md:gap-4 lg:grid-cols-6 xl:gap-8">
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
                        <span className="relative mb-12 flex size-24 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/${i}.svg`}
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
                <div className="grid grid-cols-4 place-content-center gap-2 md:gap-4 lg:grid-cols-6 xl:gap-8">
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
                        <span className="relative mb-12 flex size-24 flex-col items-center justify-center rounded-xl p-4">
                            {" "}
                            <Image
                                src={`/${i}.svg`}
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
