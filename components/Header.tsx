import * as React from "react"
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Logo from "@/components/Logo";
import ResumeButtonDownload from "./ResumeButtonDownload";

const Header: React.FC = () => {
    return (
        <header className="mb-8 py-12 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo className="text-6xl" />
                    <div className="flex gap-8">
                        <div className="hidden xl:flex items-center gap-8"><Nav /></div>
                        <ResumeButtonDownload className="hidden xl:flex" />
                    </div>
                    <div className="xl:hidden"><MobileNav /></div>
                </div>
                <div className="h-[1px] bg-white/20 w-full mt-12"></div>
            </div>
        </header>
    );
};

export default Header;