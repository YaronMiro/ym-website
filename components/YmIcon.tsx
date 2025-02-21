import React from "react";
import { ReactSVG } from 'react-svg';


interface YmIconProps {
    icon: "head" | "app-code"
    className: string;
}

const iconsMapping = {
    "head": "ym-icon-head.svg",
    "app-code": "ym-icon-app-code.svg",
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