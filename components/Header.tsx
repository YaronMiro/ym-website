import * as React from "react"
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Header: React.FC = () => {
    return (
        <header className="mb-8 xl:mb-20 py-12 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo className="text-6xl" />
                    <div className="flex gap-8">
                        <div className="hidden xl:flex items-center gap-8"><Nav /></div>
                        <Button
                            size="xs"
                            className="hidden xl:flex items-center uppercase gap-2"
                        >
                            <span>Download CV</span>
                            <FiDownload className="text-xl" />
                        </Button>
                    </div>
                    <div className="xl:hidden"><MobileNav /></div>
                </div>
            </div>
        </header>
    );
};

export default Header;