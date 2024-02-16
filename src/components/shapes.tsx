import { cn } from "@/lib/utils"

const Triangle = (
    props: React.HtmlHTMLAttributes<HTMLDivElement> & {
        base: number
        height: number
    }
) => (
    <svg className={cn(props.className, "bg-red-700")}>
        <polygon points={`0,0 0,100 ${props.base},100`} fill="#6ED0DD" />
    </svg>
)

const Circle = (
    props: React.HtmlHTMLAttributes<HTMLDivElement> & { radius: number }
) => (
    <svg className={cn(props.className, "")}>
        <circle
            cx={props.radius}
            cy={props.radius}
            r={props.radius}
            fill="#405D86"
        />
    </svg>
)
const Rectangle = (
    props: React.HtmlHTMLAttributes<HTMLDivElement> & {
        height: number
        width: number
    }
) => (
    <svg className={cn(props.className, "")}>
        <rect width={props.width} height={props.height} fill="#ED6088" />
    </svg>
)
