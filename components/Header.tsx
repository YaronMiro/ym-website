import * as React from "react"
import MobileNav from '@/components/MobileNav';
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";

const Header: React.FC = () => {
    return (
        <header className="relative mb-14 pb-10 pt-8 text-white">
            {/* <div className="gradient-top"></div> */}
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo className="text-6xl" />
                    <div className="flex xl:hidden"><MobileNav /></div>
                    <div className="hidden xl:flex"><Nav /></div>
                </div>
                {/* <div className="h-[1px] flex-1 bg-white/20 -mx-48 mt-10"></div> */}
            </div>
        </header>
    );
};

export default Header;

