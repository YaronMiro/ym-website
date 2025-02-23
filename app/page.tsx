"use client"

import React from "react";
import Image from 'next/image'
import { FiDownload } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import ParticlesContainer from '@/components/ParticlesContainer'
import YmIcon from '@/components/YmIcon'
import heroImage from '@/public/hero-image-2.png'

const Home: React.FC = () => {
  return (
    <>
      <section className="container">
          <div className="xl:relative flex flex-col xl:flex-row items-center xl:items-start">
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
              <Social className="flex mt-8 gap-6" />
            </div>
            <div className="relative mt-20 flex justify-center xl:static flex-1">
              <ParticlesContainer className="absolute bottom-0 right-0 left-0 xl:left-auto xl:top-0 xl:w-[55%] h-[80%] xl:h-[85%] z-[-9999]" />
              <Image
                src={heroImage}
                height={600}
                alt="Image of Yaron Miro"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-end -mt-6">
            {/* <Button
              variant="outline"
              size="lg"
              className="xl:hidden flex items-center uppercase gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button> */}
            <div className="flex items-center stroke-white/40 z-50">
              <YmIcon className="ym-icon" icon="head" />
              <IoIosArrowRoundForward className="text-2xl text-secondary/70 mx-2" />
              <YmIcon className="ym-icon" icon="app-code" />
              <IoIosArrowRoundForward className="text-2xl text-secondary/70 mx-2 -rotate-45" />
              <YmIcon className="ym-icon" icon="api" />
              <IoIosArrowRoundForward className="text-2xl text-secondary/70 mx-2 rotate-45" />
              <YmIcon className="ym-icon" icon="ui" />
              <IoIosArrowRoundForward className="text-2xl text-secondary/70 mx-2" />
              <YmIcon className="ym-icon" icon="cloud-shield" />
              <IoIosArrowRoundForward className="text-2xl text-secondary/70 mx-2 -rotate-45" />
              <YmIcon className="ym-icon" icon="cloud-balancer" />
              <IoIosArrowRoundForward className="text-2xl text-secondary/70 mx-2 rotate-45" />
              <YmIcon className="ym-icon" icon="bug-tracker" />
              <IoIosArrowRoundForward className="text-2xl text-secondary/70 mx-2" />
              <YmIcon className="ym-icon" icon="todo-list" />
            </div>
          </div>  
      </section>
    </>
    
  );
};

export default Home;