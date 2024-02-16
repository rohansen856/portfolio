import Image from "next/image"
import Link from "next/link"
import axios from "axios"

async function getLeetcode(name: string) {
    return await axios(`https://leetcode-stats-api.herokuapp.com/rohansen856`)
}

export async function Profiles() {
    const data = null //await getLeetcode("rohansen856")
    console.log(data)

    return (
        <section
            className="relative z-0 mt-28 flex w-full flex-col items-center pb-16"
            about="qualifications"
            id="qualifications"
        >
            <div className="absolute top-0 z-[-10] flex h-full w-full flex-wrap items-center justify-center overflow-hidden">
                {[...Array(300)].map((_, index) => (
                    <div
                        key={index}
                        className={`z-[-10] m-1 h-20 w-20 bg-secondary opacity-75 hover:bg-blue-800`}
                    />
                ))}
            </div>
            <h3 className="z-10 mb-12 mt-6 py-3 text-center text-3xl font-bold lg:text-4xl">
                Profiles
            </h3>
            <div className="z-10 flex flex-row flex-wrap items-center justify-center gap-6">
                <Link
                    href={"https://www.leetcode.com/rohansen856"}
                    target="_blank"
                    className="flex h-48 w-48 cursor-pointer flex-col rounded-full border-blue-800 bg-muted duration-200 hover:scale-105 hover:border"
                >
                    <div className="relative mx-auto h-1/2 w-1/2">
                        <Image
                            src="/leetcode.svg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h4 className="mx-auto mt-2 font-bold uppercase">
                        Leetcode
                    </h4>
                </Link>
                <Link
                    target="_blank"
                    href={"https://www.codechef.com/users/rohansen856"}
                    className="flex h-48 w-48 cursor-pointer flex-col rounded-full border-green-800 bg-muted duration-200 hover:scale-105 hover:border"
                >
                    <div className="relative mx-auto h-1/2 w-1/2">
                        <Image
                            src="/codechef.svg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h4 className="mx-auto mt-2 font-bold uppercase">
                        codechef
                    </h4>
                </Link>
                <Link
                    target="_blank"
                    href={"https://codeforces.com/profile/rohansen856"}
                    className="flex h-48 w-48 cursor-pointer flex-col rounded-full border-red-800 bg-muted duration-200 hover:scale-105 hover:border"
                >
                    <div className="relative mx-auto h-1/2 w-1/2">
                        <Image
                            src="/codeforces.svg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h4 className="mx-auto mt-2 font-bold uppercase">
                        codeforces
                    </h4>
                </Link>
            </div>
        </section>
    )
}
