import * as React from "react"

import { IoIosArrowRoundForward } from "react-icons/io";
import YmIcon, { IconName } from "@/components/YmIcon";

interface HeroIconsProps {
    iconColor: string;
    arrowColor: string;
}

interface IconData {
    name: IconName;
    arrowDirection?: string | null;
}

export const icons: IconData[] = [
    { name: "head", arrowDirection: "rotate-0" },
    { name: "app-code", arrowDirection: "-rotate-45" },
    { name: "cloud-shield", arrowDirection: "rotate-45" },
    { name: "api", arrowDirection: "rotate-0" },
    { name: "ui", arrowDirection: "-rotate-45" },
    { name: "cloud-balancer", arrowDirection: "rotate-45" },
    { name: "bug-tracker", arrowDirection: "rotate-0" },
    { name: "todo-list", arrowDirection: "-rotate-45" },
];

const HeroIcons: React.FC<HeroIconsProps> = ({ iconColor, arrowColor }) => {
    return (
        <div className={`${iconColor} grid grid-cols-4 md:grid-cols-8 gap-x-2 xl:gap-x-3 gap-y-5 xl:gap-y-0`}>
            {icons.map(({ name, arrowDirection}) => {
                return (
                    <div key={name} className="flex items-center">
                        <YmIcon className="w-[3rem] xl:w-[2.5rem]" icon={name} />
                        <IoIosArrowRoundForward className={`ml-2 xl:ml-3 text-3xl ${arrowColor} ${arrowDirection}`} />
                    </div>
                )
            }) }
        </div>
    );
};

export default HeroIcons;
