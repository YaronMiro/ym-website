"use client"

import React from "react";
import Image from 'next/image'
import { FiDownload } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import ParticlesContainer from '@/components/ParticlesContainer'
import heroImage from '@/public/hero-image-2.png'
import HeroIcons from "@/components/HeroIcons";
import Link from "next/link";

const Home: React.FC = () => {
  return (
  <>
    <div className="container pb-36">
        <main className="flex flex-col xl:flex-row items-center xl:items-stretch xl:justify-between">
        {/* hero section */}
        <div className="flex flex-col justify-between">
          <div>
              {/* main Title */}
              <h1 className="flex flex-col font-semibold">
                <span className="text-5xl text-white/70">Hello I&apos;m</span>
                <span className="mt-2 text-7xl text-accent">Yaron Miro</span>
              </h1>
              {/* role */}
              <div className="flex items-center mt-20 gap-3">
                <span className="text-secondary text-3xl">Senior Fullstack Developer</span>
                <BsCodeSlash role="img" aria-label="developer icon" className="rounded-full p-[4px] w-[30px] h-[30px] border border-secondary text-secondary" />
              </div>
              {/* description */}
              <div className="max-w-[500px] mt-3 leading-8 text-white/70 text-[1.1rem]">
                <p>
                  With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies.
                </p>
                <p className="mt-4">
                  Experienced in cloud technologies, DevOps, AI integration, and have a strong eye for design, all while consistently delivering high-quality, reliable software efficiently.
                </p>
              </div>
          </div>
          <div className="mb-8">
              {/* social links and resume download */}
              <div className="flex xl:flex-col items-center xl:items-start mb-16 xl:mb-0 mt-12 xl:mt-0">
                <div className="flex justify-between items-center w-full">
                  <Social className="flex gap-5 w-full" iconStyles="text-base" />
                  <Button
                    size="xs"
                    className="xl:hidden flex items-center uppercase gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </div>
              </div>
              {/* contact info */}
              <div className="flex gap-3 mt-6 text-white/70" >
                <Link href="mailto:yaron.miro@gmail.com">
                  <span className="font-semibold text-secondary">Email: </span>yaron.miro@gmail.com
                </Link>
                <span className="text-white/50">|</span>
                <Link href="tel:+972--544297621">
                  <span className="font-semibold text-secondary">Phone: </span>+972-544297621
                </Link>
              </div>
          </div>
        </div>
        {/* Image and particles */}
        <div className="relative flex justify-center">
          <ParticlesContainer className="absolute bottom-10 w-full h-full z-[-9999] xl:right-0 xl:left-0" />
          <Image
            className="max-h-[600px] w-auto h-auto xl:h-[600px] px-8 xl:pr-28 xl:px-0 xl:mt-56"
            src={heroImage}
            alt="Image of Yaron Miro"
          />
        </div>
      </main>
        <footer className="">
          {/* Icons */}
          <div className="h-[1px] bg-white/20 w-full"></div>
          <div className="flex justify-center my-7 z-50">
            <HeroIcons iconColor="stroke-white/50" arrowColor="text-accent/55" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;