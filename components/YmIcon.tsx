import React from "react";
import { ReactSVG } from 'react-svg';


interface YmIconProps {
    icon?: string;
    className: string;
}

const YmIcon: React.FC<YmIconProps> = ({ className, icon = '' }) => {
    return (
        <div>
            {}
            <ReactSVG
                src="/ym-icon-head.svg"
                className={className}
            />
        </div>
    );
};

export default YmIcon;