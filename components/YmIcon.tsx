import React from "react";
import { ReactSVG } from 'react-svg';

export type IconName = "head" | "app-code" | "cloud-shield" | "api" | "ui" | "cloud-balancer" | "bug-tracker" | "todo-list";


interface YmIconProps {
    icon: IconName;
    className: string;
}

export const iconsMapping: { [key in IconName]: `ym-icon-${key}.svg` } = {
    "head": "ym-icon-head.svg",
    "app-code": "ym-icon-app-code.svg",
    "cloud-shield": "ym-icon-cloud-shield.svg",
    "api": "ym-icon-api.svg",
    "ui": "ym-icon-ui.svg",
    "cloud-balancer": "ym-icon-cloud-balancer.svg",
    "bug-tracker": "ym-icon-bug-tracker.svg",
    "todo-list": "ym-icon-todo-list.svg",
};

const YmIcon: React.FC<YmIconProps> = ({ className, icon }) => {
    return (
        <div>
            { }
            <ReactSVG
                src={`/icons/${iconsMapping[icon]}`}
                className={className}
            />
        </div>
    );
};

export default YmIcon;