import * as React from "react"

import Link from "next/link";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Link href="/">
            <h1 className={`logo ${className}`}>
                YM<span className="text-accent">.</span>
            </h1>
        </Link>
    );
};

export default Logo;
