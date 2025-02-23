"use client"

import * as React from "react"
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/navLinks";
import Logo from "@/components/Logo";

const MobileNav: React.FC = () => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-5xl text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                    <Logo className="mt-28 mb-16 text-center text-5xl" />
                <nav className="flex flex-col justify-center items-center gap-8">
                    {NAV_LINKS.map(({name, path}) => {
                        return (
                            <Link
                                className={`${
                                    path === pathName && "text-accent border-b-2 border-accent"
                                    } capitalize font-medium hover:text-accent transition-all
                                `}
                                href={path}
                                key={name}
                            >
                                {name}
                            </Link>
                        )
                })}
                </nav>
            </SheetContent>
        </Sheet>
       
    );
};



export default MobileNav;