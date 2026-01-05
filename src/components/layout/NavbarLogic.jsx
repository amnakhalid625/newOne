'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/src/components/layout/Navbar";

export default function NavbarLogic() {
    const pathname = usePathname();

    // Pages jahan Navbar hide krna hai
    const hideNavbarRoutes = [
        "/auth/signup",                   // Step 1
        "/auth/setup/account",            // Step 2
        "/auth/setup/one-last-thing",     // Step 3
        "/auth/setup/profile",            // Step 4
        "/auth/setup/management",         // Step 5
        "/auth/setup/management-details", // Step 6
        "/auth/setup/source",             // Step 7
        "/auth/setup/team-members",       // Step 8
        "/auth/setup/board-name",         // Step 9
        "/auth/setup/columns",            // Step 10
        "/auth/setup/dashboard",          // Step 11
        "/auth/setup/view-layout",        // Step 12
        "/auth/setup/invite",             // Step 13
        "/workspace",
        "/templates"
    ];

    // Check if current path starts with /dashboard, /boards, /workspaces, /docs, OR /dashboards
    const isDashboardRoute =
        pathname?.startsWith('/dashboard') ||
        pathname?.startsWith('/boards') ||
        pathname?.startsWith('/workspaces') ||
        pathname?.startsWith('/docs') ||
        pathname?.startsWith('/dashboards');

    // Also check for the exact routes mapped from React
    const hideNavbar = hideNavbarRoutes.some(route => pathname === route) || isDashboardRoute;

    if (hideNavbar) return null;

    return <Navbar />;
}
