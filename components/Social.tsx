import * as React from "react"
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";

interface SocialProps {
    className?: string;
    iconStyles?: string;
}


const socials = [
    { name: 'github', icon: <FaGithub />, path: "https://github.com/YaronMiro?tab=repositories&q=&type=&language=&sort=stargazers"},
    { name: "linkedin", icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/yaronmiro/"},
    { name: "behance", icon: <FaBehance />, path: "https://www.behance.net/gallery/49574621/All"},
]

const Social: React.FC<SocialProps> = ({ className, iconStyles }) => {
    return (
        <div className={className}>
            {
                socials.map(({ name, icon, path }) => {
                    return (
                        <Link
                            className="group flex items-center"
                            key={name}
                            href={path}
                        >
                           <div className="flex items-center gap-1">
                                <div className={`flex justify-center items-center rounded-full w-10 h-10 border border-accent bg-primary text-accent text-base group-hover:bg-accent-hover group-hover:transition-all duration-1000 ease-in-out ${iconStyles}`}
                                >
                                    {icon}
                                </div>
                                <span className="hidden xl:flex capitalize ml-1 underline text-accent group-hover:text-accent-hover group-hover:transition-all duration-1000 ease-in-out">
                                    {name}
                                </span>
                           </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Social;
