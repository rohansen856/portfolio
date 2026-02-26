import { AchievementCard } from "../achievements-card"

export async function Achievements() {
    const achievements = [
        {
            title: "HackBit'26 Winner - MLH hackathon",
            date: "February 2026",
            category: "Hackathons",
            description:
                "Won the Gemini Track at HackBit for building CodeAider, an AI-powered competitive programming assistant that mentors users in real time using Gemini 2.5 Flash while enforcing genuine learning without exposing solutions.",
            tags: [
                "Generative AI",
                "Google Gemini",
                "Browser Extension",
                "Node.js",
                "PostgreSQL",
                "GraphQL",
                "Developer Tools",
            ],
            image: "/achievements/hackbit.png",
            points: [
                "Built a Manifest V3 Chrome extension that extracts problem statements and user code from LeetCode and Codeforces for real-time contextual analysis.",
                "Integrated Gemini model with a strict JSON response schema to provide intuition, approach guidance, complexity insights, and bug detection without revealing direct solutions.",
                "Engineered a smart Solutions tab lock and auto-verdict detection pipeline to promote disciplined problem solving.",
            ],
            url: "https://devpost.com/software/codeaider",
        },
        {
            title: "SIH'25 Finalist - Smart India Hackathon",
            date: "November 2025",
            category: "Hackathons",
            description:
                "Shortlisted as finalist by National Technical Research Organisation (NTRO) for developing Advanced Persistent Threat (APT) detection system using ELK Stack for cybersecurity applications.",
            tags: [
                "Cybersecurity",
                "ELK Stack",
                "APT Detection",
                "Elasticsearch",
                "Threat Intelligence",
                "Security Analytics",
            ],
            image: "/achievements/SIH.png",
            points: [
                "Developed sophisticated threat detection rules in ELK Stack for identifying Advanced Persistent Threats (APTs).",
                "Implemented real-time monitoring and analysis of logs, network traffic, and system events for APT lifecycle detection.",
                "Created detection mechanisms for credential dumping, lateral movement, PowerShell execution, and unusual egress data activities.",
                "Used public APT samples to generate realistic log data for comprehensive testing and validation of threat rules.",
            ],
            url: "https://sih.gov.in/sih2025/screeningresult-batch1",
        },
        {
            title: "Innowave'25 Winner - Cognizance, IIT Roorkee",
            date: "March 2025",
            category: "Hackathons",
            description:
                "Won the Innowave business hackathon at Cognizance, IIT Roorkee, for developing an innovative, impact-driven tech solution aligned with real-world business challenges.",
            tags: [
                "Business Hackathon",
                "Tech for Impact",
                "Innovation",
                "Strategy",
                "Pitching",
                "Product Design",
            ],
            image: "/achievements/cognizance.png",
            points: [
                "Ideated and built a scalable solution to address a critical market gap using tech-driven business insights.",
                "Led product design and strategic pitch development tailored for industry mentors and judges.",
                "Collaborated on cross-functional aspects including UX, tech architecture, and business modeling.",
            ],
            url: "",
        },
        {
            title: "Kshitij'25 Dual Track Winner - IIT Kharagpur",
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
            title: "Techkriti'24 Dual Track Winner - IIT Kanpur",
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
            title: "Introduction to Kubernetes - CNCF",
            date: "May 2024",
            category: "Certifications",
            description:
                "Acquired in-depth expertise in Kubernetes fundamentals and advanced orchestration techniques.",
            tags: [
                "Kubernetes",
                "Container Orchestration",
                "Cloud Native Architecture",
                "DevOps Automation",
                "Cluster Management",
            ],
            image: "/achievements/kubernetes-intro.png",
            points: [
                "Mastered Kubernetes core architecture including control plane and worker nodes.",
                "Best practices for deployment strategies, scaling, and self-healing of pods.",
                "Configured networking, storage, and security policies for enterprise-grade clusters.",
            ],
            url: "",
        },
        {
            title: "Introduction to Kubernetes - CNCF",
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
            title: "EU Cybersecurity Resilience Act",
            date: "May 2025",
            category: "Certifications",
            description:
                "Completed a specialized training on the EU Cybersecurity Resilience Act, focusing on regulatory compliance, secure development practices, and risk management for digital products.",
            tags: [
                "Cybersecurity",
                "Regulatory Compliance",
                "Secure Development",
                "EU Regulations",
                "Risk Management",
            ],
            image: "/achievements/eu-cra.png",
            points: [
                "Studied the core principles and legal framework of the EU Cybersecurity Resilience Act.",
                "Learned how to implement secure software development lifecycle (SSDLC) practices in line with EU standards.",
                "Explored requirements for vulnerability management, documentation, and reporting obligations.",
                "Analyzed the act's impact on open source and commercial software supply chains.",
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
            date: "May 2025 - August 2025",
            category: "Open Source",
            description:
                "Selected as a contributor in Summer of Bitcoin 2025 under the BraqidPool organization.",
            tags: [
                "Bitcoin",
                "AI Tooling",
                "Open Source",
                "Rust",
                "Developer Experience",
                "Blockchain",
            ],
            image: "/achievements/sob.png",
            points: [
                "Contributed to AI-assisted tooling for improving Bitcoin developer workflows",
                "Implemented code suggestions and issue triaging features using LLMs",
                "Collaborated with global mentors and developers on decentralized open-source infrastructure",
                "Built and optimized Rust-based backend modules for AI-enhanced static analysis",
            ],
            url: "https://drive.google.com/file/d/1HTbYnxABCg3yzGmWDIRxXma6Zcl9WRbS/view",
        },
        {
            title: "LFX 2025 Contributor - Open Mainframe Project",
            date: "March 2025 - June 2025",
            category: "Open Source",
            description:
                "Selected as an LFX Mentorship contributor under the Open Mainframe Project, working on Zowe Zebra CLI and Python automation modules.",
            tags: [
                "Mainframe",
                "Open Source",
                "Python",
                "Zowe",
                "CLI",
                "LFX Mentorship",
            ],
            image: "/achievements/lfx.png",
            points: [
                "Enhanced Zowe Zebra CLI features for better mainframe developer tooling",
                "Developed Python-based automation scripts for mainframe task simplification",
                "Collaborated with project mentors on improving CLI usability and test coverage",
                "Contributed documentation and code improvements to Zebra's open-source repository",
            ],
            url: "https://drive.google.com/file/d/11i4PnTUlTfQTwl6RvNEyO40iqadD5cPb/view?usp=sharing",
        },
        {
            title: "C4GT 2025 Contributor – STRK Schedule",
            date: "May 2025 - August 2025",
            category: "Open Source",
            description:
                "Selected as a contributor in Code for GovTech 2025, working on STRK Schedule – a decentralized healthcare solution built on Starknet for secure diabetes management in government healthcare systems.",
            tags: [
                "Web3",
                "Blockchain",
                "Healthcare",
                "Starknet",
                "ZK Rollups",
                "NFTs",
                "DAO",
                "Public Goods",
            ],
            image: "/achievements/c4gt.png",
            points: [
                "Integrated Voyager API for real-time contract verification and transaction transparency in medical data flow.",
                "Designed NFT-based medical incident tracking to enable personalized, secure, and immutable patient records.",
                "Contributed to DAO integration for incentivized patient health tracking via gasless voting and decentralized governance.",
                "Collaborated with stakeholders to ensure alignment with Digital Public Goods (DPG) principles for scalable impact.",
            ],
            url: "https://dway.io/b/fb044eba-ce32-4557-854f-33a40b6501e8?pdf=1",
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
            url: "https://www.instagram.com/p/C-LNHSNtbk3/",
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
        {
            title: "Blockchain Lead - BitByte, The Programming Club",
            date: "July 2024 - Present",
            category: "Volunteering",
            description:
                "Spearheaded blockchain initiatives at IIITDM Jabalpur's official programming club to cultivate decentralized tech adoption and student engagement.",
            tags: [
                "Blockchain",
                "Community Leadership",
                "Decentralization",
                "Developer Advocacy",
                "Technical Workshops",
            ],
            image: "/achievements/bitbyte.png",
            points: [
                "Organized campus-wide workshops and meetups to educate students on blockchain fundamentals and development tools.",
                "Guided technical teams in building smart contract projects and participating in Web3 hackathons.",
                "Promoted open collaboration and hands-on learning through curated blockchain learning paths and mentorship.",
            ],
            url: "",
        },
        {
            title: "Community Coordinator - LF Decentralized Trust",
            date: "May 2025 - Present",
            category: "Volunteering",
            description:
                "Led regional outreach and education initiatives under the Linux Foundation's Decentralized Trust project, advancing awareness of trustless systems and decentralized identity.",
            tags: [
                "Decentralized Identity",
                "Community Leadership",
                "Self-Sovereign Identity",
                "Open Source",
                "Trust Architectures",
            ],
            image: "/achievements/lfdt.png",
            points: [
                "Organized technical sessions and meetups on decentralized trust, SSI, and blockchain governance models.",
                "Facilitated collaboration between student communities, developers, and industry experts.",
                "Championed the Linux Foundation's mission to build transparent, interoperable trust infrastructures.",
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
        Volunteering: achievements.filter((a) => a.category === "Volunteering"),
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
                            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
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
