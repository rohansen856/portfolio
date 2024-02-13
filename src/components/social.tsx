import Image from "next/image"
import Link from "next/link"

export function Social(
    props: React.HTMLAttributes<HTMLDivElement> & { social: string[] }
) {
    return (
        <div
            className={`relative mb-2 flex items-center gap-6 overflow-hidden ${props.className}`}
        >
            {props.social.map((i) => (
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
    )
}
