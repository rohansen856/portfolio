import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { ProfileImage } from "@/components/profile-image"
import { Social } from "@/components/social"
import { Terminal } from "@/components/terminal"

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
            className="flex h-[90vh] w-full flex-col items-center justify-around lg:h-[80vh] lg:flex-row lg:justify-center lg:pt-28"
            about="home"
            id="home"
        >
            <ProfileImage />
            <div className="flex h-1/2 w-full flex-col items-center lg:h-full lg:items-start lg:justify-center lg:pt-28">
                <h1 className="animate-gradient relative bg-clip-text font-heading text-4xl text-transparent sm:text-5xl md:text-6xl lg:w-full xl:text-7xl">
                    Hi, I am <span className="capitalize">{props.name}</span>
                </h1>
                <Link
                    href={"mailto:rohansen856@gmail.com"}
                    target="_blank"
                    className="hidden text-3xl text-blue-500 underline xl:flex"
                >
                    rohansen856@gmail.com
                    <ArrowUpRight className="size-6 text-blue-500" />
                </Link>
                <h3 className="mb-3 text-lg font-bold text-primary md:text-xl lg:mb-12 lg:w-full lg:text-2xl">
                    <Social
                        social={[
                            "linkedin",
                            "twitter",
                            "instagram",
                            "github",
                            "gmail",
                        ]}
                        className="md:hidden lg:flex xl:hidden"
                    />
                </h3>
                <Terminal />
            </div>
        </section>
    )
}
