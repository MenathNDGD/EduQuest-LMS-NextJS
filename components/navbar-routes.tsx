"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, UserIcon } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {

    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isCoursePage = pathname?.includes("/courses");
    const isSearchPage = pathname === '/search';

    return (
        <>
        {isSearchPage && (
            <div className="hidden md:block">
                <SearchInput />
            </div>
        )}
        <div className="flex justify-end gap-x-2 w-full">
            {isTeacherPage || isCoursePage ? (
                <Link href="/">
                    <Button size="sm">
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                    <Button size="sm">
                        <UserIcon className="h-4 w-4 mr-2" />
                        Teacher Mode
                    </Button>
                </Link>
            )}
            <UserButton 
                afterSignOutUrl="/" 
            />
        </div>
        </>
    );
}