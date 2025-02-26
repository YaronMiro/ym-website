"use client"

import React from "react";
import Image from 'next/image'
import { BsCodeSlash } from "react-icons/bs";
import Link from "next/link";
import Social from "@/components/Social";
import ParticlesContainer from '@/components/ParticlesContainer'
import heroImage from '@/public/hero-image-1.png'
import polygonBackground from '@/public/polygon-background.png'
import HeroIcons from "@/components/HeroIcons";
import ResumeButtonDownload from "@/components/ResumeButtonDownload";

const Home: React.FC = () => {
  return (
  <>
    <div className="container pb-36 pt-20">
        <main className="flex flex-col xl:flex-row items-center xl:items-stretch px-4">
        {/* hero section */}
        <div className="flex flex-col justify-between">
          <div>
              {/* main Title */}
              <h1 className="flex flex-col font-semibold">
                <span className="text-5xl text-white/70">Hello I&apos;m</span>
                <span className="mt-2 text-7xl text-accent">Yaron Miro</span>
              </h1>
              {/* role */}
              <div className="flex items-center mt-12 gap-3">
                <span className="text-secondary text-3xl">Senior Fullstack Developer</span>
                <BsCodeSlash role="img" aria-label="developer icon" className="rounded-full p-[4px] w-[30px] h-[30px] border border-accent text-accent" />
              </div>
              {/* description */}
              <div className="xl:max-w-[500px] mt-3 leading-8 text-white/70 text-[1.1rem]">
                <p>
                  With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies.
                </p>
                <p className="mt-4">
                  Experienced in cloud technologies, DevOps, AI integration, and have a strong eye for design, all while consistently delivering high-quality, reliable software efficiently.
                </p>
              </div>
          </div>
          <div className="mt-24">
              {/* social links and resume download */}
              <div className="flex xl:flex-col items-center xl:items-start mt-12 xl:mt-0">
                <div className="flex justify-between w-full">
                  <ResumeButtonDownload className="xl:hidden" />
                  <Social className="flex gap-4 xl:gap-5" iconStyles="text-3xl" />
                </div>
              </div>
              {/* contact info */}
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
        </div>
        {/* Image and particles */}
        <div className="relative flex flex-1 items-end justify-end mt-12 xl:mt-0 mb-8 xl:mb-0">
            <ParticlesContainer className="absolute bottom-10 top-0 xl:top-[-100px] right-0 xl:right-[-50px] left-0 z-[-9999]" />
            <div className="relative">
              <Image
                className="w-auto h-auto xl:h-[650px]"
                src={heroImage}
                alt="Image of Yaron Miro"
              />
              {/* Fade bottom */}
              <div className="absolute bottom-[0] right-0 left-0 h-[20%] bg-gradient-to-b from-transparent to-primary"></div>
            </div>
        </div>
      </main>
        <div className="flex justify-between items-stretch gap-8 mt-6">
          <div className="h-[2px] flex-1 bg-white/20 mt-16"></div>
          <footer className="flex justify-center bg-primary mt-8">
            {/* Icons */}
            <HeroIcons iconColor="stroke-white/20" arrowColor="text-accent/45" />
          </footer>
          <div className="h-[2px] flex-1 bg-white/20 mt-16"></div>
        </div>
      </div>
    </>
  );
};

export default Home;