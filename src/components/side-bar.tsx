import Image from "next/image"
import Link from "next/link"

export function RightBar(props: React.HTMLAttributes<HTMLDivElement>) {
    const social = ["github", "linkedin", "instagram", "twitter"]
    return (
        <div
            className={`fixed right-20 top-[30vh] z-[100] h-[70vh] w-8 ${props.className} flex flex-col items-center justify-end`}
        >
            <div className="flex h-full flex-col items-center justify-end gap-8 pb-16">
                {social.map((i) => (
                    <Link href={`https://${i}.com`} className="cursor-pointer">
                        <div className="relative h-8 w-8 duration-200 hover:scale-110">
                            <Image
                                src={`/${i}.svg`}
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <span className="h-[30vh] w-1 rounded-full bg-slate-500"></span>
        </div>
    )
}
