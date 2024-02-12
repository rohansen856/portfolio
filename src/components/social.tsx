import Image from "next/image"

export function Social(
    props: React.HTMLAttributes<HTMLDivElement> & { social: string[] }
) {
    return (
        <div
            className={`relative flex h-16 items-center gap-6 overflow-hidden ${props.className}`}
        >
            {props.social.map((i) => (
                <div className="relative h-10 w-10 cursor-pointer">
                    <Image
                        src={`/${i}.svg`}
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    )
}
