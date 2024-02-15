"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

const Triangle = (
    props: React.HtmlHTMLAttributes<HTMLDivElement> & {
        base: number
        height: number
    }
) => (
    <svg className={cn(props.className, "bg-red-700")}>
        <polygon points={`0,0 0,100 ${props.base},100`} fill="#6ED0DD" />
    </svg>
)

const Circle = (
    props: React.HtmlHTMLAttributes<HTMLDivElement> & { radius: number }
) => (
    <svg className={cn(props.className, "")}>
        <circle
            cx={props.radius}
            cy={props.radius}
            r={props.radius}
            fill="#405D86"
        />
    </svg>
)
const Rectangle = (
    props: React.HtmlHTMLAttributes<HTMLDivElement> & {
        height: number
        width: number
    }
) => (
    <svg className={cn(props.className, "")}>
        <rect width={props.width} height={props.height} fill="#ED6088" />
    </svg>
)

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Generate an array of length 20 with random integers between 2 and 10
function generateRandomArray(length: number) {
    const randomArray = []
    for (let i = 0; i < length; i++) {
        randomArray.push(getRandomInt(2, 10))
    }
    return randomArray
}

export function Current() {
    const [isPlaying, setPlaying] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const handlePlayPause = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
            setPlaying(false)
        } else {
            audioRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <section
            className="my-16 mb-32 flex w-full flex-col items-center justify-center gap-6 py-3 lg:flex-row lg:gap-16"
            about="current"
            id="current"
        >
            <h3 className="flex scale-75 justify-center gap-2 md:scale-90 lg:scale-100">
                <div className="relative h-32 w-20">
                    <div className="absolute z-20 h-32 w-8 bg-gradient-to-b from-[#405D86] to-[#384257]" />
                    <div className="absolute z-10 h-20 w-20 rounded-full bg-gradient-to-b from-[#F07F6B] to-[#EFC15C]" />
                    <div className="absolute bottom-0 z-0 h-0 w-0 border-x-[40px] border-b-[80px] border-x-transparent border-b-[#8D63B1]" />
                </div>
                <div className="relative h-32 w-24">
                    <div className="absolute z-0 h-32 w-24 rounded-full bg-gradient-to-r from-[#405D86] to-[#384257]" />
                    <div className="absolute left-6 top-6 z-10 h-20 w-12 rounded-full bg-gradient-to-b from-[#6ED0DD] to-[#70E2B9] drop-shadow-lg" />
                </div>
                <div className="relative h-32 w-24">
                    <div className="absolute z-0 h-32 w-24 bg-gradient-to-r from-[#405D86] to-[#384257]" />
                    <div className="absolute left-8 top-0 z-10 h-12 w-8 bg-gradient-to-t from-[#ED6088] to-[#C86FA3] drop-shadow-lg" />
                    <div className="absolute bottom-0 left-8 z-10 h-12 w-8 bg-gradient-to-b from-[#ED6088] to-[#C86FA3] drop-shadow-lg" />
                </div>
                <div className="relative h-32 w-24">
                    <div className="absolute bottom-0 z-0 h-0 w-0 border-x-[48px] border-b-[128px] border-x-transparent border-b-[#384257]" />
                    <div className="absolute bottom-0 left-[32px] z-10 h-0 w-0 border-x-[17px] border-b-[50px] border-x-transparent border-b-[#8D63B1] drop-shadow-lg" />
                </div>
                <div className="relative h-32 w-24">
                    <div className="absolute z-0 h-32 w-24 bg-gradient-to-r from-[#405D86] to-[#384257]" />
                    <div className="absolute bottom-0 left-2 z-10 h-0 w-0 border-x-[25px] border-b-[70px] border-x-transparent border-b-[#70E2B9] drop-shadow-lg" />
                    <div className="absolute right-2 top-0 z-10 h-0 w-0 rotate-180 border-x-[25px] border-b-[70px] border-x-transparent border-b-[#70E2B9] drop-shadow-lg" />
                </div>
            </h3>
            <div className="flex max-w-[95%] items-center rounded-lg bg-secondary">
                <div className="relative m-2 h-32 w-28 overflow-hidden rounded-md bg-cyan-800">
                    <Image
                        src="/song.jpg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="m-2 ml-0 flex h-32 w-[270px] flex-col gap-1 rounded-md bg-cyan-800 p-1">
                    <div className="flex h-16 w-full gap-2 p-1">
                        <div className="relative h-full w-12">
                            <Image
                                src="/headphone.svg"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="h-full w-16 flex-1">
                            <h3 className="text-lg font-bold">Specializ</h3>
                            <h3 className="text-xs">by King Gnu</h3>
                        </div>
                    </div>
                    <div className="flex h-16 w-full items-center gap-2 rounded-sm p-1">
                        <audio ref={audioRef} src="/specialz.mp3" />
                        <Button
                            className="relative h-8 w-8 cursor-pointer bg-transparent p-1 hover:scale-105 hover:bg-transparent"
                            onClick={handlePlayPause}
                        >
                            <Image
                                src={isPlaying ? "/pause.svg" : "/play.svg"}
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </Button>
                        {isPlaying ? (
                            <div className="flex h-full flex-1 items-center justify-start gap-1 pl-5">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                                    <div className="bar h-1 w-1 rounded bg-black"></div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-secondary">
                                Listen to my recent song
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

;<svg width="50" height="50" version="1.1" className="hidden">
    <defs>
        <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#6ED0DD"></stop>
            <stop offset="100%" stop-color="#70E2B9"></stop>
        </linearGradient>
        <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#405D86"></stop>
            <stop offset="100%" stop-color="#384257"></stop>
        </linearGradient>
        <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#ED6088"></stop>
            <stop offset="100%" stop-color="#C86FA3"></stop>
        </linearGradient>
        <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#F07F6B"></stop>
            <stop offset="100%" stop-color="#EFC15C"></stop>
        </linearGradient>
        <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#8D63B1"></stop>
            <stop offset="100%" stop-color="#8179CB"></stop>
        </linearGradient>
        <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#EDD460"></stop>
            <stop offset="100%" stop-color="#EDBC39"></stop>
        </linearGradient>
    </defs>
</svg>
