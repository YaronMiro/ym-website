"use client"

import React from "react";
import Image from 'next/image'
import Script from "next/script";
import { FiDownload } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import BackgroundParticles from '@/components/BackgroundParticles'
import heroImage from '@/public/hero-image-2.png'
import particlesJs from '@/lib/particles.js'

const Home: React.FC = () => {
  return (
    <>
    <Script
        src={particlesJs}
        strategy="lazyOnload"
      />
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="relative flex flex-col xl:flex-row items-center justify-between xl:pt-8">
            <div className="text-center xl:text-left bg-primary">
              <div className="flex align-bottom gap-2">
                <span className="text-[28px]">Senior Fullstack Developer</span>
                <BsCodeSlash role="img" aria-label="rocket" className="text-[22px] text-accent inline" />
              </div>
              <h1 className="h1 mb-4 mt-1">
                <span className="text-6xl"> Hello I&apos;m <br /> </span><span className="text-accent">Yaron Miro</span>
              </h1>
              <div className="max-w-[500px] mb-9 leading-8 text-white/80">
                <p>
                  With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies.
                </p>
                <p className="mt-4">
                  Experienced in cloud technologies, DevOps, AI integration, and have a strong eye for design, all while consistently delivering high-quality, reliable software efficiently.
                </p>
              </div>
              <div className="flex flex-row items-center justify-center xl:justify-start mt-8 gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="xl:hidden flex items-center uppercase gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8">
                  <Social className="flex xl:flex-row gap-6" />
                </div>
              </div>
            </div>
            <div>
              <BackgroundParticles className="absolute top-0 bottom-0 right-0 w-[50%] h-full z-[-9999]" />
              <div className="relative">
                <Image
                  className="mr-20"
                  src={heroImage}
                  height={700}
                  alt="Image of Yaron Miro"
                />
                <div className="bottom-bg-fade absolute top-0 bottom-0 left-0 right-0 z-50"></div>
              </div>
              </div>
          </div>
        </div>
      </section>
      <Separator className="w-[60%] mx-auto" />
    </>
    
  );
};

export default Home;