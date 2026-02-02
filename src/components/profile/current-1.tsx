import Image from "next/image"
import Link from "next/link"

import { CurrentSong } from "@/components/current-song"

import { RainbowButton } from "../ui/rainbow-button"

export function Current() {
    return (
        <section
            className="container my-16 mb-32 flex w-full flex-col items-center justify-center gap-6 py-3 lg:gap-16"
            about="current"
            id="current"
        >
            <div className="flex w-full flex-col items-center justify-center gap-6 py-3 lg:flex-row lg:gap-16">
                <div className="grid gap-8">
                    <CurrentSong />
                    <h3 className="cssName flex scale-75 justify-center gap-2 md:scale-90 lg:scale-100">
                        <div className="relative h-32 w-20 duration-200 hover:translate-y-[-10px]">
                            <div className="absolute z-20 h-32 w-8 bg-gradient-to-b from-[#405D86] to-[#384257]" />
                            <div className="absolute z-10 h-20 w-20 rounded-full bg-gradient-to-b from-[#F07F6B] to-[#EFC15C]" />
                            <div className="absolute bottom-0 z-0 h-0 w-0 border-x-[40px] border-b-[80px] border-x-transparent border-b-[#8D63B1]" />
                        </div>
                        <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                            <div className="absolute z-0 h-32 w-24 rounded-full bg-gradient-to-r from-[#405D86] to-[#384257]" />
                            <div className="absolute left-6 top-6 z-10 h-20 w-12 rounded-full bg-gradient-to-b from-[#6ED0DD] to-[#70E2B9] drop-shadow-lg" />
                        </div>
                        <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                            <div className="absolute z-0 h-32 w-24 bg-gradient-to-r from-[#405D86] to-[#384257]" />
                            <div className="absolute left-8 top-0 z-10 h-12 w-8 bg-gradient-to-t from-[#ED6088] to-[#C86FA3] drop-shadow-lg" />
                            <div className="absolute bottom-0 left-8 z-10 h-12 w-8 bg-gradient-to-b from-[#ED6088] to-[#C86FA3] drop-shadow-lg" />
                        </div>
                        <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                            <div className="absolute bottom-0 z-0 h-0 w-0 border-x-[48px] border-b-[128px] border-x-transparent border-b-[#384257]" />
                            <div className="absolute bottom-0 left-[32px] z-10 h-0 w-0 border-x-[17px] border-b-[50px] border-x-transparent border-b-[#8D63B1] drop-shadow-lg" />
                        </div>
                        <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                            <div className="absolute z-0 h-32 w-24 bg-gradient-to-r from-[#405D86] to-[#384257]" />
                            <div className="absolute bottom-0 left-2 z-10 h-0 w-0 border-x-[25px] border-b-[70px] border-x-transparent border-b-[#70E2B9] drop-shadow-lg" />
                            <div className="absolute right-2 top-0 z-10 h-0 w-0 rotate-180 border-x-[25px] border-b-[70px] border-x-transparent border-b-[#70E2B9] drop-shadow-lg" />
                        </div>
                    </h3>
                </div>

                <div className="h-full w-full py-4 text-xl md:border-l-4 md:pl-8">
                    <h3 className="mb-4 text-5xl font-extrabold">About</h3>
                    <p className="mb-8">
                        I&apos;m a software developer skilled at{" "}
                        <span className="font-bold text-blue-500">
                            DevOPS and Blockchain
                        </span>{" "}
                        specialising in Back-End Development and Software
                        Architecture. I enjoy discussing topics relating to{" "}
                        <span className="font-bold text-blue-500">
                            System Design, Open Source, Microservices and Cloud
                            Architecture.
                            <br />
                            <br />
                        </span>
                        Hit me up anytime you want to chat about{" "}
                        <span className="font-bold text-blue-500">
                            System Architecture, Blockchain, Cloud, Rust,
                            Go-Lang, Open Source
                        </span>{" "}
                        or anything you have in mind. Let&apos;s work together
                        and create something great !!
                    </p>
                    <Link
                        className="w-full"
                        href={"https://drive.google.com/file/d/1ISZVP_xogw31B7em_7JhLIDGeKCfawtQ/view?usp=sharing"}
                        target="_blank"
                    >
                        <RainbowButton className="w-2/3 rounded">
                            Resume
                        </RainbowButton>
                    </Link>
                </div>
            </div>
        </section>
    )
}
