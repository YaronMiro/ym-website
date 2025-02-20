import * as React from "react"

import Link from "next/link";
import { Button } from '@/components/ui/button';
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Logo from "@/components/Logo";


const Header: React.FC = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
               <Logo className="text-5xl" />

                {/* Desktop nav & Contact me button */}
               <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    {/* <Link href="/contact">
                        <Button>Contact me</Button>
                    </Link> */}
               </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
