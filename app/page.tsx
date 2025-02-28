"use client"

import React from "react";
import Image from 'next/image'
import { BsCodeSlash } from "react-icons/bs";
import ParticlesContainer from '@/components/ParticlesContainer'
import heroImage from '@/public/hero-image.webp'
import HeroIcons from "@/components/HeroIcons";
import ResumeButtonDownload from "@/components/ResumeButtonDownload";

const Home: React.FC = () => {
  return (
    <>
      <div className="container pt-10 xl:pt-20">
        <main className="relative flex flex-col xl:flex-row items-center xl:items-stretch">
          {/* hero section */}
          <div className="flex flex-col justify-center xl:w-full">
            <div className="max-w-none lg:max-w-[750px]">
              {/* main Title */}
              <h1 className="flex flex-col font-semibold">
                <span className="text-5xl text-secondary">Hello I&apos;m</span>
                <span className="text-[5rem] leading-[1.2] text-white/70">Yaron Miro</span>
              </h1>
              {/* role */}
              <div className="flex items-center mt-10 gap-3">
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
          <div className="relative flex justify-center xl:justify-end w-full mt-24 xl:mt-0">
            <div className="relative">
              <Image
                className="w-auto h-auto lg:h-[570px]"
                src={heroImage}
                alt="Image of Yaron Miro"
              />
              {/* Fade bottom */}
              <div className="absolute bottom-[0] right-0 left-0 h-[20%] bg-gradient-to-b from-transparent to-primary"></div>
            </div>
            <ParticlesContainer className="absolute bottom-10 top-0 xl:top-[-100px] right-0 xl:right-[-50px] left-0 z-[-9999]" />
          </div>
        </main>
        <div className="flex mt-8 xl:mt-12 justify-center">
          <HeroIcons iconColor="stroke-secondary" arrowColor="text-accent/70" />
        </div>
      </div>
    </>
  );
};

export default Home;