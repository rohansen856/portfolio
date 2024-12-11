"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { BentoGrid, BentoGridItem } from "@/components/bento-grid"

import { Badge } from "../ui/badge"
import { buttonVariants } from "../ui/button"

const projects = [
    {
        kind: "Large Scale Projects",
        details: [
            {
                image: "/projects/campusorbit.png",
                name: "Campusorbit",
                badges: [
                    "backend",
                    "framer-motion",
                    "nextjs",
                    "rust",
                    "flutter",
                    "API",
                    "Auth0",
                    "PostgreSQL",
                ],
                description:
                    "A robust NextJS application made with UX as primary concern. Made for the students of IIITDMJ for miscellaneous puposes like schedule management, club activity tracking, Mess food review etc.",
                github: "https://github.com/rohansen856/digi-marketing",
                live: "https://campusorbit.vercel.app",
            },
            {
                image: "/projects/veil.png",
                name: "Veil",
                badges: [
                    "team",
                    "hackathon",
                    "backend",
                    "framer-motion",
                    "nextjs",
                    "rust",
                    "flutter",
                    "API",
                    "Auth0",
                    "PostgreSQL",
                ],
                description:
                    "A project made in the MLH hackathon HackCBS. A web3 based medical help app, where you can book appointments, Manage your medical records, Get prescriptions from verified medical officers and much more. All built on the Ethereum On Chain Network!",
                github: "https://github.com/ctrl-crew/veil",
                live: "https://veil-org.vercel.app",
            },
        ],
    },
    {
        kind: "Freelance/UI Projects",
        details: [
            {
                image: "/projects/portfolio.png",
                name: "Zealtech",
                badges: [
                    "personal",
                    "portfolio",
                    "framer-motion",
                    "nextjs",
                    "UI",
                    "UX",
                ],
                description:
                    "My portfolio website made using NextJS with the primary focus on UI, readability and User Experience",
                github: "https://github.com/rohansen856/portfolio",
                live: "https://rcsen.vercel.app",
            },
            {
                image: "/projects/zealtech.png",
                name: "Zealtech",
                badges: ["freelance", "framer-motion", "nextjs", "UX"],
                description:
                    "A freelance project made for ZEALTECH, a media marketing website. Made using nextjs and framer motion for advanced animations.",
                github: "https://github.com/rohansen856/digi-marketing",
                live: "https://zealtech.vercel.app",
            },
            {
                image: "/projects/bettermindlabs.png",
                name: "BettermindLabs",
                badges: ["freelance", "framer-motion", "nextjs", "UI", "UX"],
                description:
                    "A professional site made for the bettermindlabs organization for advertising courses like AI/ML bootcamp, App Development bootcamp etc.",
                github: "https://github.com/rohansen856/tech-tank",
                live: "https://finance-dost.vercel.app",
            },
            {
                image: "/projects/ctrlcrew.png",
                name: "Ctrl Crew",
                badges: [
                    "team",
                    "organization",
                    "framer-motion",
                    "nextjs",
                    "UI",
                    "UX",
                ],
                description:
                    "A personal site made to showcase my lovely teammates who are with me throughout my team hackathons and team projects. This project is my appreciation towards them.",
                github: "https://github.com/rohansen856/tech-tank",
                live: "https://ctrl-crew.vercel.app",
            },
            {
                image: "/projects/lawhelp.png",
                name: "LawHelp",
                badges: [
                    "personal",
                    "legal",
                    "framer-motion",
                    "nextjs",
                    "mysql",
                ],
                description:
                    "A Project made under the Academic DBMS'24 Assignment as a part of my degree course. A simple law and legal website to publish and read articles about various legal incidents along with a shocase of all the Constitutions under the Indian Penal Code.",
                github: "https://github.com/rohansen856/lawhelp",
                live: "https://lawhelp.vercel.app",
            },
            {
                image: "/projects/visionai.png",
                name: "Vision AI",
                badges: ["freelance", "ai", "framer-motion", "vitejs"],
                description:
                    "Another example of my freelance work for the Vision AI team. A website made with React (Vite) with the primary interest in User Interface and Experience.",
                github: "https://github.com/rohansen856/ui-package",
                live: "https://ui-package.vercel.app",
            },
            {
                image: "/projects/jobify.png",
                name: "Job Portal",
                badges: ["freelance", "job-search", "framer-motion", "nextjs"],
                description:
                    "A job listing cum finding website for both organizations and people in need.",
                github: "https://github.com/rohansen856/job-portal",
                live: "https://home-job-portal.vercel.app/",
            },
        ],
    },
    {
        kind: "Backend Projects",
        details: [
            {
                image: "/projects/rust-backend.png",
                name: "Fullscale Rust Backend",
                badges: [
                    "backend",
                    "rustlang",
                    "actix-web",
                    "API",
                    "PostgreSQL",
                ],
                description:
                    "A fully functional backend made in thr Rust language. Utilizing the ultimate type safety features and insane Execution speed of the rust language to spin up a fast and reliable backend service.",
                github: "https://github.com/rohansen856/rust_postgres",
                live: null,
            },
            {
                image: "/projects/rust-crud.png",
                name: "Rust CRUD API",
                badges: [
                    "backend",
                    "rustlang",
                    "actix-web",
                    "CRUD API",
                    "PostgreSQL",
                ],
                description:
                    "A Create Read Update Delete API made using rust and PostgreSQL.",
                github: "https://github.com/rohansen856/rust-crud-api",
                live: null,
            },
            {
                image: "/projects/rust-mongo.png",
                name: "Rust Mongo Boilerplate",
                badges: [
                    "backend",
                    "rustlang",
                    "actix-web",
                    "CRUD API",
                    "MongoDB",
                    "NoSQL",
                ],
                description:
                    "Implementation of a database connector and API with mongoDB as the database provider to utilize the power of NoSQL database with one of the most type and thread safe languages",
                github: "https://github.com/rohansen856/rust-mongo",
                live: null,
            },
            {
                image: "/projects/go-blockchain.png",
                name: "Smart Contract in GoLang",
                badges: ["backend", "golang", "Smart Contract", "Blockchain"],
                description:
                    "Blockchain contracts written using the Go Language for faster builds and reliable code.",
                github: "https://github.com/rohansen856/go-blockchain",
                live: null,
            },
        ],
    },
    {
        kind: "Microservices and Cloud Projects",
        details: [
            {
                image: "/projects/rust-kafka.png",
                name: "Rust Kafka implementation",
                badges: [
                    "backend",
                    "rust",
                    "kafka",
                    "queue",
                    "microservices",
                    "zookeeper",
                ],
                description:
                    "Implementation of the Kafka Queuing service in Rust Lang. Bootstrapped with zookeper for a 100% self sufficient service",
                github: "https://github.com/rohansen856/rust-kafka",
                live: null,
            },
            {
                image: "/projects/rust-microservices.png",
                name: "Rust Microservices Architecture",
                badges: [
                    "backend",
                    "rust",
                    "kafka",
                    "queue",
                    "microservices",
                    "microservices",
                    "load balancer",
                    "rate limiter",
                    "zookeeper",
                ],
                description:
                    "Implementation of microservices architecture with 2 servers utilizing postgres connectivity and kafka, a load balancer, a rate limiter and prometheus analytics with grafana visualization.",
                github: "https://github.com/rohansen856/rust-microservices",
                live: null,
            },
        ],
    },
]

