import Image from "next/image"

import { TypeWriter } from "@/components/type-writer"

import { Signature } from "../signature"
import { Social } from "../social"

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
            className="flex h-[80vh] w-full flex-col items-center justify-around lg:h-screen lg:flex-row lg:justify-center lg:pb-[20vh]"
            about="home"
            id="home"
        >
            <Social className="hidden" />
            <div className="relative mb-5 flex h-[70%] w-full overflow-hidden px-24 md:px-40 lg:hidden">
                <Image
                    src={`/profile (${getRandom(1, 8)}).png`}
                    alt=""
                    fill
                    className="object-contain"
                />
                <div className="z-10 h-1 w-full self-end rounded bg-[#02aab0] opacity-60"></div>
            </div>
            <div className="flex h-1/2 w-full flex-col items-center lg:h-full lg:items-start lg:justify-center lg:pl-16">
                <h1 className="animate-gradient bg-clip-text font-heading text-4xl text-transparent sm:text-5xl md:text-6xl lg:w-full xl:text-7xl">
                    Hi, I am <span className="capitalize">{props.name}</span>
                </h1>
                <h3 className="mb-3 h-7 text-lg font-bold text-primary opacity-40 md:text-xl lg:mb-12 lg:w-full lg:text-2xl">
                    <TypeWriter />
                </h3>
                {/* <p className="mb-8 px-6 text-center lg:mb-16">
                    {props.description}{" "}
                </p> */}
                <Signature />
            </div>
        </section>
    )
}
