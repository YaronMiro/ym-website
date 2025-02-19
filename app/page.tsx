import React from "react";

import { FiDownload } from "react-icons/fi";

const Home: React.FC = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
       <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl font-se">Senior Fullstack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br/> <span className="text-accent">Yaron Miro</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              <span role="img" aria-label="dog">🚀 </span>
With 10+ years of experience in backend and frontend, building scalable, high-performance web applications with modern technologies. Skilled in cloud, DevOps, AI integration, and UX/UI best practices, delivering high-quality, reliable software efficiently.
            </p>
          </div>
          <div>photo</div>
       </div>
      </div>
    </section>
  );
};

export default Home;