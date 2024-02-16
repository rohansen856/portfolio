"use client"

import { useState } from "react"
import Image from "next/image"

import { Signature } from "@/components/signature"

export function ProfileImage() {
    function getRandom(low: number, high: number) {
        return Math.floor(Math.random() * (high - low - 1)) + low
    }

    const [picture, setPicture] = useState<number>(getRandom(1, 8) || 3)

    return (
        <div className="relative mb-5 flex h-[70%] w-full justify-center overflow-hidden lg:h-full">
            <Image
                src={`/profile (${picture}).png`}
                alt=""
                fill
                priority
                className="object-contain"
            />

            <Signature className="absolute max-h-[50%] self-end" />
            <div className="z-10 mx-24 h-1 w-full self-end rounded bg-[#02aab0] opacity-60"></div>
        </div>
    )
}
