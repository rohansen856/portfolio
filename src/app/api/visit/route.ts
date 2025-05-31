import { NextResponse } from "next/server"

import redis from "@/lib/redis"

export async function GET(req: Request) {
    const origin =
        req.headers.get("origin") || req.headers.get("referer") || "unknown"
    console.log(origin)
    const key = "portfolio:visit_count"
    let count = 0

    if (!origin?.includes("localhost")) count = await redis.incr(key)
    else {
        const result = await redis.get(key)
        count = result ? parseInt(result) : 0
    }

    return NextResponse.json({ count })
}
