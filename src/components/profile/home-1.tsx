import Image from "next/image"

import { Signature } from "../signature"
import { Social } from "../social"
import { Terminal } from "../terminal"

interface HomeProps {
    name: string
    job: string
    description: string
    image: string
}

function getRandom(low: number, high: number) {
    return Math.floor(Math.random() * (high - low - 1)) + low
}

export function Home(props: HomeProps) {
    return (
        <section
            className="flex h-[90vh] w-full flex-col items-center justify-around lg:h-screen lg:flex-row lg:justify-center lg:pb-[20vh] lg:pt-28"
            about="home"
            id="home"
        >
            <div className="relative mb-5 flex h-[70%] w-full justify-center overflow-hidden md:px-40 lg:hidden">
                <Image
                    src={`/profile (${getRandom(1, 8)}).png`}
                    alt=""
                    fill
                    className="object-contain"
                />
                <Signature className="absolute max-h-[50%] self-end opacity-50" />
                <div className="z-10 mx-24 h-1 w-full self-end rounded bg-[#02aab0]  opacity-60"></div>
            </div>
            <div className="flex h-1/2 w-full flex-col items-center lg:h-full lg:items-start lg:justify-center lg:pl-16">
                <h1 className="animate-gradient bg-clip-text font-heading text-4xl text-transparent sm:text-5xl md:text-6xl lg:w-full xl:text-7xl">
                    Hi, I am <span className="capitalize">{props.name}</span>
                </h1>
                <h3 className="mb-3 text-lg font-bold text-primary md:text-xl lg:mb-12 lg:w-full lg:text-2xl">
                    <Social
                        social={["linkedin", "twitter", "instagram", "github"]}
                    />
                </h3>
                {/* <p className="mb-8 px-6 text-center lg:mb-16">
                    {props.description}{" "}
                </p> */}
                <Terminal className="mx-6 lg:mx-0" />
            </div>
        </section>
    )
}
