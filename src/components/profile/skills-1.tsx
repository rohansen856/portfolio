import Image from "next/image"

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
            className="container mt-20 flex w-full flex-col items-center"
            about="skills"
            id="skills"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Skills
            </h3>
            <div className="mt-12 flex flex-col">
                <h3 className="mb-16 flex items-center justify-center gap-4 border-b-2 pb-2 text-center text-5xl font-bold">
                    <Image
                        src={"/skills/language.svg"}
                        alt=""
                        height={50}
                        width={50}
                    />
                    Language Skills
                </h3>
                <div className="relative mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    <Image
                        src={"/skills/language.svg"}
                        alt=""
                        fill
                        className="object-contain opacity-30"
                    />
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
                <h3 className="mb-16 flex items-center justify-center gap-4 border-b-2 pb-2 text-center text-5xl font-bold">
                    <Image
                        src={"/skills/framework.svg"}
                        alt=""
                        height={50}
                        width={50}
                    />
                    Frameworks
                </h3>
                <div className="relative mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    <Image
                        src={"/skills/framework.svg"}
                        alt=""
                        fill
                        className="object-contain opacity-30"
                    />
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
                <h3 className="mb-16 flex items-center justify-center gap-4 border-b-2 pb-2 text-center text-5xl font-bold">
                    <Image
                        src={"/skills/operating-system.svg"}
                        alt=""
                        height={50}
                        width={50}
                    />
                    Operating Systems
                </h3>
                <div className="relative mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    <Image
                        src={"/skills/operating-system.svg"}
                        alt=""
                        fill
                        className="object-contain opacity-30"
                    />
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
                <h3 className="mb-16 flex items-center justify-center gap-4 border-b-2 pb-2 text-center text-5xl font-bold">
                    <Image
                        src={"/skills/database.svg"}
                        alt=""
                        height={50}
                        width={50}
                    />
                    Database
                </h3>
                <div className="relative mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    <Image
                        src={"/skills/database.svg"}
                        alt=""
                        fill
                        className="object-contain opacity-30"
                    />
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
                <h3 className="mb-16 flex items-center justify-center gap-4 border-b-2 pb-2 text-center text-5xl font-bold">
                    <Image
                        src={"/skills/tools.svg"}
                        alt=""
                        height={50}
                        width={50}
                    />
                    Tools and Softwares
                </h3>
                <div className="relative mb-32 grid grid-cols-4 place-content-center gap-4 md:gap-8 lg:grid-cols-6 xl:gap-x-16">
                    <Image
                        src={"/skills/tools.svg"}
                        alt=""
                        fill
                        className="object-contain opacity-30"
                    />{" "}
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
