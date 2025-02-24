"use client"

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from '@/components/ParticlesContainer/options';


interface ParticlesContainerProps {
    className?: string;
    iconStyles?: string;
}

const ParticlesContainer: React.FC<ParticlesContainerProps> = ({ className }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => (particlesOptions),
        [],
    );

    if (init) {
        return (
            <div className={`${className}`}>
                <div className="relative w-full h-full">
                    {/* top fade */}
                    <div className="absolute top-0 right-0 left-0 h-[10%] bg-gradient-to-t from-transparent to-primary"></div>
                    {/* right fade */}
                    <div className="absolute top-0 right-0 bottom-0 w-[20%] bg-gradient-to-r from-transparent to-primary"></div>
                    {/* bottom fade */}
                    <div className="absolute bottom-0 right-0 left-0 h-[10%] bg-gradient-to-b from-transparent to-primary"></div>
                    {/* Left fade */}
                    <div className="absolute top-0 left-0 bottom-0 w-[10%] bg-gradient-to-l from-transparent to-primary"></div>
                    <Particles
                        className="h-full"
                        id="tsparticles"    
                        options={options}
                    />
                </div>
            </div>
        );
    }

    return <></>;
    
    
    
};

export default ParticlesContainer;
