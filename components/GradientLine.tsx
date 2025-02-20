import React from "react";

import { cn } from "@/lib/utils"


interface GradientLineProps {
    className?: string;
    orientation?: "horizontal" | "vertical";
    direction?: "left" | "right" | "top" | "bottom";
}

const GradientLine: React.FC<GradientLineProps> = ({ orientation = "horizontal", direction = "left", className }) => {
    const isVertical = orientation === "vertical";

    const directionMap = {
        top: "t",
        right: "r",
        bottom: "b",
        left: "l",
    }

    return (
        <div
            className={`${isVertical
                ? `h-32 w-[2px] bg-gradient-to-${directionMap[direction]} from-white to-transparent`
                : `h-[2px] bg-gradient-to-${directionMap[direction]} from-white to-transparent`
                }` + ` ${className}`
            }
        />
    );
};

export default GradientLine;