import Link from "next/link"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface QualificationProps {
    serial: number
    name: string
    place: string
    date: string
}

const timeline: QualificationProps[] = [
    {
        serial: 1,
        name: "Born",
        place: "Kolkata",
        date: "26-10-2004",
    },
    {
        serial: 2,
        name: "Middle School",
        place: "Hindu School",
        date: "2010",
    },
    {
        serial: 3,
        name: "High School",
        place: "Barasat PCS Govt.",
        date: "2018",
    },
    {
        serial: 4,
        name: "College",
        place: "IIITDM Jabalpur",
        date: "2023",
    },
    {
        serial: 5,
        name: "Started Coding",
        place: "IIITDM Jabalpur",
        date: "2023",
    },
    {
        serial: 6,
        name: "1st hackathon win",
        place: "IIT Kanpur",
        date: "2024",
    },
    {
        serial: 7,
        name: "Start of Open Source journey",
        place: "GSSOC'24",
        date: "2024",
    },
    {
        serial: 8,
        name: "1st Place in OSS",
        place: "BSoC'24",
        date: "2024",
    },
    {
        serial: 9,
        name: "Programming club",
        place: "Core member TPC, IIITDMJ",
        date: "2024",
    },
    {
        serial: 10,
        name: "Open Source Milestone",
        place: "Hacktoberfest'24",
        date: "2024",
    },
    {
        serial: 11,
        name: "1st MLH hackathon",
        place: "HackCBS 7.0",
        date: "2024",
    },
    {
        serial: 12,
        name: "2nd major hackathon win",
        place: "IIT Kharagpur",
        date: "2025",
    },
    {
        serial: 13,
        name: "3rd major hackathon win",
        place: "IIT Roorkee",
        date: "2025",
    },
    {
        serial: 14,
        name: "Open Source Internship",
        place: "Summer of Bitcoin'25",
        date: "2025",
    },
]

export function Timeline() {
    return (
        <section className="container relative mb-16 mt-6 w-full">
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Journey
            </h3>
            <div className="flex flex-col items-center justify-center">
                <ScrollArea className="w-full">
                    <div className="relative w-full py-12">
                        {/* Horizontal Timeline Line with Purple Halo */}
                        <div className="absolute left-0 top-1/2 z-10 h-1 w-full">
                            <div className="relative h-full w-full">
                                {/* Purple Halo Effect */}
                                <div className="absolute h-1 w-full bg-blue-700 shadow-[0_0_10px_3px_rgba(138,43,226,0.4)]"></div>
                            </div>
                        </div>
                        <div className="relative flex border-x-4 border-blue-700">
                            {timeline.map((item) => (
                                <div
                                    key={item.serial}
                                    className="relative flex min-w-[300px] px-8 first:pl-4 last:pr-4"
                                >
                                    <div className="flex w-full flex-col items-center">
                                        {item.serial % 2 === 0 ? (
                                            <div className="mb-6 pb-8 text-center">
                                                <h4 className="mb-1 text-lg font-medium">
                                                    {item.name}
                                                </h4>
                                                <p className="text-lg opacity-60">
                                                    {item.place}
                                                </p>
                                                <p className="text-lg opacity-60">
                                                    {item.date}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="mb-6 h-16"></div>
                                        )}

                                        <div className="absolute left-1/2 top-1/2 z-20 flex h-6 w-6 -translate-x-1/2 translate-y-[-40%] rounded-full border-2 border-blue-800 shadow-[0_0_8px_2px_rgba(29,78,216,0.6)]">
                                            <span className="m-auto h-full w-full rounded-full border-[4px] border-muted bg-blue-700 duration-500 hover:border-none"></span>
                                        </div>

                                        {item.serial % 2 !== 0 ? (
                                            <div className="mt-6 pt-8 text-center">
                                                <h4 className="mb-1 text-xl font-medium">
                                                    {item.name}
                                                </h4>
                                                <p className="text-lg opacity-60">
                                                    {item.place}
                                                </p>
                                                <p className="text-lg opacity-60">
                                                    {item.date}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="mt-6 h-16"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                {timeline.length === 0 && (
                    <div className="flex w-full text-xl lg:text-2xl">
                        <p className="m-auto rounded-md bg-muted px-12 py-5">
                            Nothing Yet
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
