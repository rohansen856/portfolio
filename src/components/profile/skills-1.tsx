import Image from "next/image"

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
            className="mb-16 mt-48 flex w-full flex-col items-center pb-32"
            about="skills"
            id="skills"
        >
            <h3 className="mb-12 w-full py-3 text-center text-3xl font-bold lg:text-4xl">
                Skills
            </h3>
            {props.skills.length > 0 ? (
                <div className="relative mt-12 grid max-w-[500px] rotate-45 grid-cols-3 place-items-center gap-6 md:gap-8 lg:gap-12">
                    <CircularBg />
                    {skills.map((i) => (
                        <div className="h-20 w-20 rotate-[-45deg] cursor-pointer duration-300 direction-reverse hover:scale-110">
                            <Image
                                src={`/${i}.svg`}
                                alt=""
                                width={16}
                                height={16}
                                className="h-full w-full"
                            />
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
        </section>
    )
}
