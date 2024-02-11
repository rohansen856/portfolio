import { Icons } from "./icons"

export function Social(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`relative flex h-[50vh] w-16 flex-col items-center justify-around overflow-hidden rounded-md border border-blue-700 backdrop-blur-2xl ${props.className}`}
        >
            <Icons.linkedIn
                height={30}
                width={30}
                className="cursor-pointer duration-100 hover:scale-125"
            />
            <Icons.instagram
                height={30}
                width={30}
                className="cursor-pointer duration-100 hover:scale-125"
            />
            <Icons.twitter
                height={30}
                width={30}
                className="cursor-pointer duration-100 hover:scale-125"
            />
            <Icons.gitHub
                height={30}
                width={30}
                className="cursor-pointer duration-100 hover:scale-125"
            />
            <Icons.linkedIn
                height={30}
                width={30}
                className="cursor-pointer duration-100 hover:scale-125"
            />
        </div>
    )
}
