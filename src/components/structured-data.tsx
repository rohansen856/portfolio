import { siteConfig } from "@/config/site"

export function StructuredData() {
    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Rohan Sen",
        alternateName: "Rohan Chandra Sen",
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image.png`,
        email: "rohansen856@gmail.com",
        jobTitle: "Backend & Open Source Developer",
        description: siteConfig.description,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.twitter,
            siteConfig.links.linkedin,
            siteConfig.links.instagram,
            "https://www.leetcode.com/rohansen856",
            "https://www.codechef.com/users/rohansen856",
            "https://codeforces.com/profile/rohansen856",
        ].filter(Boolean),
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "IIITDM Jabalpur",
        },
        knowsAbout: [
            "System Design",
            "Backend Development",
            "Blockchain",
            "Cloud Computing",
            "DevOps",
            "Microservices",
            "Rust",
            "Go",
            "TypeScript",
            "Open Source",
            "Machine Learning",
        ],
    }

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        author: { "@type": "Person", name: "Rohan Sen" },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify([person, website]),
            }}
        />
    )
}
