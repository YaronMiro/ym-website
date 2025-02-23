import * as React from "react"

import { IoIosArrowRoundForward } from "react-icons/io";
import YmIcon, { IconName } from "@/components/YmIcon";

interface HeroIconsProps {
    color: string;
    className?: string;
}

interface IconData {
    name: IconName;
    arrowDirection: string;
}

export const icons: IconData[] = [
    { name: "head", arrowDirection: "" },
    { name: "app-code", arrowDirection: "-rotate-45" },
    { name: "cloud-shield", arrowDirection: "rotate-45" },
    { name: "api", arrowDirection: "" },
    { name: "ui", arrowDirection: "-rotate-45" },
    { name: "cloud-balancer", arrowDirection: "rotate-45" },
    { name: "bug-tracker", arrowDirection: "" },
    { name: "todo-list", arrowDirection: "-rotate-45" },
];

const HeroIcons: React.FC<HeroIconsProps> = ({ color, className }) => {
    return (
        <div className={`${color} grid grid-cols-4 gap-4 xl:grid-cols-8 xl:gap-2 ${className}`}>
            {icons.map(({ name, arrowDirection}) => {
                return (
                    <div key={name} className="flex items-center justify-center gap-2">
                        <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon={name} />
                        <IoIosArrowRoundForward className={`text-2xl text-secondary/80 ${arrowDirection}`} />
                    </div>
                )
            }) }
        </div>
    );
};

export default HeroIcons;
