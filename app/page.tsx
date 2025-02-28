"use client"

import React from "react";
import Image from 'next/image'
import { BsCodeSlash } from "react-icons/bs";
import Link from "next/link";
import Social from "@/components/Social";
import ParticlesContainer from '@/components/ParticlesContainer'
import heroImage from '@/public/hero-image.webp'
import HeroIcons from "@/components/HeroIcons";
import ResumeButtonDownload from "@/components/ResumeButtonDownload";

const Home: React.FC = () => {
  return (
    <>
      <div className="container pb-36 pt-20">
        <main className="relative flex flex-col xl:flex-row items-center xl:items-stretch px-4">
          {/* hero section */}
          <div className="flex flex-col justify-center w-full">
            <div>
              {/* main Title */}
              <h1 className="flex flex-col font-semibold">
                <span className="text-5xl text-white/70">Hello I&apos;m</span>
                <span className="mt-2 text-7xl text-secondary">Yaron Miro</span>
              </h1>
              {/* role */}
              <div className="flex items-center mt-16 gap-3">
                <span className="text-accent text-3xl">Senior Fullstack Developer</span>
                <BsCodeSlash role="img" aria-label="developer icon" className="rounded-full p-[4px] w-[30px] h-[30px] border border-secondary text-secondary" />
              </div>
              <div className="xl:max-w-[500px] mt-3 leading-8 text-white/70 text-[1.1rem]">
                <p>
                  With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies.
                </p>
                <p className="mt-4">
                  Experienced in cloud technologies, DevOps, AI integration, and have a strong eye for design, all while consistently delivering high-quality, reliable software efficiently.
                </p>
              </div>
            </div>
          </div>
          {/* Image and particles */}
          <div className="relative flex justify-end w-full pr-12">
            <div className="relative">
              <Image
                className="w-auto h-auto xl:h-[570px]"
                src={heroImage}
                alt="Image of Yaron Miro"
              />
              {/* Fade bottom */}
              <div className="absolute bottom-[0] right-0 left-0 h-[20%] bg-gradient-to-b from-transparent to-primary"></div>
            </div>
            <ParticlesContainer className="absolute bottom-10 top-0 xl:top-[-100px] right-0 xl:right-[-50px] left-0 z-[-9999]" />
          </div>
        </main>
        <div className="flex mt-12 justify-center">
          {/* Icons */}
          <HeroIcons iconColor="stroke-secondary" arrowColor="text-accent/70" />
        </div>
        {/* <div className="h-[1px] flex-1 bg-white/20 mt-16"></div> */}
        <div className="flex justify-between gap-12 mt-20">
          <div className="flex justify-between xl:justify-start gap-3 text-white/70 leading-8" >
            <Link href="mailto:yaron.miro@gmail.com" className="group hover:text-white/80">
              <span className="font-semibold text-accent group-hover:text-secondary-hover">Email: </span>yaron.miro@gmail.com
            </Link>
            <span className="text-secondary">|</span>
            <Link href="tel:+972--544297621" className="group hover:text-white/80">
              <span className="font-semibold text-accent group-hover:text-secondary-hover">Phone: </span>+972-544297621
            </Link>
          </div>
          <Social className="flex gap-4 xl:gap-5" iconStyles="text-[2rem]" />
        </div>
      </div>
    </>
  );
};

export default Home;