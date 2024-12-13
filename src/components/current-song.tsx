"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

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
import { Button } from "@/components/ui/button"

export function CurrentSong() {
    const router = useRouter()
    const [isPlaying, setPlaying] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement>(new Audio())

    const handlePlayPause = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
            setPlaying(false)
            return
        }

        audioRef.current.play()
        setPlaying(true)
        // return router.push(
        //     "https://open.spotify.com/track/0GWNtMohuYUEHVZ40tcnHF?si=J0vzmTVyQU2ZfrkmoJCbeg"
        // )
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
                        <h3 className="text-lg font-bold">About me</h3>
                        <h3 className="text-xs">by AI</h3>
                    </div>
                </div>
                <div className="flex h-16 w-full items-center gap-2 rounded-sm p-1">
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
                        <p className="opacity-75">Listen all about me!</p>
                    )}
                    <audio
                        ref={audioRef}
                        src="https://utfs.io/f/96GOcDjysAigTjm4s97b67IngwMilacpjBNtF8uQfqOZVYkh"
                        className="hidden"
                        preload="none"
                    />
                </div>
            </div>
        </div>
    )
}
