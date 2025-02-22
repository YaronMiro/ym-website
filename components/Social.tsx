import * as React from "react"
import Link from "next/link";

import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa";

interface SocialProps {
    className?: string;
    iconStyles?: string;
}


const socials = [
    { name: 'github', icon: <FaGithub />, path: "https://github.com/YaronMiro?tab=repositories&q=&type=&language=&sort=stargazers"},
    { name: "linkedin", icon: <FaLinkedin />, path: "https://www.linkedin.com/in/yaronmiro/"},
    { name: "behance", icon: <FaBehanceSquare />, path: "https://www.behance.net/gallery/49574621/All"},
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
                                <div className={`flex justify-center items-center bg-primary text-accent/70 text-3xl group-hover:text-accent-hover group-hover:transition-all duration-1000 ease-in-out ${iconStyles}`}
                                >
                                    {icon}
                                </div>
                                <span className="flex capitalize underline underline-offset-4 ml-1 text-accent/70 group-hover:text-accent-hover group-hover:transition-all duration-1000 ease-in-out">
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
