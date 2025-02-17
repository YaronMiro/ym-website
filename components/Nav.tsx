"use client"

import * as React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
   {
        name: 'home',
        path: '/',
   },
   {
        name: 'resume',
        path: '/resume',
   },
];


const Nav: React.FC = () => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map(({name, path}) => {
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
    );
};



export default Nav;