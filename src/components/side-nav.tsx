"use client"

import Link from "next/link"
import {
    Briefcase,
    Clock,
    Code,
    Folder,
    Home,
    Trophy,
    Users,
} from "lucide-react"

const sidebarLinks = [
    {
        name: "Home",
        icon: <Home className="monitor:w-8 monitor:h-8 h-auto w-auto" />,
        href: "/#home",
    },
    // {
    //     name: "Timeline",
    //     icon: <Clock className="monitor:w-8 monitor:h-8 h-auto w-auto" />,
    //     href: "/#timeline",
    // },
    {
        name: "Experience",
        icon: <Briefcase className="monitor:w-8 monitor:h-8 h-auto w-auto" />,
        href: "/#experience",
    },
    {
        name: "Achievements",
        icon: <Trophy className="monitor:w-8 monitor:h-8 h-auto w-auto" />,
        href: "/#achievements",
    },
    {
        name: "Skills",
        icon: <Code className="monitor:w-8 monitor:h-8 h-auto w-auto" />,
        href: "/#skills",
    },
    {
        name: "Projects",
        icon: <Folder className="monitor:w-8 monitor:h-8 h-auto w-auto" />,
        href: "/#projects",
    },
    {
        name: "Profiles",
        icon: <Users className="monitor:w-8 monitor:h-8 h-auto w-auto" />,
        href: "/#profiles",
    },
]

export const Sidebar = () => {
    return (
        <div
            className="group fixed top-[50%] z-50 flex translate-y-[-50%] flex-col transition-all duration-300 ease-in-out hover:w-52 md:left-2 lg:left-4 lg:w-16 lg:py-2"
            style={{
                borderRadius: "2rem",
                background: "rgba(34, 34, 34, 0.50)",
                boxShadow: "0px 0px 80px 0px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(20px)",
            }}
        >
            <div className="monitor:gap-6 text-supporting-darkGray my-2 flex flex-col gap-4 pl-1 hover:items-start lg:my-4 lg:pl-2 xl:gap-4">
                {sidebarLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-white" flex h-10 w-12 items-center space-x-4 rounded-[2.5rem] p-2 text-lg font-bold transition duration-300 ease-in-out hover:scale-105 hover:bg-[#4E2529] hover:pl-3 hover:text-white hover:shadow-[0_4px_40px_rgba(0,0,0,0.10)] hover:backdrop-blur-[20px] group-hover:w-44 xl:h-12
                    `}
                    >
                        {link.icon}
                        <span className=" hidden group-hover:inline">
                            {link.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
