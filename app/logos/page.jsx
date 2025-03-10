"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "/components/ui/tooltip";
import { BsBehance, BsGithub, BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Link from "next/link";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";

const logos = [
  {
    num: "01",
    title: "Cherry Closet Logo",
    description:
      "The Cherry Closet logo features a playful and modern design with a handwritten script for 'Cherry' and a textured, vintage-style font for 'closet,'' where the 'o' is creatively replaced with a cherry icon. A pair of vibrant red cherries and a mint green circular backdrop with a bite-like cutout add depth and charm. The contrasting fonts and colors create a stylish, approachable, and memorable visual identity, perfect for a trendy and fashion-forward brand.",
    image: "/assets/Logos/logo1.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },

  {
    num: "02",
    title: "BS Logos (Blue & Orange Variants)",
    description:
      "These logos feature the initials 'BS' in a bold, modern serif typeface with overlapping letters and layered shades. The blue variant uses a dark navy circle backdrop with gradient blues, giving it a professional and tech-forward look. The orange variant contrasts with warm oranges and a dark gray background, creating a vibrant and energetic feel. Both versions emphasize versatility with color options that cater to different brand moods while maintaining consistency through typography and structure",
    image: "/assets/Logos/logo2.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },

  {
    num: "03",
    title: "BS Monogram Logo (Black & White)",
    description:
      "This minimalist logo uses a vertical monogram layout, stacking the letters 'B' and 'S' with a slanted alignment. The black typography over a soft gray rounded rectangle background creates a sophisticated and timeless design. Its simplicity and clean lines make it highly adaptable for both print and digital use, lending itself to a high-end or corporate brand identity.",
    image: "/assets/Logos/logo3.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },
  {
    num: "04",
    title: " BS Monogram with Geometric Background (Colorful Variant)",
    description:
      "This vibrant version of the BS monogram uses a bold palette of orange, magenta, deep purple, and red. The geometric background retains the triangular layering, adding dimension, while the bright orange backdrop injects energy and warmth. The interplay of magenta outlines and purple typography brings a modern, creative touch, making it ideal for brands in fashion, media, or the creative arts seeking to make a bold, dynamic statement.",
    image: "/assets/Logos/logo7.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },
  {
    num: "05",
    title: "BS Monogram with Geometric Background (Black & Gray Variant)",
    description:
      "This logo presents a modern and sophisticated BS monogram, vertically aligned with a bold serif font. The geometric background features layered triangles in varying shades of gray, creating a sense of depth and dynamism. The white negative space enhances the visual impact, while the monochrome palette provides versatility and a professional, minimalist feel. This design is well-suited for corporate, architectural, or design-focused brands seeking a sleek and contemporary identity.",
    image: "/assets/Logos/logo8.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },
  {
    num: "06",
    title: "Initials IA Logo",
    description:
      "The IA logo showcases a bold, geometric design with sharp angles and a modern sans-serif font. The overlapping navy and royal blue colors create depth and dimension, giving the logo a dynamic and forward-moving feel. Its clean and structured form suggests professionalism, reliability, and innovation, making it ideal for tech, engineering, or corporate industries.",
    image: "/assets/Logos/logo4.png",
    icon: <SiAdobephotoshop></SiAdobephotoshop>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },
  {
    num: "07",
    title: "Initials GS",
    description:
      "The GS logo uses large, interlocking letters within a brown circular backdrop. The earthy brown paired with a soft green foreground conveys an organic, grounded aesthetic. This overlapping design adds visual interest while maintaining legibility, making it suitable for brands associated with sustainability, nature, or community-driven initiatives.",
    image: "/assets/Logos/logo5.png",
    icon: <SiAdobephotoshop></SiAdobephotoshop>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },
  {
    num: "08",
    title: "Captain's 18",
    description:
      "This vibrant logo combines text and illustrative elements to represent a golf-themed brand. The red flag on a green putting surface with flowing blue water shapes suggests movement and leisure. The gradient ring border adds a modern touch with calming blue and warm orange tones. Overall, the design feels fresh, sporty, and welcoming—perfect for golf clubs or tournaments.",
    image: "/assets/Logos/logo6.png",
    icon: <SiAdobephotoshop></SiAdobephotoshop>,
    behance: "https://www.behance.net/gallery/155637091/Logo-Design",
  },
];

const Logos = () => {
  const [logo, setLogo] = useState(logos[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide activeIndex

    setLogo(logos[currentIndex]);
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
                {logo.num}
              </div>

              {/* Project Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {logo.title}
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{logo.description}</p>

              {/* Icons (Tech Stack) */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <div className="flex flex-wrap gap-4 text-4xl items-center">
                    {/* This handles the spacing issue */}
                    {Array.isArray(logo.icon) ? (
                      logo.icon.map((icon, index) => (
                        <div
                          key={index}
                          className="hover:text-accent transition-all duration-300"
                        >
                          {icon}
                        </div>
                      ))
                    ) : (
                      <div className="hover:text-accent transition-all duration-300">
                        {logo.icon}
                      </div>
                    )}
                  </div>
                </Tooltip>
              </TooltipProvider>

              {/* Border Divider */}
              <div className="border border-white/20"></div>

              {/* Action Buttons (Links, Behance, GitHub) */}
              <div className="flex items-center gap-4 mt-auto">
                {logo.link && (
                  <Link href={logo.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>See More About {logo.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {logo.github && (
                  <Link href={logo.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{logo.title} GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {logo.behance && (
                  <Link href={logo.behance}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsBehance className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{logo.title} Behance</p>
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
              {logos.map((logo, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-fullh-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={logo.image}
                          fill
                          sizes=""
                          className="object-contain"
                          alt="logo images"
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

export default Logos;
