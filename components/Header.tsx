import * as React from "react"
import MobileNav from '@/components/MobileNav';
import Logo from "@/components/Logo";

const Header: React.FC = () => {
    return (
        <header className="my-14 pb-8 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo className="text-6xl" />
                    <div><MobileNav /></div>
                </div>
            </div>
        </header>
    );
};

export default Header;