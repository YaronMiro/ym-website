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
                           <div className="flex items-center">
                                <div className={`flex justify-center border border-accent rounded-full p-2 items-center bg-primary text-accent/70 text-xl group-hover:bg-accent/70 group-hover:text-primary ${iconStyles}`}
                                >
                                    {icon}
                                </div>
                                <span className="flex capitalize ml-2 text-accent/70 group-hover:text-accent-hover">
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
