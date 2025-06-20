import Image from "next/image"
import Link from "next/link"

export function RightBar(props: React.HTMLAttributes<HTMLDivElement>) {
    const social = [
        { name: "github", link: "https://github.com/rohansen856/" },
        { name: "linkedin", link: "https://www.linkedin.com/in/rohan856/" },
        { name: "instagram", link: "https://www.instagram.com/rcsen856" },
        { name: "twitter", link: "https://x.com/rohansen856" },
        { name: "gmail", link: "mailto:rohansen856@gmail.com" },
    ]
    return (
        <div
            className={`fixed right-20 top-[30vh] z-[100] h-[70vh] w-8 ${props.className} flex flex-col items-center justify-end`}
        >
            <div className="flex h-full flex-col items-center justify-end gap-4 pb-16">
                {social.map((i) => (
                    <div className="flex h-14 w-14 rounded-full">
                        <Link
                            href={i.link}
                            target="_blank"
                            className="m-auto flex cursor-pointer rounded-full p-2 hover:h-16 hover:w-16"
                        >
                            <div className="relative m-auto h-10 w-10 overflow-hidden rounded-full border-2 border-white/50 bg-white/20 duration-200">
                                <Image
                                    src={`/${i.name}.svg`}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <span className="h-[30vh] w-1 rounded-full bg-slate-500"></span>
        </div>
    )
}
