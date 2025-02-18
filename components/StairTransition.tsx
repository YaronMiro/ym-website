"use client"

import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from 'framer-motion';
import Stairs from "./Stairs";

const StairTransition: React.FC = () => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathName}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex" >
                    <Stairs />
                </div>
            </div>
        </AnimatePresence>
    )
};

export default StairTransition;