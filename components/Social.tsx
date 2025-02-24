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
                            target="_blank"
                        >
                           <div className="flex items-center">
                                <div className={`flex justify-center rounded-full p-2 items-center bg-accent text-primary group-hover:bg-accent-hover group-hover:text-primary ${iconStyles}`}>
                                    {icon}
                                </div>
                                <span className="hidden xl:inline-block underline1 underline-offset-4 text-[1rem] capitalize ml-3 text-white/70 group-hover:text-white/80">
                                    {/* {name} */}
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
