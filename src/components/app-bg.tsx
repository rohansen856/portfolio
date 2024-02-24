/* eslint-disable tailwindcss/no-contradicting-classname */
export function AppShowcaseBg(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`absolute top-0 z-[-10] h-full w-full overflow-hidden ${props.className}`}
        >
            <div className="relative h-[100vh] w-full bg-background">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>
        </div>
    )
}
