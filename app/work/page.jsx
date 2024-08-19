"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "This project showcases my proficiency in frontend development, where I built a dynamic and visually appealing web application using modern technologies. Utilizing HTML5 for structured and semantic content, CSS3 for styling and responsive design, and JavaScript for interactive features, I created a seamless user experience that is both functional and engaging.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb7.jpg",
    live: "http://Eduflowcloud.co.ke",
    github: "https://github.com/ghost-254",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "In this project, I demonstrated my ability to develop a complete web application from front to back. Using Next.js for server-side rendering and dynamic routing, Tailwind CSS for modern and responsive design, and Firebase for efficient backend development, I created a robust and scalable application that meets both user and business requirements.",
    stack: [{ name: "Next.js" }, { name: "React" },  { name: "Typescript" }, { name: "Tailwind.css" }, { name: "Firebase" }],
    image: "/assets/work/thumb2.jpg",
    live: "https://outreachconnect.org",
    github: "https://github.com/ghost-254/agency-website",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "This project highlights my skills in modern frontend development, utilizing Next.js for optimized performance and dynamic content, Tailwind CSS for creating sleek and responsive designs, along with Node.js for backend. The combination of these technologies enabled me to build a highly interactive and visually appealing user interface.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb8.jpg",
    live: "http://vinancee.com",
    github: "https://github.com/ghost-254",
  },

  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description:
      "This project highlights my skills in modern frontend and backend development, utilizing Next.js for optimized performance and dynamic content, Tailwind CSS for creating sleek and responsive designs, along with MongoDB for backend. The combination of these technologies enabled me to build a highly interactive and visually appealing user interface.",
    stack: [{ name: "Next.js" }, { name: "React" },  { name: "Typescript" }, { name: "Tailwind.css" }, { name: "MongoDB" }],
    image: "/assets/work/thumb6.jpg",
    live: "http://Dnny.com",
    github: "https://github.com/ghost-254",
  },

  {
    num: "05",
    category: "fullstack",
    title: "project 5",
    description:
      "This project highlights my skills in modern web and mobile development, utilizing Next.js for optimized performance and dynamic content, Tailwind CSS for creating sleek and responsive designs, along with Firebase for backend. The combination of these technologies enabled me to build a highly interactive and visually appealing user interface.",
    stack: [{ name: "Next.js" }, { name: "Typescript" }, { name: "Tailwind.css" }, { name: "Firesbase" }],
    image: "/assets/work/thumb3.jpg",
    live: "https://www.luxxtouch.com/",
    github: "https://github.com/ghost-254/LUXXTOUCH",
  },

  {
    num: "06",
    category: "fullstack",
    title: "project 6",
    description:
      "This project highlights my skills in modern web development, utilizing Next.js for optimized performance and dynamic content, Tailwind CSS for creating sleek and responsive designs, along with Node.js for backend. The combination of these technologies enabled me to build a highly interactive and visually appealing user interface.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb5.jpg",
    live: "https://www.fodyfoods.com/",
    github: "https://github.com/ghost-254",
  },

  {
    num: "07",
    category: "fullstack",
    title: "project 7",
    description:
      "This project highlights my skills in modern web development, utilizing Next.js for optimized performance and dynamic content, Tailwind CSS for creating sleek and responsive designs, along with Node.js for backend. The combination of these technologies enabled me to build a highly interactive and visually appealing user interface.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb4.jpg",
    live: "https://www.cupshe.com/",
    github: "https://github.com/ghost-254",
  },

  {
    num: "08",
    category: "fullstack",
    title: "project 8",
    description:
      "This project highlights my skills in modern frontend development, utilizing Next.js for optimized performance and dynamic content, Tailwind CSS for creating sleek and responsive designs, along with Node.js for backend. The combination of these technologies enabled me to build a highly interactive and visually appealing user interface.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb1.jpg",
    live: "https://www.beefcakeswimwear.com/",
    github: "https://github.com/ghost-254",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
