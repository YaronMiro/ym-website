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
        <div className={`${iconColor} grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-2 gap-y-5 xl:gap-y-0`}>
            {icons.map(({ name, arrowDirection }) => {
                return (
                    <div key={name} className="flex items-center justify-between gap-2">
                        <YmIcon className="w-[3.5rem]" icon={name} />
                        <IoIosArrowRoundForward className={`text-4xl ${arrowColor} ${arrowDirection}`} />
                    </div>
                )
            })}
        </div>
    );
};

export default HeroIcons;
