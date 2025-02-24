"use client"

import * as React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/navLinks";

const Nav: React.FC = () => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8 text-white/70">
            {NAV_LINKS.map(({name, path}) => {
                return (
                    <Link
                        className={`${
                            path === pathName && "text-accent-hover border-b-2 border-accent-hover"
                            } capitalize font-medium hover:text-accent-hover transition-all
                        `}
                        href={path}
                        key={name}
                    >
                        {name}
                    </Link>
                )
        })}
        </nav>
    );
};



export default Nav;