import * as React from "react"
import ResumeButtonDownload from "@/components/ResumeButtonDownload";
import Social from "@/components/Social";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="mt-8 py-12">
            <div className="container mx-auto">
                <div className="h-[1px] bg-white/20 w-full z-50"></div>
                <div className="flex xl:flex-col items-center xl:items-start mt-12 xl:mt-0">
                    <div className="flex justify-between w-full">
                        <ResumeButtonDownload className="xl:hidden" />
                        <Social className="flex gap-4 xl:gap-5" iconStyles="text-3xl" />
                    </div>
                </div>
                <div className="flex justify-between xl:justify-start gap-3 mt-10 xl:mt-6 text-white/70" >
                    <Link href="mailto:yaron.miro@gmail.com" className="group hover:text-white/80">
                        <span className="font-semibold text-secondary group-hover:text-secondary-hover">Email: </span>yaron.miro@gmail.com
                    </Link>
                    <span className="text-white/50">|</span>
                    <Link href="tel:+972--544297621" className="group hover:text-white/80">
                        <span className="font-semibold text-secondary group-hover:text-secondary-hover">Phone: </span>+972-544297621
                    </Link>
                </div>
            </div>  
        </footer>
    );
};

export default Footer;