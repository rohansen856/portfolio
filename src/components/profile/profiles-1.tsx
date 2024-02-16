import axios from "axios"

import App from "../view-graph"

async function getLeetcode(name: string) {
    return await axios(`https://leetcode-stats-api.herokuapp.com/rohansen856`)
}

export async function Profiles() {
    const data = null //await getLeetcode("rohansen856")
    console.log(data)

    return (
        <section
            className="mb-16 mt-32 w-full"
            about="qualifications"
            id="qualifications"
        >
            <h3 className="mb-12 w-full py-3 text-center text-3xl font-bold lg:text-4xl">
                Profiles
            </h3>
            <div className="flex min-h-[50vh] w-full flex-col items-center justify-center lg:flex-row lg:gap-16"></div>
        </section>
    )
}
