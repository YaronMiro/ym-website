"use client"

import React from "react";
import Image from 'next/image'
import { BsCodeSlash } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import ParticlesContainer from '@/components/ParticlesContainer'
import heroImage from '@/public/hero-image.webp'
import HeroIcons from "@/components/HeroIcons";
import ResumeButtonDownload from "@/components/ResumeButtonDownload";

const Home: React.FC = () => {
  return (
    <>
      <div className="container pt-6 xl:pt-16">
        <div>
          <main className="relative flex flex-col xl:flex-row items-center">
            {/* hero section */}
            <div className="flex flex-col justify-center xl:w-full">
              <div className="max-w-[600px] md:max-w-[650px] xl:-mt-14">
                {/* main Title */}
                <h1 className="flex flex-col font-semibold">
                  <span className="text-5xl text-secondary">Hello I&apos;m</span>
                  <span className="text-[5rem] leading-[1.2] text-accent">Yaron Miro</span>
                </h1>
                {/* role */}
                <div className="flex items-center mt-10 gap-3">
                  <h2 className="font-semibold text-secondary text-2xl">Senior Full Stack Developer</h2>
                  <BsCodeSlash role="img" aria-label="developer icon" className="rounded-full p-[4px] w-[30px] h-[30px] border border-secondary text-secondary" />
                </div>
                <div className="xl:max-w-[500px] mt-3 leading-8 text-white text-[1.1rem]">
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
            <div className="relative flex justify-center xl:justify-end w-full pt-24 xl:pt-0 mt-12 xl:mt-0 xl:pr-32">
              <div className="relative">
                <Image
                  className="h-auto sm:h-[570px] w-full sm:w-auto"
                  src={heroImage}
                  alt="Image of Yaron Miro"
                />
                {/* Fade bottom */}
                <div className="absolute bottom-[0] right-0 left-0 h-[20%] bg-gradient-to-b from-transparent to-primary"></div>
              </div>
              <ParticlesContainer className="absolute bottom-10 top-0 xl:top-[-100px] right-0 xl:right-[-50px] left-0 z-[-9999]" />
            </div>
          </main>
          <div className="flex items-center justify-between mt-12 xl:mt-14">
            <ResumeButtonDownload />
            <HeroIcons iconColor="stroke-secondary" arrowColor="text-accent" />
          </div>
        </div>

        <div className="relative -mx-96 -mt-4 z-[-9999]">
          {/* right fade */}
          <div className="absolute top-0 right-0 bottom-0 w-[15%] bg-gradient-to-r from-transparent to-primary z-50"></div>
          {/* Left fade */}
          <div className="absolute top-0 left-0 bottom-0 w-[15%] bg-gradient-to-l from-transparent to-primary z-50"></div>
          <div className="gradient-bottom h-20"></div>
          <div className="h-[1px] flex-1 bg-white/30"></div>
        </div>
        <div className="grid grid-cols-2 gap-x-20 gap-y-20 mt-24">
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
          <div>
            <div className="flex justify-between py-1 text-base text-accent">
              <span>Backend</span>
              <span className="pr-5">85%</span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail text-secondary"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
              />
              <path
                className="rc-progress-line-path text-accent"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="currentColor"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "64.25px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              />
            </svg>
          </div>
        </div>
        {/* <div className="text-5xl w-full mt-32">
          <p>I am <span className="text-accent">unique</span> and <span className="text-accent">different</span> </p>
          <p>and <span className="text-accent">shine</span> in my own way</p>
        </div> */}
      </div>
    </>
  );
};

export default Home;