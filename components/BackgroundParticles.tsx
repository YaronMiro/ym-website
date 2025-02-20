import * as React from "react"
import Image from 'next/image'
import pDemo from '@/public/p-demo.png'

interface BackgroundParticlesProps {
    className?: string;
    iconStyles?: string;
}


const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ className }) => {
    return (
        <Image
            className={` ${className}`}
            src={pDemo}
            width={500}
            height={500}
            alt="Image of Yaron Miro"
        />
    );
};

export default BackgroundParticles;
