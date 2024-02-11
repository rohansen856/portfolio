"use client"

import Typewriter from "typewriter-effect"

export function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "web developer",
                    "android enthusiast",
                    "competitive programmer",
                ],
                autoStart: true,
                loop: true,
            }}
        />
    )
}
