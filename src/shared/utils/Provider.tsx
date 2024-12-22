"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useUser } from '@clerk/nextjs';

interface ProviderProps {
    children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
    const pathname = usePathname();
    const { isLoaded } = useUser();

    if (!isLoaded) {
        return null; // Wait until Clerk user data is loaded
    }

    // List of paths to render children without the sidebar
    const noSidebarPaths = [
        '/dashboard/new-email',
        '/',
        '/sign-up',
        '/sign-in',
        '/subscribe',
        '/success'
    ];

    if (noSidebarPaths.includes(pathname)) {
        return (
            <NextUIProvider>
                {children}
            </NextUIProvider>
        );
    }

    return (
        <NextUIProvider>
            <div className="w-full flex">
                <div className="w-[290px] h-screen overflow-y-scroll">
                    {/* Sidebar content */}
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </NextUIProvider>
    );
}
