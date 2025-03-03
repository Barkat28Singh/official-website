"use client";

import Link from "next/link";
import { BsArrowUpRight, BsBehance, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "/components/ui/tooltip";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import ReactPlayer from "react-player";

import "swiper/css";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";

const graphics = [
  {
    num: "01",
    title: "Sweet Teeth GIF",
    description:
      "This animated logo for Sweet Teeth captures the playful, candy-themed identity of the brand. Designed using Adobe Illustrator for the assets and animated in Adobe XD, the GIF features bouncing candies and a whimsical typeface that mimics hand-drawn lettering. The animation brings life to the brand’s fun and friendly personality, enhancing its appeal across social media and digital platforms.",
    image: "/assets/Ads/Sweet_Teeth_GIF.gif",
    icon: [<SiAdobeillustrator></SiAdobeillustrator>, <SiAdobexd></SiAdobexd>],
    link: "/sweet",
    behance:
      "https://www.behance.net/gallery/168802341/Sweet-Teeth-Motion-design-Logo",
  },

  {
    num: "02",
    title: "Sneak Attax Promotion GIF",
    description:
      "This dynamic promotion GIF for Sneak Attax uses bold typography, sneaker imagery, and fast-paced animation to create excitement around new sneaker drops. Built using Photoshop’s timeline feature, the animation blends glitch effects, urban textures, and modern fonts to capture the high-energy culture of sneaker reselling and streetwear enthusiasts.",
    image: "/assets/Ads/anim.gif",
    icon: [<SiAdobephotoshop></SiAdobephotoshop>],
    behance:
      "https://www.behance.net/gallery/168802641/Sneak-Attax-Advertisment",
  },

  {
    num: "03",
    title: "Invitation Cards",
    description:
      "This series of custom-designed invitation cards showcases a blend of elegant typography, floral illustrations, and modern layouts tailored for various occasions. Designed using Adobe Illustrator and Canva, each card combines personalized elements with professional aesthetics, ensuring they fit both formal and festive events. The designs reflect attention to detail, from color harmony to print-friendly layouts.",
    image: "/assets/Ads/invites.jpg",
    icon: [<SiAdobeillustrator></SiAdobeillustrator>, <SiCanva></SiCanva>],
    behance: "https://www.behance.net/gallery/155637239/Invitation-Cards",
  },
  {
    num: "04",
    title: "Adobe Splash Banner",
    description:
      "This vibrant splash banner was designed to promote Adobe Creative Cloud tools, featuring layered geometric shapes, bold gradients, and dynamic text placement. Created using Adobe Illustrator and Adobe XD, the banner highlights key Adobe products while maintaining a balanced composition that catches the viewer’s eye — ideal for web campaigns and event promotions.",
    image: "/assets/Ads/banner1.png",
    icon: [<SiAdobeillustrator></SiAdobeillustrator>, <SiAdobexd></SiAdobexd>],
    behance: "https://www.behance.net/gallery/155635937/Adobe-Splash-Banner",
  },
  {
    num: "05",
    title: "Digital Art: Psychedelic Reaping",
    description:
      "Psychedelic Reaping is a bold, surreal digital artwork that blends silhouette art with vibrant, swirling colors. Created in Adobe Illustrator, the piece draws inspiration from psychedelic aesthetics, using intricate gradients and layered shapes to create depth and movement. It reflects my creative exploration of abstract storytelling and visual impact through color theory.",
    image: "/assets/Ads/art2.png",
    icon: [<SiAdobeillustrator></SiAdobeillustrator>],
    behance:
      "https://www.behance.net/gallery/155637917/Pyschedelic-reaping-Silhouette-Digital-Illustration",
  },
  {
    num: "06",
    title: "Digital Art: Illuminating Lamps",
    description:
      "Illuminating Lamps is a minimalist digital illustration created using Adobe Illustrator, blending sharp geometry with soft ambient gradients. The piece focuses on light, shadow, and negative space to evoke a sense of warmth and tranquility. This artwork demonstrates my ability to translate simple concepts into visually captivating designs, combining technical precision with artistic expression.",
    image: "/assets/Ads/art1.png",
    icon: [<SiAdobeillustrator></SiAdobeillustrator>],
    behance:
      "https://www.behance.net/gallery/155637745/Illuminating-Lamps-Illustrator-Project",
  },
];

const Graphics = () => {
  const [graphic, setGraphic] = useState(graphics[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide activeIndex

    setGraphic(graphics[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center justify-center py-12 xl:py-0 overflow-hidden"
    >
      <div className="container mx-auto pb-24">
        <div className="flex flex-col xl:flex-row xl:gap-30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none pr-5">
            <div className="flex flex-col gap-[30px] h-full xl:h-[100%] justify-between">
              {/* Project Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {graphic.num}
              </div>

              {/* Project Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {graphic.title}
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{graphic.description}</p>

              {/* Icons (Tech Stack) */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <div className="flex flex-wrap gap-4 text-4xl items-center">
                    {/* This handles the spacing issue */}
                    {Array.isArray(graphic.icon) ? (
                      graphic.icon.map((icon, index) => (
                        <div
                          key={index}
                          className="hover:text-accent transition-all duration-300"
                        >
                          {icon}
                        </div>
                      ))
                    ) : (
                      <div className="hover:text-accent transition-all duration-300">
                        {graphic.icon}
                      </div>
                    )}
                  </div>
                </Tooltip>
              </TooltipProvider>

              {/* Border Divider */}
              <div className="border border-white/20"></div>

              {/* Action Buttons (Links, Behance, GitHub) */}
              <div className="flex items-center gap-4 mt-auto">
                {graphic.link && (
                  <Link href={graphic.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>See More About {graphic.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {graphic.github && (
                  <Link href={graphic.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{graphic.title} GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {graphic.behance && (
                  <Link href={graphic.behance}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsBehance className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{graphic.title} Behance</p>
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
              {graphics.map((graphic, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-fullh-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={graphic.image}
                          fill
                          sizes=""
                          className="object-contain"
                          alt="graphic images"
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

export default Graphics;
