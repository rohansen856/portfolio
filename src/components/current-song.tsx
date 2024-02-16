"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "./ui/button"

export function CurrentSong() {
    const [isPlaying, setPlaying] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const handlePlayPause = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
            setPlaying(false)
            return
        }

        audioRef.current.play()
        setPlaying(true)
        return
    }
    return (
        <div
            className={`relative flex max-w-[95%] cursor-default items-center drop-shadow duration-300 hover:translate-y-[-10px] hover:scale-105 ${
                isPlaying ? "playing" : "music"
            }`}
        >
            <div className="absolute z-[-10] h-full w-full rounded-md bg-secondary" />
            <div className="relative m-2 h-32 w-28 overflow-hidden rounded-md bg-cyan-800">
                <Image src="/song.jpg" alt="" fill className="object-cover" />
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
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="relative h-8 w-8 cursor-pointer bg-transparent p-1 hover:scale-105 hover:bg-transparent">
                                <Image
                                    src={isPlaying ? "/pause.svg" : "/play.svg"}
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    {isPlaying ? "Pause" : "Play"} the song
                                    right now?
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handlePlayPause}>
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    {isPlaying ? (
                        <div className="flex h-full flex-1 items-center justify-start gap-1 pl-5">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                                <div className="bar h-1 w-1 rounded bg-black"></div>
                            ))}
                        </div>
                    ) : (
                        <p className="opacity-75">Listen to my recent song</p>
                    )}
                </div>
            </div>
        </div>
    )
}
