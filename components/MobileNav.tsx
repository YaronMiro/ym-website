"use client"

import * as React from "react"
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/navLinks";

const MobileNav: React.FC = () => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Yaron<span className="text-accent">.</span></h1>                    
                    </Link>
                </div>
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