import * as React from "react"
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialProps {
    className?: string;
    iconStyles?: string;
}


const socials = [
    { id: 'github', icon: <FaGithub />, path: "https://github.com/YaronMiro?tab=repositories&q=&type=&language=&sort=stargazers"},
    { id: "linkedin", icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/yaronmiro/"},
]

const Social: React.FC<SocialProps> = ({ className, iconStyles }) => {
    return (
        <div className={className}>
            {
                socials.map(({ id, icon, path }) => {
                    return (
                        <Link
                            key={id}
                            href={path}
                            className={`flex justify-center items-center border border-white/80 rounded-full w-10 h-10 text-accent text-base hover:bg-accent hover:text-primary hover:border-accent hover:transition-all duration-500 ${iconStyles}`}
                        >
                            {icon}
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Social;
