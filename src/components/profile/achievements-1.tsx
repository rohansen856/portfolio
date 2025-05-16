import { AchievementCard } from "../achievements-card"

export async function Achievements() {
    const achievements = [
        {
            title: "Techkriti'24 Dual Track Winner",
            date: "March 2024",
            category: "Hackathons",
            description:
                "Secured top position in both Web Development and Cybersecurity tracks in Techkriti 24-hour hackathon.",
            tags: [
                "Cybersecurity",
                "Web Development",
                "Secure Architecture",
                "Full Stack",
                "Threat Modeling",
            ],
            image: "/achievements/techkriti.jpg",
            points: [
                "Designed and implemented enterprise-grade full-stack applications.",
                "Integrated advanced security and compliance mechanisms.",
                "Focused on performance optimization and secure coding practices.",
            ],
            url: "",
        },
        {
            title: "Kshitij'25 Dual Track Winner",
            date: "January 2025",
            category: "Hackathons",
            description:
                "Achieved dual victory in Zero Trust Architecture and East India Blockchain Summit tracks.",
            tags: [
                "Zero Trust Architecture",
                "Blockchain Development",
                "DevSecOps",
                "Cloud Security",
                "DApp Development",
            ],
            image: "/achievements/kshitij.png",
            points: [
                "Built decentralized applications with integrated zero trust security models.",
                "Used CI/CD and containerized deployments for scalable delivery.",
                "Emphasized security-first design with blockchain-based verification systems.",
            ],
            url: "",
        },
        {
            title: "MAD4CAD - 2nd Place",
            date: "August 2024",
            category: "Hackathons",
            description:
                "Secured 2nd place in a college-wide 3D modeling competition hosted under MAD4CAD event.",
            tags: [
                "3D Modeling",
                "Blender",
                "CAD",
                "Design Thinking",
                "Rapid Prototyping",
            ],
            image: "/achievements/mad4cad.jpeg",
            points: [
                "Designed detailed 3D models using Blender for real-world structures.",
                "Applied design thinking principles to CAD workflows.",
                "Optimized models for simulation and real-time rendering.",
            ],
            url: "",
        },
        {
            title: "Steamlink Pathway Blogathon - Top 5",
            date: "December 2024",
            category: "Hackathons",
            description:
                "Ranked in the top 5 in a nationwide technical blogathon focused on emerging technologies.",
            tags: [
                "Technical Writing",
                "Machine Learning",
                "Big Data",
                "Data Storytelling",
                "Content Creation",
            ],
            image: "/achievements/pathway.png",
            points: [
                "Published high-impact blogs on machine learning and data ecosystems.",
                "Explained technical concepts to a wide audience with clarity and precision.",
                "Used real-world case studies and data visualizations for engagement.",
            ],
            url: "",
        },
        {
            title: "Linux Kernel Development - Contributor",
            date: "April 2024",
            category: "Certifications",
            description:
                "Completed Linux Kernel Development course and contributed to the mainline kernel.",
            tags: [
                "Linux Kernel",
                "System Programming",
                "C Programming",
                "Operating Systems",
                "Open Source Contribution",
            ],
            image: "/achievements/kernel.png",
            points: [
                "Understood memory management, I/O, and scheduling subsystems in Linux.",
                "Submitted contributions to kernel modules with proper patch formatting.",
                "Engaged with maintainers and followed strict open-source workflows.",
            ],
            url: "",
        },
        {
            title: "OSS Software Security Essentials - OpenSSF",
            date: "May 2024",
            category: "Certifications",
            description: "Completed the OpenSSF Software Security course.",
            tags: [
                "Software Security",
                "Secure Development Lifecycle",
                "Supply Chain Security",
                "Vulnerability Management",
            ],
            image: "/achievements/oss-software-security.png",
            points: [
                "Learned software supply chain threats and mitigation strategies.",
                "Applied secure development lifecycle principles in open-source ecosystems.",
                "Explored vulnerability disclosure processes and SBOM practices.",
            ],
            url: "",
        },
        {
            title: "OSS Supply Chain Security - OpenSSF",
            date: "May 2024",
            category: "Certifications",
            description:
                "Learned to assess and improve software supply chain security in open-source environments.",
            tags: [
                "Supply Chain Security",
                "Open Source",
                "Secure CI/CD",
                "OpenSSF",
                "Software Composition Analysis",
            ],
            image: "/achievements/oss-supply-chain-security.png",
            points: [
                "Analyzed risks in software supply chain dependencies.",
                "Utilized SCA tools to detect outdated and vulnerable packages.",
                "Enforced signed commits and reproducible builds.",
            ],
            url: "",
        },
        {
            title: "OSS Security Management - OpenSSF",
            date: "May 2024",
            category: "Certifications",
            description:
                "Completed OpenSSF training on secure project management and vulnerability disclosure.",
            tags: [
                "Security Management",
                "Open Source Governance",
                "Vulnerability Disclosure",
                "Community Security",
            ],
            image: "/achievements/oss-security-management.png",
            points: [
                "Studied project-level security protocols for open-source maintainers.",
                "Understood legal and ethical issues in disclosure and patching.",
                "Practiced best practices for secure issue tracking and community engagement.",
            ],
            url: "",
        },
        {
            title: "Summer of Bitcoin 2025 Contributor",
            date: "May 2025 – August 2025",
            category: "Open Source",
            description:
                "Selected as a contributor in Summer of Bitcoin 2025 under the BraqidPool organization.",
            tags: [
                "Bitcoin",
                "AI Tooling",
                "Open Source",
                "Rust",
                "Developer Experience",
                "Blockchain Infrastructure",
            ],
            image: "/achievements/sob.png",
            points: [
                "Contributed to AI-assisted tooling for improving Bitcoin developer workflows",
                "Implemented code suggestions and issue triaging features using LLMs",
                "Collaborated with global mentors and developers on decentralized open-source infrastructure",
                "Built and optimized Rust-based backend modules for AI-enhanced static analysis",
            ],
            url: "https://summerofbitcoin.org",
        },
        {
            title: "Hacktoberfest 2024 Completion",
            date: "October 2024",
            category: "Open Source",
            description:
                "Successfully completed the Hacktoberfest challenge by making multiple high-quality PRs.",
            tags: [
                "Open Source",
                "GitHub Workflows",
                "Rust",
                "Cloud-Native",
                "Algorithm Optimization",
            ],
            image: "/achievements/hacktoberfest.png",
            points: [
                "Contributed to diverse repositories using Rust, TypeScript, and Python.",
                "Focused on algorithm improvements and documentation enhancements.",
                "Participated in issue triaging and CI/CD pipeline fixes.",
            ],
            url: "",
        },
        {
            title: "BSOC'24 - 1st Place",
            date: "August 2024",
            category: "Open Source",
            description:
                "Ranked 1st among 20+ participants in a 3-month-long internal open-source development challenge.",
            tags: [
                "Open Source",
                "Code Quality",
                "Full Stack Development",
                "Agile Collaboration",
            ],
            image: "/achievements/BSOC.png",
            points: [
                "Led multiple contributions across front-end and back-end repositories.",
                "Maintained coding standards and documentation across teams.",
                "Optimized application performance and ensured security compliance.",
            ],
            url: "",
        },
        {
            title: "GSSOC'24 - Explorer Badge",
            date: "May 2024",
            category: "Open Source",
            description:
                "Earned the 'Explorer' badge for substantial contributions during GirlScript Summer of Code 2024.",
            tags: [
                "Open Source",
                "Version Control",
                "Collaborative Development",
                "Microservices",
                "Serverless",
            ],
            image: "/achievements/GSSOC.png",
            points: [
                "Made impactful open-source contributions across multiple repositories.",
                "Implemented microservices using serverless architectures.",
                "Ensured cost optimization and adherence to security best practices.",
            ],
            url: "",
        },
    ]

    const grouped = {
        "Open Source": achievements.filter((a) => a.category === "Open Source"),
        Certifications: achievements.filter(
            (a) => a.category === "Certifications"
        ),
        Hackathons: achievements.filter((a) => a.category === "Hackathons"),
        Others: achievements.filter((a) => a.category === "Others"),
    }

    return (
        <section
            className="container relative mb-20 mt-8 w-full"
            id="achievements"
            about="achievements"
        >
            <h2 className="mb-12 w-full rounded-xl bg-secondary py-3 text-center text-3xl font-bold lg:text-4xl">
                Achievements & Certifications
            </h2>

            {Object.entries(grouped).map(
                ([key, group]) =>
                    group.length > 0 && (
                        <div key={key} className="mb-14">
                            <h3 className="mb-6 border-muted-foreground/30 pb-2 text-2xl font-semibold text-primary">
                                <span className="border-b-4 border-teal-600 p-1 pr-6">
                                    {key}
                                </span>
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                                {group.map((achievement, index) => (
                                    <AchievementCard
                                        key={index}
                                        achievement={achievement}
                                    />
                                ))}
                            </div>
                        </div>
                    )
            )}
        </section>
    )
}
