import Image from "next/image"
import Link from "next/link"

export function Social(
    props: React.HTMLAttributes<HTMLDivElement> & { social: string[] }
) {
    return (
        <div
            className={`relative flex h-16 items-center gap-6 overflow-hidden ${props.className}`}
        >
            {props.social.map((i) => (
                <Link href={`https://${i}.com`} className="cursor-pointer">
                    <div className="relative h-10 w-10">
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
