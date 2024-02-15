import { ProfileImage } from "@/components/profile-image"
import { Current } from "@/components/profile/current-1"
import { Home } from "@/components/profile/home-1"
import { Profiles } from "@/components/profile/profiles-1"
import { Skills } from "@/components/profile/skills-1"
import { Timeline } from "@/components/profile/timeline-1"
import { SiteFooter } from "@/components/site-footer"

export default async function ProfilePage() {
    return (
        <div className="relative flex h-[90vh] w-full flex-col overflow-x-hidden lg:flex-row">
            <div className="relative w-full overflow-x-hidden">
                <Home
                    name="rohan sen"
                    job="CPP Developer"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis necessitatibus aut nihil a eum blanditiis accusamus dolorum harum dolorem?"
                    image="/profile-removebg.png"
                />
                <Current />
                <Timeline />
                <Skills
                    skills={[
                        "typescript",
                        "javascript",
                        "java",
                        "react",
                        "cpp",
                        "figma",
                        "next-js",
                        "flutter",
                    ]}
                />
                {/* <Profiles /> */}
                <SiteFooter />
            </div>
        </div>
    )
}
