import * as React from "react"
import Social from "@/components/Social";
import Link from "next/link";

const Footer: React.FC = () => {
    return (

        <footer className="my-14 pt-8">
            <div className="container mx-auto">
                <div className="h-[1px] flex-1 bg-white/20"></div>
                <div className="flex flex-col md:flex-row-reverse md:justify-between gap-4 md:gap-0 mt-8">
                    <Social className="flex gap-4 xl:gap-5" iconStyles="text-3xl" />
                    <div className="flex justify-between xl:justify-start gap-3 text-white/70 leading-8">
                        <Link href="mailto:yaron.miro@gmail.com" className="group hover:text-white">
                            <span className="font-semibold text-accent group-hover:text-accent-hover">Email: </span>yaron.miro@gmail.com
                        </Link>
                        <span className="text-secondary">|</span>
                        <Link href="tel:+972--544297621" className="group hover:text-white/80">
                            <span className="font-semibold text-accent group-hover:text-accent-hover">Phone: </span>+972-544297621
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;