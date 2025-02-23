import React from "react";
import { ReactSVG } from 'react-svg';

export type IconName = "head" | "app-code" | "cloud-shield" | "api" | "ui" | "cloud-balancer" | "bug-tracker" | "todo-list";


interface YmIconProps {
    icon: IconName;
    className: string;
}

export const iconsMapping: { [key in IconName]: string}  = {
    "head": "ym-icon-head.svg",
    "app-code": "ym-icon-app-code.svg",
    "cloud-shield": "ym-cloud-shield.svg",
    "api": "ym-api.svg",
    "ui": "ym-ui.svg",
    "cloud-balancer": "ym-cloud-balancer.svg",
    "bug-tracker": "ym-bug-tracker.svg",
    "todo-list": "ym-todo-list.svg",
};

const YmIcon: React.FC<YmIconProps> = ({ className, icon }) => {
    return (
        <div>
            {}
            <ReactSVG
                src={`/icons/${iconsMapping[icon]}`}
                className={className}
            />
        </div>
    );
};

export default YmIcon;