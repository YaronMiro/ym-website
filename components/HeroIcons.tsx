import * as React from "react"

import { IoIosArrowRoundForward } from "react-icons/io";
import YmIcon, { iconsMapping } from "@/components/YmIcon";

interface HeroIconsProps {
    color: string;
    className?: string;
}

const HeroIcons: React.FC<HeroIconsProps> = ({ color, className }) => {
    return (
        <div className={`${color} grid grid-cols-4 gap-4 xl:grid-cols-8 xl:gap-2 ${className}`}>
            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="head" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="app-code" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80 -rotate-45" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="api" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80 rotate-45" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="ui" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="cloud-shield" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80 -rotate-45" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="cloud-balancer" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80 rotate-45" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="bug-tracker" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80" />
            </div>

            <div className="flex items-center justify-center gap-2">
                <YmIcon className="w-[2.5rem] xl:w-[3rem]" icon="todo-list" />
                <IoIosArrowRoundForward className="text-2xl text-secondary/80" />
            </div>
        </div>
    );
};

export default HeroIcons;
