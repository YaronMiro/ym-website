import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import React from "react";

import { FiDownload } from "react-icons/fi";

const Home: React.FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
       <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Senior Fullstack Developer</span>
            <span role="img" aria-label="dog"> 🚀</span>
            <h1 className="h1 mb-4 mt-2">
              Hello I&apos;m <br/> <span className="text-accent">Yaron Miro</span>
            </h1>
            <div className="max-w-[500px] mb-9 leading-8 text-white/80">
              <p>
                With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies.
              </p>
              <p className="mt-4">
                Experienced in cloud technologies, DevOps, AI integration, and have a strong eye for design, able to advise on UX/UI — all while consistently delivering high-quality, reliable software efficiently.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center mt-8 gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center uppercase gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social className="flex xl:flex-row gap-6" />
              </div>
            </div>
          </div>
          <div>photo</div>
       </div>
      </div>
    </section>
  );
};

export default Home;