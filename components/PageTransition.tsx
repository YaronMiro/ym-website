"use client"

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from 'framer-motion';

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 0.4, duration: 0.25, ease: 'easeInOut' }
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    )
};

export default PageTransition;