export function CircularBg() {
    return (
        <div className="absolute z-[-10] flex h-[150%] w-[150%] rounded-full border-[5px] border-dashed border-indigo-600 bg-zinc-800 opacity-30 duration-500 hover:scale-105">
            <div
                className="m-auto flex h-2/3 w-2/3 animate-spin rounded-full border-[5px] border-dashed border-indigo-600 bg-zinc-700"
                style={{ animationDuration: "60s" }}
            >
                <div
                    className="m-auto flex h-2/3 w-2/3 animate-spin rounded-full border-[5px] border-dashed border-indigo-600 bg-zinc-600 direction-reverse"
                    style={{
                        animationDuration: "30s",
                    }}
                >
                    <div
                        className="m-auto flex h-2/3 w-2/3 animate-spin rounded-full border-[5px] border-dashed border-indigo-600 bg-zinc-500"
                        style={{ animationDuration: "20s" }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
