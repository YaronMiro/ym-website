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
      <div className="container pt-6 xl:pt-16">
        <main className="relative flex flex-col xl:flex-row items-center xl:items-start">
          {/* hero section */}
          <div className="flex flex-col justify-center xl:w-full">
            <div className="max-w-[600px] md:max-w-[650px]">
              {/* main Title */}
              <h1 className="flex flex-col font-semibold">
                <span className="text-5xl text-secondary">Hello I&apos;m</span>
                <span className="text-[5rem] leading-[1.2] text-white/70">Yaron Miro</span>
              </h1>
              {/* role */}
              <div className="flex items-center mt-10 gap-3">
                <span className="text-accent text-[1.7rem]">Senior Full Stack Developer</span>
                <BsCodeSlash role="img" aria-label="developer icon" className="rounded-full p-[4px] w-[35px] h-[35px] border border-secondary text-secondary" />
              </div>
              <div className="xl:max-w-[500px] mt-3 leading-8 text-white/70 text-[1.1rem]">
                <p>
                  With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies.
                </p>
                <p className="mt-4">
                  Experienced in cloud technologies, DevOps, AI integration, and have a strong eye for design, all while consistently delivering high-quality, reliable software efficiently.
                </p>
                <ResumeButtonDownload className="mt-10" />
              </div>
            </div>
          </div>
          {/* Image and particles */}
          <div className="relative flex justify-center xl:justify-end w-full pt-24 xl:pt-0 mt-12 xl:mt-0 xl:pr-28">
            <div className="relative">
              <Image
                className="h-[450px] sm:h-[570px] w-auto"
                src={heroImage}
                alt="Image of Yaron Miro"
              />
              {/* Fade bottom */}
              <div className="absolute bottom-[0] right-0 left-0 h-[20%] bg-gradient-to-b from-transparent to-primary"></div>
            </div>
            <ParticlesContainer className="absolute bottom-10 top-0 xl:top-[-100px] right-0 xl:right-[-50px] left-0 z-[-9999]" />
          </div>
        </main>
        <div className="flex mt-12 xl:mt-20 justify-center">
          <HeroIcons iconColor="stroke-secondary" arrowColor="text-accent" />
        </div>
      </div>
    </>
  );
};

export default Home;