export function Projects() {
    return (
        <section
            className="container relative mb-16 mt-6 w-full"
            about="projects"
            id="projects"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Projects
            </h3>
            <h3 className="mb-8 text-center text-5xl font-bold">
                Flagship Projects
            </h3>
            <BentoGrid className="mx-auto my-16 max-w-4xl md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
            {projects.map(({ kind, details }) => (
                <div key={kind} className="mt-20 space-y-8">
                    <h3 className="mb-8 text-center text-5xl font-bold">
                        {kind}
                    </h3>
                    {details.map((i) => (
                        <div
                            key={i.name}
                            className="flex w-full flex-col gap-16 overflow-hidden rounded-xl border bg-secondary/50 md:flex-row"
                        >
                            <div className="relative h-[320px] w-full md:w-[500px]">
                                <Image
                                    src={i.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex h-full flex-1 flex-col p-4">
                                <h4 className="mb-1 text-3xl font-bold">
                                    {i.name}
                                </h4>
                                <div className="mb-4 space-x-1">
                                    {i.badges.map((j) => (
                                        <Badge
                                            key={j}
                                            variant={"outline"}
                                            className="border-purple-600 bg-purple-600/20"
                                        >
                                            {j}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="pr-8">{i.description}</p>
                                <div className="mt-12 flex">
                                    {i.github && (
                                        <Link
                                            href={i.github}
                                            className={cn(
                                                buttonVariants(),
                                                "mr-4 gap-6 rounded text-lg"
                                            )}
                                        >
                                            <Image
                                                src={"/github.svg"}
                                                alt=""
                                                height={50}
                                                width={50}
                                            />
                                            Github
                                        </Link>
                                    )}
                                    {i.live && (
                                        <Link
                                            href={i.live}
                                            className={cn(
                                                buttonVariants({
                                                    variant: "outline",
                                                }),
                                                "mr-8 gap-4 rounded border-2 text-lg"
                                            )}
                                        >
                                            <span className="flex size-4 items-center justify-center rounded-full border-2 border-green-600 p-px">
                                                <span className="size-full rounded-full bg-green-600" />
                                            </span>
                                            Live
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}
const Skeleton = () => (
    <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full   flex-1 rounded-xl border  border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black"></div>
)

const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    }
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
            >
                <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
                <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
            >
                <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
                <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
            >
                <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
                <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    )
}
const SkeletonTwo = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    }
    const arr = new Array(6).fill(0)
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: Math.random() * (100 - 40) + 40 + "%",
                    }}
                    className="flex h-4 w-full flex-row items-center space-x-2 rounded-full  border border-neutral-100 bg-neutral-100 p-2 dark:border-white/[0.2] dark:bg-black"
                ></motion.div>
            ))}
        </motion.div>
    )
}
const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 rounded-lg"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    )
}
const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    }
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
            >
                <Image
                    src="/campusorbit.png"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-10 w-10 rounded-full"
                />
                <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
                    Made in flutter with designs from figma
                </p>
                <p className="mt-4 rounded-full border border-red-500 bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-900/20">
                    Android App
                </p>
            </motion.div>
            <motion.div className="relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black">
                <Image
                    src="/campusorbit.png"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-10 w-10 rounded-full"
                />
                <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
                    See for yourself @campusorbit.vercel.app
                </p>
                <p className="mt-4 rounded-full border border-green-500 bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/20">
                    Website
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
            >
                <Image
                    src="/campusorbit.png"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-10 w-10 rounded-full"
                />
                <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
                    Ultra fast backend written in Rust
                </p>
                <p className="mt-4 rounded-full border border-orange-500 bg-orange-100 px-2 py-0.5 text-xs text-orange-600 dark:bg-orange-900/20">
                    Backend
                </p>
            </motion.div>
        </motion.div>
    )
}
const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    }
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
            >
                <Image
                    src="/campusorbit.png"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="h-10 w-10 rounded-full"
                />
                <p className="text-xs text-neutral-500">
                    There are a lot of cool framerworks out there like React,
                    Angular, Vue, Svelte that can make your life ....
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="ml-auto flex w-3/4 flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
            >
                <p className="text-xs text-neutral-500">Use PHP.</p>
                <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
            </motion.div>
        </motion.div>
    )
}
const items = [
    {
        title: "AI Content Generation",
        description: (
            <span className="text-sm">
                Experience the power of AI in generating unique content.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Automated Proofreading",
        description: (
            <span className="text-sm">
                Let AI handle the proofreading of your documents.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "3D designs",
        description: (
            <span className="text-sm">
                Just some 3D objects and animations I created.
                @rcsen-3d-designs.vercel.app
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Campusorbit",
        description: (
            <span className="text-sm">
                The ultimate ecoystem of never-seen-before tech-stack.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "Text Summarization",
        description: (
            <span className="text-sm">
                Summarize your lengthy documents with AI technology.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
]
