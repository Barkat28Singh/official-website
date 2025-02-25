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
} from "/components/ui/tooltip";

import Link from "next/link";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";

const services = [
  {
    num: "01",
    category: "Web Development & Design",
    title: "Front-end + Back-end Development",
    description: "lorem ipsum jsnjf",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },

  {
    num: "03",
    category: "UX/UI Design",
    title:
      "Wireframes + Lofi & HiFi Prototypes + User Personas + UI Kits + UX Mood Boards",
    description: "lorem ipsum jsnjf",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Graphic Design",
    title: "Logos + Banners + Illustrations + Components + Characters ",
    description: "lorem ipsum jsnjf",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Product Design",
    title: "User Research + Iterative feedback implementation",
    description: "lorem ipsum jsnjf",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Motion Design",
    title: "Advertisments + Promotions + Video Editting",
    description: "lorem ipsum jsnjf",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
];

const Services = () => {
  const [service, setService] = useState(services[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update service state based on current slide activeIndex

    setService(services[currentIndex]);
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
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* service outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {service.num}
              </div>
              {/* service category heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {service.category}
              </h2>
              <h3>{service.title}</h3>
              {/* service description */}
              <p className="text-white/60">{service.description}</p>
              <ul className="flex gap-4">
                {/* service stack */}
                {service.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== service.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/*  live service button*/}
                <Link href={"/"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>See More</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*  github service button*/}
                <Link href={"/"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
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
              {services.map((service, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-fullh-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={service.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <ProjSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl: justify-none"
                btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              ></ProjSliderBtns>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
