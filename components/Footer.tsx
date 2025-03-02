import * as React from "react"
import Social from "@/components/Social";
import Link from "next/link";

const Footer: React.FC = () => {
    return (

        <footer className="my-14 pt-8">
            <div className="container mx-auto">
                <div className="h-[1px] flex-1 bg-white/20"></div>
                <div className="flex justify-center md:justify-start">
                    <div className="inline-flex w-auto md:w-full md:flex flex-col md:flex-row-reverse md:justify-between gap-4 md:gap-0 mt-8">
                        <Social className="flex gap-4 xl:gap-5" iconStyles="text-3xl" />
                        <div className="flex gap-3 flex-col md:flex-row text-white/70 mt-2 md:mt-0 md:leading-8">
                            <Link href="mailto:yaron.miro@gmail.com" className="flex flex-col md:flex-row group hover:text-white">
                                <span className="font-semibold text-accent group-hover:text-accent-hover">Email </span>
                                <span>yaron.miro@gmail.com</span>
                            </Link>
                            <span className="hidden md:flex text-secondary">|</span>
                            <Link href="tel:+972--544297621" className="flex flex-col md:flex-row group hover:text-white/80">
                                <span className="font-semibold text-accent group-hover:text-accent-hover">Phone </span>
                                <span>+972-544297621</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;