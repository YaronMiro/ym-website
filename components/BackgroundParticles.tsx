"use client"

import React, { useEffect } from "react"

interface BackgroundParticlesProps {
    className?: string;
    iconStyles?: string;
}

// interface ParticlesConfig {
//     particles: {
//         number: {
//             value: number;
//             density: {
//                 enable: boolean;
//                 value_area: number;
//             };
//         };
//         color: {
//             value: string;
//         };
//         shape: {
//             type: string;
//             stroke: {
//                 width: number;
//                 color: string;
//             };
//             polygon: {
//                 nb_sides: number;
//             };
//             image: {
//                 src: string;
//                 width: number;
//                 height: number;
//             };
//         };
//         opacity: {
//             value: number;
//             random: boolean;
//             anim: {
//                 enable: boolean;
//                 speed: number;
//                 opacity_min: number;
//                 sync: boolean;
//             };
//         };
//         size: {
//             value: number;
//             random: boolean;
//             anim: {
//                 enable: boolean;
//                 speed: number;
//                 size_min: number;
//                 sync: boolean;
//             };
//         };
//         line_linked: {
//             enable: boolean;
//             distance: number;
//             color: string;
//             opacity: number;
//             width: number;
//         };
//         move: {
//             enable: boolean;
//             speed: number;
//             direction: string;
//             random: boolean;
//             straight: boolean;
//             out_mode: string;
//             bounce: boolean;
//             attract: {
//                 enable: boolean;
//                 rotateX: number;
//                 rotateY: number;
//             };
//         };
//     };
//     interactivity: {
//         detect_on: string;
//         events: {
//             onhover: {
//                 enable: boolean;
//                 mode: string;
//             };
//             onclick: {
//                 enable: boolean;
//                 mode: string;
//             };
//             resize: boolean;
//         };
//         modes: {
//             grab: {
//                 distance: number;
//                 line_linked: {
//                     opacity: number;
//                 };
//             };
//             bubble: {
//                 distance: number;
//                 size: number;
//                 duration: number;
//                 opacity: number;
//                 speed: number;
//             };
//             repulse: {
//                 distance: number;
//                 duration: number;
//             };
//             push: {
//                 particles_nb: number;
//             };
//         };
//     };
//     retina_detect: boolean;
// }

const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ className }) => {
    useEffect(() => {
        // const config: ParticlesConfig = {
        //     particles: {
        //         number: {
        //             value: 80,
        //             density: {
        //                 enable: true,
        //                 value_area: 800,
        //             },
        //         },
        //         color: {
        //             value: "#ffffff",
        //         },
        //         shape: {
        //             type: "circle",
        //             stroke: {
        //                 width: 0,
        //                 color: "#000000",
        //             },
        //             polygon: {
        //                 nb_sides: 5,
        //             },
        //             image: {
        //                 src: "img/github.svg",
        //                 width: 100,
        //                 height: 100,
        //             },
        //         },
        //         opacity: {
        //             value: 0.5,
        //             random: false,
        //             anim: {
        //                 enable: false,
        //                 speed: 1,
        //                 opacity_min: 0.1,
        //                 sync: false,
        //             },
        //         },
        //         size: {
        //             value: 10,
        //             random: true,
        //             anim: {
        //                 enable: false,
        //                 speed: 80,
        //                 size_min: 0.1,
        //                 sync: false,
        //             },
        //         },
        //         line_linked: {
        //             enable: true,
        //             distance: 300,
        //             color: "#ffffff",
        //             opacity: 0.4,
        //             width: 2,
        //         },
        //         move: {
        //             enable: true,
        //             speed: 12,
        //             direction: "none",
        //             random: false,
        //             straight: false,
        //             out_mode: "out",
        //             bounce: false,
        //             attract: {
        //                 enable: false,
        //                 rotateX: 600,
        //                 rotateY: 1200,
        //             },
        //         },
        //     },
        //     interactivity: {
        //         detect_on: "canvas",
        //         events: {
        //             onhover: {
        //                 enable: false,
        //                 mode: "repulse",
        //             },
        //             onclick: {
        //                 enable: true,
        //                 mode: "push",
        //             },
        //             resize: true,
        //         },
        //         modes: {
        //             grab: {
        //                 distance: 800,
        //                 line_linked: {
        //                     opacity: 1,
        //                 },
        //             },
        //             bubble: {
        //                 distance: 800,
        //                 size: 80,
        //                 duration: 2,
        //                 opacity: 8,
        //                 speed: 3,
        //             },
        //             repulse: {
        //                 distance: 400,
        //                 duration: 0.4,
        //             },
        //             push: {
        //                 particles_nb: 4,
        //             },
        //         },
        //     },
        //     retina_detect: true,
        // };

        // Initialize particles.js with the given configuration
        window.particlesJS.load("particles-js", '/particlesjs-config.json');

        // Cleanup when the component unmounts
        return () => {
            if (window.particlesJS) {
                delete window.particlesJS;
            }
        };
    }, []);
    
    return (
        <div className={`${className}`}>
            <div className="relative">
                <div className="right-bg-fade absolute top-0 bottom-0 left-0 right-0 z-50"></div>
                <div className="bottom-bg-fade absolute top-0 bottom-0 left-0 right-0 z-50"></div>
                <div className="left-bg-fade absolute top-0 bottom-0 left-0 right-0 z-50"></div>
                <div id="particles-js" className="w-full h-full"></div>
            </div>
        </div>
    );
};

export default BackgroundParticles;
