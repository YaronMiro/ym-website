import { type ISourceOptions } from "@tsparticles/engine";


const options: ISourceOptions = {
    autoPlay: true,
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
        enable: false,
        zIndex: -1
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
        detectsOn: "window",
        modes: {
            push: {
                quantity: 200
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        }
    },
    manualParticles: [],
    particles: {
        bounce: {
            horizontal: {
                value: 1
            },
            vertical: {
                value: 1
            }
        },
        collisions: {
            absorb: {
                speed: 2
            },
            bounce: {
                horizontal: {
                    value: 1
                },
                vertical: {
                    value: 1
                }
            },
            enable: false,
            maxSpeed: 50,
            mode: "bounce",
            overlap: {
                enable: true,
                retries: 0
            }
        },
        color: {
            // @todo Fix using theme color
            value: ["#ffffff", "#2d6c5a"], // accent and secondary

        },
        effect: {
            close: true,
            fill: true,
            options: {},
            type: []
        },
        groups: {},
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            speed: 1,
            spin: {
                acceleration: 1,
                enable: true
            },
            straight: false,
        },
        number: {
            value: 30
        },
        opacity: {
            value: {
                min: 0.2,
                max: 0.5
            },
            animation: {
                count: 0,
                enable: true,
                speed: 0.1,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none"
            }
        },
        reduceDuplicates: false,
        shape: {
            close: true,
            fill: true,
            options: {},
            type: ["circle"]
        },
        size: {
            value: {
                min: 1,
                max: 4,
            },
            animation: {
                count: 0,
                enable: true,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none"
            }
        },
        stroke: {
            width: 0,
            color: {
                value: "#f4fffd",
            }
        },
        zIndex: {
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1
        },
        destroy: {
            bounds: {},
            mode: "none",
            split: {
                count: 1,
                factor: {
                    value: 3
                },
                rate: {
                    value: {
                        min: 4,
                        max: 9
                    }
                },
                sizeOffset: true,
                particles: {}
            }
        },
        roll: {
            darken: {
                enable: false,
                value: 0
            },
            enable: false,
            enlighten: {
                enable: false,
                value: 0
            },
            mode: "vertical",
            speed: 25
        },
        tilt: {
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
            },
            direction: "clockwise",
            enable: false
        },
        twinkle: {
            lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1
            },
            particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1
            }
        },
        wobble: {
            distance: 5,
            enable: false,
            speed: {
                angle: 50,
                move: 10
            }
        },
        life: {
            count: 0,
            delay: {
                value: 0,
                sync: false
            },
            duration: {
                value: 0,
                sync: false
            }
        },
        rotate: {
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
            },
            direction: "clockwise",
            path: false
        },
        orbit: {
            animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false
            },
            enable: false,
            opacity: 1,
            rotation: {
                value: 45
            },
            width: 1
        },
        links: {
            blink: false,
            color: {
                // @todo Fix using theme color
                value: "#2d6c5a" // accent
            },
            consent: false,
            distance: 150,
            enable: true,
            frequency: 350,
            opacity: 0.4,
            width: 1,
            warp: false
        },
        repulse: {
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1
        }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: [],
    motion: {
        disable: false,
        reduce: {
            factor: 4,
            value: true
        }
    }
}

export default options; 