import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs",
        },
        {
            title: "Support",
            href: "/support",
            disabled: true,
        },
    ],
    sidebarNav: [
        {
            title: "Posts",
            href: "/dashboard",
        },
        {
            title: "Billing",
            href: "/dashboard/billing",
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
        },
    ],
}
