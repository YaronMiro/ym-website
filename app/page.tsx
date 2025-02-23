"use client"

import React from "react";
import Image from 'next/image'
import { FiDownload } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import ParticlesContainer from '@/components/ParticlesContainer'
import ContainerSeparator from "@/components/ContainerSeparator";
import heroImage from '@/public/hero-image-2.png'
import HeroIcons from "@/components/HeroIcons";

const Home: React.FC = () => {
  return (
    <>
      <section className="container">
          <div className="flex flex-col xl:flex-row items-center xl:items-start">
          <div>
              <h1 className="flex flex-col font-semibold">
                <span className="text-5xl text-white">Hello I&apos;m</span>
                <span className="mt-2 text-7xl text-accent">Yaron Miro</span>
              </h1>
              <div className="flex items-center mt-10 gap-3">
                <span className="text-3xl">Senior Fullstack Developer</span>
                <BsCodeSlash role="img" aria-label="developer icon" className="rounded-full p-[4px] w-[30px] h-[30px] border border-secondary/70 text-secondary/70" />
              </div>
              <div className="max-w-[500px] mt-3 leading-8 text-white/80">
                <p>
                  With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies.
                </p>
                <p className="mt-4">
                  Experienced in cloud technologies, DevOps, AI integration, and have a strong eye for design, all while consistently delivering high-quality, reliable software efficiently.
                </p>
              </div>
            <Social className="flex mb-10 mt-16 xl:mt-12 gap-6" />
            </div>
            <div className="relative flex justify-center xl:flex-1 mt-24">
              <ParticlesContainer className="absolute bottom-10 w-full h-full z-[-9999] xl:right-0 xl:left-0" />
              <Image
                className="max-h-[600px] w-auto h-auto xl:h-[550px] px-8 xl:px-0"
                src={heroImage}
                alt="Image of Yaron Miro"
              />
            </div>
          </div>
          <div className="pb-20">
            <div className="h-[1px] bg-white/10 xl:w-[110%] xl:-mx-[5%]"></div>

            {/* <Button
              variant="outline"
              size="lg"
              className="xl:hidden flex items-center uppercase gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button> */}
            <div className="flex justify-center my-7 z-50">
              <HeroIcons color="stroke-white/30" />
            </div>
          {/* <ContainerSeparator /> */}
          </div>  
      </section>
    </>
    
  );
};

export default Home;