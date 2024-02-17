import Image from "next/image"
import Link from "next/link"
import axios from "axios"

const profiles = [
    {
        name: "leetcode",
        url: "https://www.leetcode.com/rohansen856",
        remark: "",
    },
    {
        name: "codechef",
        url: "https://www.codechef.com/users/rohansen856",
        remark: "",
    },
    {
        name: "codeforces",
        url: "https://codeforces.com/profile/rohansen856",
        remark: "",
    },
]

async function getLeetcode(name: string) {
    const data = await axios(
        `https://leetcode-stats-api.herokuapp.com/rohansen856`
    )
    return data.data
}

export async function Profiles() {
    const data = null //await getLeetcode("rohansen856")
    // console.log(data)

    return (
        <section
            className="relative z-0 mt-16 flex w-full flex-col items-center pb-16"
            about="profiles"
            id="profiles"
        >
            <div className="fade absolute top-0 h-1/4 w-full rotate-180"></div>
            <div className="fade absolute bottom-0 h-1/4 w-full"></div>
            <div className="absolute top-0 z-[-10] flex h-full w-full flex-wrap items-center justify-center overflow-hidden">
                {[...Array(150)].map((_, index) => (
                    <div
                        key={index}
                        className={`z-[-10] m-1 h-20 w-20 bg-secondary opacity-75 duration-1000 hover:scale-110 hover:bg-blue-800 hover:duration-300`}
                    />
                ))}
            </div>
            <h3 className="z-10 mb-12 mt-16 py-3 text-center text-3xl font-bold lg:text-4xl">
                Profiles
            </h3>
            <div className="z-10 flex flex-row flex-wrap items-center justify-center gap-6 pb-16">
                {profiles.map((profile) => (
                    <Link
                        href={profile.url}
                        target="_blank"
                        className="flex h-48 w-48 cursor-pointer flex-col items-center justify-center rounded-full border bg-slate-800 duration-200 hover:scale-105 hover:border-blue-800"
                    >
                        <div className="relative mx-auto h-1/2 w-1/2">
                            <Image
                                src={`/${profile.name}.svg`}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className="mx-auto mt-2 font-bold uppercase">
                            {profile.name}
                        </h4>
                    </Link>
                ))}
            </div>
        </section>
    )
}
