"use client"

import React, { useEffect } from "react"

interface BackgroundParticlesProps {
    className?: string;
    iconStyles?: string;
}

const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ className }) => {
    
    return (
        <div className={`${className}`}>
            <div className="relative">
                <div className="left-bg-fade absolute top-0 bottom-0 left-0 right-0 z-50"></div>
                <div id="particles-js" className="w-full h-full"></div>
            </div>
        </div>
    );
};

export default BackgroundParticles;
