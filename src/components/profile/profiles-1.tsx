import axios from "axios"

import App from "../view-graph"

async function getLeetcode(name: string) {
    return await axios.get(`https://leetcode-stats-api.herokuapp.com/${name}`)
}

export async function Profiles() {
    const data = await getLeetcode("rohansen856")
    console.log(data)

    return (
        <section
            className="mb-16 mt-32 flex w-full flex-col items-center"
            about="qualifications"
            id="qualifications"
        >
            <h3 className="mb-12 w-full py-3 text-center text-3xl font-bold lg:text-4xl">
                Profiles
            </h3>
            <App
                data={[
                    { name: "easy", value: data.data["easySolved"] },
                    { name: "medium", value: data.data["mediumSolved"] },
                    { name: "hard", value: data.data["hardSolved"] },
                ]}
            />
        </section>
    )
}
