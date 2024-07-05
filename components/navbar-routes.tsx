"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {

    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");

    return (
        <div className="flex justify-end gap-x-2 w-full">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                    <Button size="sm">
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm">
                        Teacher Mode
                    </Button>
                </Link>
            )}
            <UserButton 
                afterSignOutUrl="/" 
            />
        </div>
    );
}