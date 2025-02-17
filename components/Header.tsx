import * as React from "react"

import Link from "next/link";
import { Button } from '@/components/ui/button';
import Nav from '@/components/Nav';


const Header: React.FC = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Yaron Miro <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop nav & Contact me button */}
               <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className="bg-primary-foreground hover:bg-primary-hover text-white">Contact me</Button>
                    </Link>
               </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </header>
    );
};

export default Header;
