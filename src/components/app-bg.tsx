/* eslint-disable tailwindcss/no-contradicting-classname */
export function AppShowcaseBg(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`fixed z-[-10] h-full w-full overflow-hidden ${props.className}`}
        >
            <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
    )
}
