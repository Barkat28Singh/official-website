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
    title: "SweetTeeth",
    description:
      "The Cherry Closet logo features a playful and modern design with a handwritten script for 'Cherry' and a textured, vintage-style font for 'closet,'' where the 'o' is creatively replaced with a cherry icon. A pair of vibrant red cherries and a mint green circular backdrop with a bite-like cutout add depth and charm. The contrasting fonts and colors create a stylish, approachable, and memorable visual identity, perfect for a trendy and fashion-forward brand.",
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
      "These logos feature the initials 'BS' in a bold, modern serif typeface with overlapping letters and layered shades. The blue variant uses a dark navy circle backdrop with gradient blues, giving it a professional and tech-forward look. The orange variant contrasts with warm oranges and a dark gray background, creating a vibrant and energetic feel. Both versions emphasize versatility with color options that cater to different brand moods while maintaining consistency through typography and structure",
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
      "This minimalist logo uses a vertical monogram layout, stacking the letters 'B' and 'S' with a slanted alignment. The black typography over a soft gray rounded rectangle background creates a sophisticated and timeless design. Its simplicity and clean lines make it highly adaptable for both print and digital use, lending itself to a high-end or corporate brand identity.",
    image: "/assets/Web/recipe.png",
    icon: [
      <SiJavascript></SiJavascript>,
      <SiMysql></SiMysql>,
      <SiNodedotjs></SiNodedotjs>,
      ,
    ],
    link: "/recipe",
    github: "https://github.com/Barkat28Singh/Roadmap-Recipe.git",
  },
  {
    num: "04",
    title: "Butterfly",
    description:
      "This vibrant version of the BS monogram uses a bold palette of orange, magenta, deep purple, and red. The geometric background retains the triangular layering, adding dimension, while the bright orange backdrop injects energy and warmth. The interplay of magenta outlines and purple typography brings a modern, creative touch, making it ideal for brands in fashion, media, or the creative arts seeking to make a bold, dynamic statement.",
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
    title: "Open Design Collaboratory(ODC)",
    description:
      "This logo presents a modern and sophisticated BS monogram, vertically aligned with a bold serif font. The geometric background features layered triangles in varying shades of gray, creating a sense of depth and dynamism. The white negative space enhances the visual impact, while the monochrome palette provides versatility and a professional, minimalist feel. This design is well-suited for corporate, architectural, or design-focused brands seeking a sleek and contemporary identity.",
    image: "/assets/Web/odc.png",
    icon: [<FaWix></FaWix>, <FaHtml5></FaHtml5>, <SiCss3></SiCss3>],
    link: "/odc",
    behance:
      "https://www.behance.net/gallery/155638459/Sweet-Teeth-Candy-Project",
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
