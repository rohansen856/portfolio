/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
            },
            {
                protocol: "https",
                hostname: "ghchart.rshah.org",
            },
            {
                protocol: "https",
                hostname: "github-readme-streak-stats.herokuapp.com",
            },
        ],
    },
}

module.exports = nextConfig
