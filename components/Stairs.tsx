import React from "react";

import {Variants, motion} from 'framer-motion'


const stairAnimation: Variants = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

const totalSteps = 6;

const reverseIndex = (index: number) => {
    return totalSteps - index - 1;
}

const Stairs: React.FC = () => {
    return (
       <>
            {[...Array(6)].map((_, index) => {
                console.log(index);
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="h-full w-full bg-gray-950 relative"
                    />
                )
            })}
           
       </>
    );
};

export default Stairs;