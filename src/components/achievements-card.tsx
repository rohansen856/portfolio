"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface Achievement {
    title: string
    date: string
    description: string
    tags: string[]
    image: string
    points: string[]
    certificates: {
        title: string
        url: string
    }[]
}

export function AchievementCard({ achievement }: { achievement: Achievement }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="group relative">
            <div className="overflow-hidden rounded-xl border border-border bg-background/80 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <div className="relative h-48 w-full">
                    <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                <div className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{achievement.date}</span>
                    </div>

                    <h3 className="mb-2 text-xl font-semibold">
                        {achievement.title}
                    </h3>

                    <p className="mb-4 min-h-12 text-muted-foreground">
                        {achievement.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                        {achievement.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <ul className="mb-4 space-y-2">
                        {achievement.points.map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                                className="flex items-start gap-2"
                            >
                                <Award className="mt-1 h-4 w-4 text-primary" />
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {achievement.certificates.map((cert, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {cert.title}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl">
                                    <div className="relative h-[80vh] w-full">
                                        <Image
                                            src={cert.url}
                                            alt={cert.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
