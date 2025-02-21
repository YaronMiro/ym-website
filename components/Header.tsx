import * as React from "react"

import Link from "next/link";
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Logo from "@/components/Logo";


const Header: React.FC = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
               <Logo className="text-6xl" />

                {/* Desktop nav & Contact me button */}
               <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Button size="xs">
                        <span>Download CV</span>
                        <FiDownload className="ml-3 text-[18px]" />
                    </Button>
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
