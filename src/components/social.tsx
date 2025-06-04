import Image from "next/image"
import Link from "next/link"

export function Social(
    props: React.HTMLAttributes<HTMLDivElement> & {
        social: { name: string; link: string }[]
    }
) {
    return (
        <div
            className={`relative mb-2 flex items-center gap-6 overflow-hidden ${props.className}`}
        >
            {props.social.map((i) => (
                <Link
                    href={`${i.link}`}
                    target="_blank"
                    className="cursor-pointer"
                >
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white/50 bg-white/20 duration-200 hover:scale-110">
                        <Image
                            src={`/${i.name}.svg`}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
            ))}
        </div>
    )
}
