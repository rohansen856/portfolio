import { AchievementCard } from "../achievements-card"

export async function Achievements() {
    const achievements = [
        {
            title: "GSSOC'24 Explorer",
            date: "May 2024",
            description:
                "Obtained The Explorer badge by doing major contribution in the GSSOC'24 Programme",
            tags: ["AWS", "Open Source", "Contributing", "Collaborative"],
            image: "/achievements/GSSOC.png",
            points: [
                "Obtained the explorer GSSOC batch",
                "Expertise in serverless and microservices architectures",
                "Cost optimization and security best practices",
            ],
            certificates: [
                // {
                //     title: "View Certificate",
                //     url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
                // },
            ],
        },
        {
            title: "Techkriti'24 Dual track Winner",
            date: "March 2024",
            description:
                "Secured a win in both web and cybersecurity track in 24 hour hackathon",
            tags: ["Cybersecurity", "Hackathon", "Security", "Full Stack"],
            image: "/achievements/techkriti.jpg",
            points: [
                "Enterprise solution design and implementation",
                "Security and compliance expertise",
                "Performance optimization strategies",
            ],
            certificates: [
                // {
                //     title: "Professional Certificate",
                //     url: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop",
                // },
                // {
                //     title: "Associate Certificate",
                //     url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
                // },
            ],
        },
        {
            title: "BSOC'24 winner",
            date: "August 2024",
            description: "Placed 1st in 3 month long intra-college hackathon",
            tags: ["Full Stack", "Open source", "Contributor"],
            image: "/achievements/BSOC.png",
            points: [
                "Most contributions among 20 oparticipants",
                "Security and compliance expertise",
                "Performance optimization strategies",
            ],
            certificates: [
                // {
                //     title: "Professional Certificate",
                //     url: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop",
                // },
                // {
                //     title: "Associate Certificate",
                //     url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
                // },
            ],
        },
        {
            title: "Hacktoberfest Challenge Completion",
            date: "August 2024",
            description:
                "Successfully Made PRs and got them merged to complete the Hacktoberfest 2024 challenge",
            tags: [
                "Full Stack",
                "Open source",
                "Contributor",
                "Cloud",
                "Rust",
                "Algorithms",
            ],
            image: "/achievements/hacktoberfest.png",
            points: [
                "Successful cotributions",
                "Security and compliance expertise",
                "Performance optimization strategies",
            ],
            certificates: [
                // {
                //     title: "Professional Certificate",
                //     url: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop",
                // },
                // {
                //     title: "Associate Certificate",
                //     url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
                // },
            ],
        },
        {
            title: "MAD4CAD 3D Modeling Contest",
            date: "August 2024",
            description:
                "Secured 2nd Place in intra college 3D modeling hackathon",
            tags: ["Blender", "3D Modeling", "3D Architecture", "Designing"],
            image: "/achievements/mad4cad.jpeg",
            points: [
                "Successful cotributions",
                "Security and compliance expertise",
                "Performance optimization strategies",
            ],
            certificates: [
                // {
                //     title: "Professional Certificate",
                //     url: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop",
                // },
                // {
                //     title: "Associate Certificate",
                //     url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
                // },
            ],
        },
    ]
    return (
        <section
            className="container relative mb-16 mt-6 w-full"
            about="achievements"
            id="achievements"
        >
            <h3 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Achievements & Certifications
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                {achievements.map((achievement, index) => (
                    <AchievementCard key={index} achievement={achievement} />
                ))}
            </div>
        </section>
    )
}
