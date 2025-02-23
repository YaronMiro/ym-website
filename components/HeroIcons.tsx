import * as React from "react"

import { IoIosArrowRoundForward } from "react-icons/io";
import YmIcon, { IconName } from "@/components/YmIcon";

interface HeroIconsProps {
    color: string;
}

interface IconData {
    name: IconName;
    arrowDirection?: string | null;
}

export const icons: IconData[] = [
    { name: "head", arrowDirection: "" },
    { name: "app-code", arrowDirection: "-rotate-45" },
    { name: "cloud-shield", arrowDirection: "rotate-45" },
    { name: "api", arrowDirection: "" },
    { name: "ui", arrowDirection: "-rotate-45" },
    { name: "cloud-balancer", arrowDirection: "rotate-45" },
    { name: "bug-tracker", arrowDirection: "" },
    { name: "todo-list", arrowDirection: null },
];

const HeroIcons: React.FC<HeroIconsProps> = ({ color }) => {
    return (
        <div className={`${color} grid grid-cols-4 md:grid-cols-8 gap-y-5 xl:gap-y-0`}>
            {icons.map(({ name, arrowDirection}, index) => {
                const itemPosition = (index + 1);

                return (
                    <div key={name} className="flex items-center justify-items-start">
                        <YmIcon className="w-[3rem]" icon={name} />
                        {arrowDirection !== null && <IoIosArrowRoundForward className={`text-3xl text-secondary/60 mx-3 ${arrowDirection} ${itemPosition === 4 && 'hidden sm:block'}`} />}
                    </div>
                )
            }) }
        </div>
    );
};

export default HeroIcons;
