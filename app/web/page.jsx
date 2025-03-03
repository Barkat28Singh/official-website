"use client";
import Link from "next/link";
import { BsArrowUpRight, BsGithub, BsBehance } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "/components/ui/tooltip";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";
import {
  SiCss3,
  SiEjs,
  SiFirebase,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";
import { FaBootstrap, FaHtml5, FaWix } from "react-icons/fa";

const webworks = [
  {
    num: "01",
    title: "Sweet Teeth",
    description:
      "Sweet Teeth is a vibrant, candy-themed e-commerce platform designed to captivate users with playful aesthetics while delivering a seamless shopping experience. The platform features a responsive design, interactive product filtering, personalized user accounts, and smooth checkout functionality. Custom candy illustrations and pastel design elements enhance visual appeal, while my full-stack development ensures the site’s scalability and performance. This project highlights my expertise in front-end design, back-end development, and creative branding.",
    image: "/assets/Web/sweet.png",
    icon: [
      <FaHtml5></FaHtml5>,
      <FaBootstrap></FaBootstrap>,
      <SiJquery></SiJquery>,
      <SiJavascript></SiJavascript>,
    ],
    link: "/sweet",
    github: "https://github.com/Barkat28Singh/Sweet-Teeth-2.0.git",
    behance:
      "https://www.behance.net/gallery/155638459/Sweet-Teeth-Candy-Project",
  },
  {
    num: "02",
    title: "FilmBucket",
    description:
      "FilmBucket is a comprehensive entertainment discovery platform inspired by IMDb, where users can explore movies, TV shows, and actor profiles. I developed this platform using the MVC architectural pattern with a seamless blend of front-end and back-end components. Features include real-time movie data fetching, actor filmographies, personalized profiles, and interactive movie trivia. This project highlights my ability to integrate APIs, manage complex data flows, and design intuitive user experiences.",
    image: "/assets/Web/film.png",
    icon: [
      <FaHtml5></FaHtml5>,
      <SiCss3></SiCss3>,
      <SiJavascript></SiJavascript>,
      <SiNodedotjs></SiNodedotjs>,
      <SiEjs></SiEjs>,
    ],
    link: "/film",
    github: "https://github.com/Barkat28Singh/Filmbucket",
    behance: "https://www.behance.net/gallery/220142571/FilmBucket-Project",
  },
  {
    num: "03",
    title: "Recipe Roadmap",
    description:
      "Recipe Roadmap is a collaborative platform designed to simplify meal planning and recipe discovery. Built using Node.js, MySQL, and JavaScript, the platform allows users to explore recipes, save favorites, and contribute their own dishes. It also includes user authentication, ingredient-based filtering, and dynamic content loading for smooth browsing. This project emphasizes my skills in full-stack development, database management, and creating user-friendly experiences centered around content sharing.",
    image: "/assets/Web/recipe.png",
    icon: [
      <SiJavascript></SiJavascript>,
      <SiMysql></SiMysql>,
      <SiNodedotjs></SiNodedotjs>,
    ],
    link: "/recipe",
    github: "https://github.com/Barkat28Singh/Roadmap-Recipe.git",
  },
  {
    num: "04",
    title: "Butterfly",
    description:
      "Butterfly is a mobile-responsive web application designed to connect individuals with mental health resources through personalized journeys and interactive content. The platform, built using Firebase, Node.js, and JavaScript, offers guided self-reflection exercises, resource recommendations, and progress tracking. This project underscores my capabilities in front-end design, back-end architecture, and working with real-time databases to enhance user experiences in wellness-oriented platforms.",
    image: "/assets/Web/butterfly.png",
    icon: [
      <SiJavascript></SiJavascript>,
      <SiNodedotjs></SiNodedotjs>,
      <SiFirebase></SiFirebase>,
    ],
    link: "/butterfly",
    github: "https://github.com/Barkat28Singh/Butterfly.git",
  },
  {
    num: "05",
    title: "Open Design Collaboratory (ODC)",
    description:
      "Open Design Collaboratory (ODC) is a collaborative platform built using Wix and custom code integrations to showcase design projects, host community events, and foster creative collaboration. The site features a curated gallery, project submission forms, and member directories. My role spanned design strategy, content architecture, and front-end implementation, combining my UX design sensibility with hands-on web development skills.",
    image: "/assets/Web/odc.png",
    icon: [<FaWix></FaWix>, <FaHtml5></FaHtml5>, <SiCss3></SiCss3>],
    link: "/odc",
    behance:
      "https://www.behance.net/gallery/220141349/Open-Design-Collaboratory",
  },
];

const Webworks = () => {
  const [webwork, setWebwork, index] = useState(webworks[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide activeIndex

    setWebwork(webworks[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 l:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none pr-5">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {webwork.num}
              </div>
              {/* project category heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {webwork.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{webwork.description}</p>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <div className="flex gap-4 text-4xl items-center">
                    {webwork.icon.map((icon, index) => (
                      <div key={index} className="flex items-center">
                        {icon}
                      </div>
                    ))}
                  </div>
                </Tooltip>
              </TooltipProvider>

              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 mb-10">
                {/*  live project button*/}

                {/*  github project button*/}

                {/*  behance project button*/}
                {webwork.link && (
                  <Link href={webwork.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>See More About {webwork.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {webwork.github && (
                  <Link href={webwork.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{webwork.title} Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {webwork.behance && (
                  <Link href={webwork.behance}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsBehance className="text-white text-3xl group-hover:text-accent"></BsBehance>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{webwork.title} Behance</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="zl:h[-520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {webworks.map((webwork, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-fullh-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={webwork.image}
                          fill
                          sizes=""
                          className="object-contain"
                          alt="webwork images"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <div className=" h-full flex justify-center items-center mt-2">
                <ProjSliderBtns
                  containerStyles="flex gap-2 w-full justify-between xl:w-max xl: justify-none"
                  btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
                ></ProjSliderBtns>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Webworks;
