import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
    const sections = [
        "",
        "#home",
        "#experience",
        "#achievements",
        "#skills",
        "#projects",
        "#profiles",
    ]

    return sections.map((section) => ({
        url: `${siteConfig.url}/${section}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: section === "" ? 1 : 0.8,
    }))
}
