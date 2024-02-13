"use client"

import Image from "next/image"

import { SiteFooter } from "@/components/site-footer"

import { Signature } from "./signature"

export function ProfileImage() {
    function getRandom(low: number, high: number) {
        return Math.floor(Math.random() * (high - low - 1)) + low
    }

    return (
        <div className="hidden h-full flex-col items-center justify-around pb-16 lg:fixed lg:flex lg:h-[90vh] lg:w-[40%]">
            <div className="relative flex h-full w-full overflow-hidden px-24 md:px-36 lg:px-20">
                <Image
                    src={`/profile (${getRandom(1, 8)}).png`}
                    alt=""
                    fill
                    className="object-contain"
                />
                <Signature className="absolute self-end opacity-30 duration-300 hover:opacity-100" />
                <div className="z-10 h-1 w-full self-end rounded bg-[#02aab0] opacity-60"></div>
            </div>
            <div className="-center flex h-16 w-full justify-center">
                <SiteFooter />
            </div>
        </div>
    )
}
