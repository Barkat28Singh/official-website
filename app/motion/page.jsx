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

import ProjSliderBtns from "/components/ProjSliderBtns";
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeaftereffects,
} from "react-icons/si";

const motionprojs = [
  {
    num: "01",
    title: "Happy - Motion Design Lyric Video",
    description:
      "This lyric video for 'Happy' by Pharrell Williams combines bright, playful typography with dynamic motion graphics to amplify the song’s upbeat energy. Using Adobe Illustrator and Photoshop for asset creation, Adobe XD for initial frame designs, and After Effects for animation, the video features smooth text transitions, rhythmic animations synced to the music, and vibrant color schemes. It showcases my ability to blend typography, motion timing, and visual storytelling into an engaging experience.",
    video: "/assets/HappyLyricVideo/finalRender.mp4",
    icon: [
      <SiAdobeillustrator></SiAdobeillustrator>,
      <SiAdobexd></SiAdobexd>,
      <SiAdobeaftereffects></SiAdobeaftereffects>,
    ],
    link: "/happy",
    behance:
      "https://www.behance.net/gallery/168802513/Happy-by-Pharrel-Williams-Motion-design-Lyric-video",
  },
  {
    num: "02",
    title: "Sweet Teeth - Motion Design Video Advertisement",
    description:
      "This animated ad for Sweet Teeth brings the candy store to life with playful animations, illustrated product showcases, and bouncy transitions. Created using Adobe Illustrator for custom candy illustrations and After Effects for animation, the video highlights key product categories, promotions, and branding. The motion design balances fun and clarity, ensuring the ad appeals to both children and adults while maintaining brand consistency.",
    video: "/assets/SweetTeeth/main comp 2.mp4",
    icon: [
      <SiAdobeillustrator></SiAdobeillustrator>,
      <SiAdobeaftereffects></SiAdobeaftereffects>,
    ],
    link: "/sweet",
    behance:
      "https://www.behance.net/gallery/168802199/Sweet-Teeth-Advertisment",
  },
  {
    num: "03",
    title: "Heart of a Lion - Motion Design Action Video",
    description:
      "Heart of a Lion is a high-intensity action promo video combining bold kinetic typography with fast-cut visuals to create a powerful, adrenaline-pumping experience. Designed using Photoshop for background elements and After Effects for dynamic text animation and visual effects, the video embodies strength and determination. Each transition and effect was carefully synced to the soundtrack, amplifying the storytelling through motion design and cinematic pacing.",
    video: "/assets/Images/lion.mp4",
    icon: [
      <SiAdobeaftereffects></SiAdobeaftereffects>,
      <SiAdobephotoshop></SiAdobephotoshop>,
    ],
    behance:
      "https://www.behance.net/gallery/220465501/Motion-Design-Video-Promo?",
  },
];

const Motionprojs = () => {
  const [motionproj, setMotionproj] = useState(motionprojs[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide activeIndex

    setMotionproj(motionprojs[currentIndex]);
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
                {motionproj.num}
              </div>

              {/* Project Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {motionproj.title}
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{motionproj.description}</p>

              {/* Icons (Tech Stack) */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <div className="flex flex-wrap gap-4 text-4xl items-center">
                    {/* This handles the spacing issue */}
                    {Array.isArray(motionproj.icon) ? (
                      motionproj.icon.map((icon, index) => (
                        <div
                          key={index}
                          className="hover:text-accent transition-all duration-300"
                        >
                          {icon}
                        </div>
                      ))
                    ) : (
                      <div className="hover:text-accent transition-all duration-300">
                        {motionproj.icon}
                      </div>
                    )}
                  </div>
                </Tooltip>
              </TooltipProvider>

              {/* Border Divider */}
              <div className="border border-white/20"></div>

              {/* Action Buttons (Links, Behance, GitHub) */}
              <div className="flex items-center gap-4 mt-auto">
                {motionproj.link && (
                  <Link href={motionproj.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>See More About {motionproj.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {motionproj.github && (
                  <Link href={motionproj.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{motionproj.title} GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {motionproj.behance && (
                  <Link href={motionproj.behance}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsBehance className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{motionproj.title} Behance</p>
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
              {motionprojs.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* video */}
                      <div className="relative w-full h-full">
                        <ReactPlayer
                          url={item.video}
                          controls
                          width="100%"
                          height="100%"
                          style={{
                            pointerEvents: "auto",
                          }}
                        />
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

export default Motionprojs;
