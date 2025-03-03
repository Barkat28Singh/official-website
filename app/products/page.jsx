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

import "swiper/css";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAutodeskmaya,
  SiUnity,
} from "react-icons/si";

const products = [
  {
    num: "01",
    title: "HydroBag-Product Design Pitch",
    description:
      "These logos feature the initials 'BS' in a bold, modern serif typeface with overlapping letters and layered shades. The blue variant uses a dark navy circle backdrop with gradient blues, giving it a professional and tech-forward look. The orange variant contrasts with warm oranges and a dark gray background, creating a vibrant and energetic feel. Both versions emphasize versatility with color options that cater to different brand moods while maintaining consistency through typography and structure",
    image: "/assets/Ads/pr.png",
    icon: [
      <SiAdobeindesign></SiAdobeindesign>,
      <SiAdobeillustrator></SiAdobeillustrator>,
      <SiAdobephotoshop></SiAdobephotoshop>,
    ],
    link: "/hydro",
    behance:
      "https://www.behance.net/gallery/220134825/Product-Design-HydroBag-HydroSatch",
  },
  {
    num: "02",
    title: "HydroSatch-Product Design Pitch",
    description:
      "These logos feature the initials 'BS' in a bold, modern serif typeface with overlapping letters and layered shades. The blue variant uses a dark navy circle backdrop with gradient blues, giving it a professional and tech-forward look. The orange variant contrasts with warm oranges and a dark gray background, creating a vibrant and energetic feel. Both versions emphasize versatility with color options that cater to different brand moods while maintaining consistency through typography and structure",
    image: "/assets/Ads/product2.png",
    icon: [
      <SiAdobeindesign></SiAdobeindesign>,
      <SiAdobeillustrator></SiAdobeillustrator>,
      <SiAdobephotoshop></SiAdobephotoshop>,
    ],
    link: "/hydro",
    behance:
      "https://www.behance.net/gallery/220134825/Product-Design-HydroBag-HydroSatch",
  },
  {
    num: "03",
    title: "SweetScape-Character Game Design",
    description:
      "These logos feature the initials 'BS' in a bold, modern serif typeface with overlapping letters and layered shades. The blue variant uses a dark navy circle backdrop with gradient blues, giving it a professional and tech-forward look. The orange variant contrasts with warm oranges and a dark gray background, creating a vibrant and energetic feel. Both versions emphasize versatility with color options that cater to different brand moods while maintaining consistency through typography and structure",
    image: "/assets/Ads/pitchprop.png",
    icon: [
      <SiAutodeskmaya></SiAutodeskmaya>,
      <SiUnity></SiUnity>,
      <SiAdobeindesign></SiAdobeindesign>,
      <SiAdobeillustrator></SiAdobeillustrator>,
      <SiAdobephotoshop></SiAdobephotoshop>,
    ],
    link: "/scape",
    behance:
      "https://www.behance.net/gallery/220141051/SweetScape-Game-Design-Project",
  },
];

const Products = () => {
  const [product, setProduct] = useState(products[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide activeIndex

    setProduct(products[currentIndex]);
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
                {product.num}
              </div>

              {/* Project Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {product.title}
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{product.description}</p>

              {/* Icons (Tech Stack) */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <div className="flex flex-wrap gap-4 text-4xl items-center">
                    {/* This handles the spacing issue */}
                    {Array.isArray(product.icon) ? (
                      product.icon.map((icon, index) => (
                        <div
                          key={index}
                          className="hover:text-accent transition-all duration-300"
                        >
                          {icon}
                        </div>
                      ))
                    ) : (
                      <div className="hover:text-accent transition-all duration-300">
                        {product.icon}
                      </div>
                    )}
                  </div>
                </Tooltip>
              </TooltipProvider>

              {/* Border Divider */}
              <div className="border border-white/20"></div>

              {/* Action Buttons (Links, Behance, GitHub) */}
              <div className="flex items-center gap-4 mt-auto">
                {product.link && (
                  <Link href={product.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>See More About {product.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {product.github && (
                  <Link href={product.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{product.title} GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {product.behance && (
                  <Link href={product.behance}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsBehance className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{product.title} Behance</p>
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
              {products.map((product, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-fullh-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          fill
                          sizes=""
                          className="object-contain"
                          alt="product images"
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

export default Products;
