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
    category: "Web Development & Design",
    title: "Front-end + Back-end Development",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },

  {
    category: "UX/UI Design",
    title:
      "Wireframes + Lofi & HiFi Prototypes + User Personas + UI Kits + UX Mood Boards",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
  {
    category: "Graphic Design",
    title: "Logos + Banners + Illustrations + Components + Characters ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
  {
    category: "Product Design",
    title: "User Research + Iterative feedback implementation",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
  {
    category: "Motion Design",
    title: "Advertisments + Promotions + Video Editting",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
  {
    category: "Game Design",
    title: "3D Modelling + Game Development + Rendering + Texturising",
    stack: [{ name: "Unity" }, { name: "AutoDesk Maya" }],
    image: "/assests.png",
    live: "",
    github: "",
  },
];

const Services = () => {
  //update service state based on current slide activeIndex

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" flex items-center justify-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <div className="w-full">
            {services.map((service, index) => {
              return (
                <div className="h-[130px] relative flex-col flex justify-center items-center bg-[#27272c]">
                  {/* overlay */}
                  {/* image */}
                  {/* <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      fill
                      className="object-cover"
                      alt=""
                    ></Image>
                  </div> */}

                  {/* service category heading */}
                  <h2 className="xl:text-[42px] md:text-[30px] flex font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {service.category}
                  </h2>
                  <div className="flex p-5">
                    <h3 className=" flex leading-none text-accent group-hover:text-white transition-all duration-500 capitalize  text-center">
                      {service.title}
                    </h3>
                  </div>

                  {/* service description */}
                  <p className="text-white/60">{service.description}</p>
                </div>
              );
            })}
            {/* buttons */}
          </div>

          {/* service outline num */}

          {/* border */}
          <div className="border border-white/20"></div>
          {/* buttons */}

          {/* </div>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;

// <div className="flex items-center gap-4">
{
  /*  live service button*/
}
//   <Link href={"/"}>
//     <TooltipProvider delayDuration={100}>
//       <Tooltip>
//         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//           <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>See More</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   </Link>
//   {/*  github service button*/}
//   <Link href={"/"}>
//     <TooltipProvider delayDuration={100}>
//       <Tooltip>
//         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//           <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>Github Repository</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   </Link>
//
