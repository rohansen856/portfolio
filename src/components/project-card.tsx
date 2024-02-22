import Image from "next/image"

function ButtonLink({ text, href }: any) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`bg-midnight group mt-2 inline-flex items-center rounded-full px-6 py-1.5 font-semibold text-background no-underline hover:bg-slate-700 dark:bg-gray-200`}
        >
            {text}
            <svg
                className={`-mr-1 ml-2 mt-0.5 stroke-background stroke-2`}
                fill="none"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
            >
                <path
                    className="opacity-0 transition group-hover:opacity-100"
                    d="M0 5h7"
                ></path>
                <path
                    className="transition group-hover:translate-x-[3px]"
                    d="M1 1l4 4-4 4"
                ></path>
            </svg>
        </a>
    )
}

interface ProjectCardProps {
    gradient: string
    name: string
    description: string
    link: string
}

export function ProjectCard(
    props: React.HTMLAttributes<HTMLDivElement> & ProjectCardProps
) {
    return (
        <div
            className={`relative w-full max-w-[500px] overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-b ${props.gradient} ${props.className} mb-6 max-h-[500px] duration-200 hover:translate-y-[-5px]`}
        >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2 m-8 self-end text-center md:text-left">
                    <h2 className="mb-5 text-lg">{props.name}</h2>
                    <p className="h-[80px] overflow-y-hidden">
                        {props.description}
                    </p>
                    <ButtonLink text="View Project" href={props.link} />
                </div>
                <div className="relative col-auto h-full w-full">
                    <Image
                        src="/hero.svg"
                        placeholder="blur"
                        blurDataURL="/hero.svg"
                        fill
                        className="object-cover"
                        alt={"My Projects"}
                    />
                </div>
            </div>
        </div>
    )
}
