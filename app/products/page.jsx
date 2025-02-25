"use client";

import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

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
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiAutodeskmaya,
  SiUnity,
  SiCanva,
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
      className="min-h-[80vh] flex items-center justify-center py-12 l:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none pr-5">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {product.num}
              </div>
              {/* project category heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {product.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{product.description}</p>
              <TooltipProvider delay-duration={100}>
                <Tooltip>
                  <div className="text-4xl flex duration-300">
                    {product.icon}
                  </div>
                </Tooltip>
              </TooltipProvider>

              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/*  live project button*/}

                {/*  github project button*/}
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
                      {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}

                      {/* Conditional Rendering */}
                      <div className=" w-full h-full">
                        {product.image ? (
                          <Image
                            src={product.image}
                            fill
                            loop
                            className="object-contain"
                            alt="advertisement image"
                          />
                        ) : product.video ? (
                          <ReactPlayer
                            url={product.video}
                            controls
                            width="100%"
                            height="100%"
                            style={{
                              objectFit: "contain",
                              pointerEvents: "auto",
                            }}
                          />
                        ) : (
                          <p className="text-white text-center">
                            No media available
                          </p>
                        )}
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
