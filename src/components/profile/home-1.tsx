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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 235 19"
                        className="absolute bottom-[-5%] left-[40%] w-2/5 lg:left-[33%]"
                    >
                        <path
                            d="M 2.482 2.478 L 232.239 2.478 C 222.96 2.478 213.775 3.222 204.615 3.935 C 183.159 5.607 161.793 7.369 140.492 9.546 C 125.177 11.112 109.85 12.662 94.488 14.094 C 93.799 14.158 75.111 15.985 75.259 16.22 C 75.824 17.122 96.352 15.716 98.334 15.669 C 111.787 15.347 125.283 15.397 138.716 14.881"
                            stroke="hsl(232, 100%, 67%)"
                            strokeWidth="4.14"
                            strokeLinecap="round"
                            fill="transparent"
                            opacity="1"
                            pathLength="1"
                            strokeDashoffset="0px"
                            strokeDasharray="1px 1px"
                        ></path>
                    </svg>
                </h1>
                <h3 className="mb-3 text-lg font-bold text-primary md:text-xl lg:mb-12 lg:w-full lg:text-2xl">
                    <Social
                        social={["linkedin", "twitter", "instagram", "github"]}
                        className="md:hidden lg:flex xl:hidden"
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
