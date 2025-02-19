"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";

const advertisments = [
  {
    num: "01",
    title: "Logo 1",
    description: "lorem ipsum jsnjf",
    image: "/assets/Logos/logo1.png",
  },
  {
    num: "02",
    title: "Logo 2",
    description: "lorem ipsum jsnjf",
    image: "/assets/Logos/logo2.png",
  },
  {
    num: "03",
    title: "Logo 3",
    description: "lorem ipsum jsnjf",
    image: "/assets/Logos/logo3.png",
  },
  {
    num: "04",
    title: "Logo 4",
    description: "lorem ipsum jsnjf",
    image: "/assets/Logos/logo4.png",
  },
  {
    num: "05",
    title: "Logo 5",
    description: "lorem ipsum jsnjf",
    image: "/assets/Logos/logo5.png",
  },
  {
    num: "06",
    title: "Logo 6",
    description: "lorem ipsum jsnjf",
    image: "/assets/Logos/logo6.png",
  },
];

const Advertisments = () => {
  const [advertisment, setAdvertisment] = useState(advertisments[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide activeIndex

    setAdvertisment(advertisments[currentIndex]);
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
              {/* project outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {advertisment.num}
              </div>
              {/* project category heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {advertisment.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{advertisment.description}</p>

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
              {advertisments.map((advertisment, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none pr-5">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-fullh-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={advertisment.image}
                          fill
                          sizes=""
                          className="object-contain"
                          alt="advertisements images"
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

export default Advertisments;
