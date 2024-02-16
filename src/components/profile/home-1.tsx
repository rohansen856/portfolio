import Image from "next/image"

import { ProfileImage } from "../profile-image"
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
            className="flex h-[90vh] w-full flex-col items-center justify-around lg:h-[80vh] lg:flex-row lg:justify-center"
            about="home"
            id="home"
        >
            <ProfileImage />
            <div className="flex h-1/2 w-full flex-col items-center lg:h-full lg:items-start lg:justify-center lg:pt-28">
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
                <Terminal />
            </div>
        </section>
    )
}
