import { CurrentSong } from "@/components/current-song"

export function Current() {
    return (
        <section
            className="my-16 mb-32 flex w-full flex-col items-center justify-center gap-6 py-3 lg:flex-row lg:gap-16"
            about="current"
            id="current"
        >
            <h3 className="cssName flex scale-75 justify-center gap-2 md:scale-90 lg:scale-100">
                <div className="relative h-32 w-20 duration-200 hover:translate-y-[-10px]">
                    <div className="absolute z-20 h-32 w-8 bg-gradient-to-b from-[#405D86] to-[#384257]" />
                    <div className="absolute z-10 h-20 w-20 rounded-full bg-gradient-to-b from-[#F07F6B] to-[#EFC15C]" />
                    <div className="absolute bottom-0 z-0 h-0 w-0 border-x-[40px] border-b-[80px] border-x-transparent border-b-[#8D63B1]" />
                </div>
                <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                    <div className="absolute z-0 h-32 w-24 rounded-full bg-gradient-to-r from-[#405D86] to-[#384257]" />
                    <div className="absolute left-6 top-6 z-10 h-20 w-12 rounded-full bg-gradient-to-b from-[#6ED0DD] to-[#70E2B9] drop-shadow-lg" />
                </div>
                <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                    <div className="absolute z-0 h-32 w-24 bg-gradient-to-r from-[#405D86] to-[#384257]" />
                    <div className="absolute left-8 top-0 z-10 h-12 w-8 bg-gradient-to-t from-[#ED6088] to-[#C86FA3] drop-shadow-lg" />
                    <div className="absolute bottom-0 left-8 z-10 h-12 w-8 bg-gradient-to-b from-[#ED6088] to-[#C86FA3] drop-shadow-lg" />
                </div>
                <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                    <div className="absolute bottom-0 z-0 h-0 w-0 border-x-[48px] border-b-[128px] border-x-transparent border-b-[#384257]" />
                    <div className="absolute bottom-0 left-[32px] z-10 h-0 w-0 border-x-[17px] border-b-[50px] border-x-transparent border-b-[#8D63B1] drop-shadow-lg" />
                </div>
                <div className="relative h-32 w-24 duration-200 hover:translate-y-[-10px]">
                    <div className="absolute z-0 h-32 w-24 bg-gradient-to-r from-[#405D86] to-[#384257]" />
                    <div className="absolute bottom-0 left-2 z-10 h-0 w-0 border-x-[25px] border-b-[70px] border-x-transparent border-b-[#70E2B9] drop-shadow-lg" />
                    <div className="absolute right-2 top-0 z-10 h-0 w-0 rotate-180 border-x-[25px] border-b-[70px] border-x-transparent border-b-[#70E2B9] drop-shadow-lg" />
                </div>
            </h3>
            <CurrentSong />
        </section>
    )
}

;<svg width="50" height="50" version="1.1" className="hidden">
    <defs>
        <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#6ED0DD"></stop>
            <stop offset="100%" stopColor="#70E2B9"></stop>
        </linearGradient>
        <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#405D86"></stop>
            <stop offset="100%" stopColor="#384257"></stop>
        </linearGradient>
        <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ED6088"></stop>
            <stop offset="100%" stopColor="#C86FA3"></stop>
        </linearGradient>
        <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F07F6B"></stop>
            <stop offset="100%" stopColor="#EFC15C"></stop>
        </linearGradient>
        <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8D63B1"></stop>
            <stop offset="100%" stopColor="#8179CB"></stop>
        </linearGradient>
        <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#EDD460"></stop>
            <stop offset="100%" stopColor="#EDBC39"></stop>
        </linearGradient>
    </defs>
</svg>
