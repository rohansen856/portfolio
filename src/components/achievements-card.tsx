"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, Calendar, ChevronRight, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface Achievement {
    title: string
    date: string
    description: string
    tags: string[]
    image: string
    points: string[]
    url: string
}

export function AchievementCard({ achievement }: { achievement: Achievement }) {
    return (
        <div className="group relative">
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="h-full overflow-hidden rounded-xl border border-border bg-background/80 shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
                <div className="relative h-52 w-full overflow-hidden">
                    <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                    <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 backdrop-blur-sm">
                        <div className="flex items-center gap-1 text-foreground">
                            <Calendar className="h-3 w-3" />
                            <span className="font-medium">
                                {achievement.date}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight">
                        {achievement.title}
                    </h3>

                    <p className="text-md mb-4 text-foreground">
                        {achievement.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                        {achievement.tags.map((tag) => {
                            return (
                                <Badge
                                    key={tag}
                                    className={`border-none font-medium`}
                                >
                                    {tag}
                                </Badge>
                            )
                        })}
                    </div>

                    <div className="mb-6 space-y-3">
                        {achievement.points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                className="flex items-start gap-2"
                            >
                                <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span className="text-sm">{point}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Show credentials button */}
                    <div className="flex justify-end">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={achievement.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="rounded-full px-4 text-xs font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <span>Show Credentials</span>
                                            <ChevronRight className="ml-1 h-3 w-3" />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>View full credentials</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
