import * as React from "react"
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialProps {
    className?: string;
    iconStyles?: string;
}


const socials = [
    { name: 'github', icon: <FaGithub />, path: "https://github.com/YaronMiro?tab=repositories&q=&type=&language=&sort=stargazers"},
    { name: "linkedin", icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/yaronmiro/"},
]

const Social: React.FC<SocialProps> = ({ className, iconStyles }) => {
    return (
        <div className={className}>
            {
                socials.map(({ name, icon, path }) => {
                    return (
                        <Link
                            className="group flex items-center gap-2"
                            key={name}
                            href={path}
                        >
                           <div className="flex items-center gap-2">
                                <span className="hidden xl:flex w-[20px] h-[1px] bg-white mr-2 -rotate-45 group-hover:-rotate-0 group-hover:bg-accent group-hover:transition-all duration-1000 ease-in-out"></span>
                                <div className={`flex justify-center items-center rounded-full w-10 h-10 border border-gray-500 bg-gray-500 text-primary text-base ${iconStyles}`}
                                >
                                    {icon}
                                </div>
                                <span className="hidden xl:flex capitalize text-white">{name}</span>
                           </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Social;
