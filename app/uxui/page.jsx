"use client";
import Link from "next/link";
import { BsArrowUpRight, BsGithub, BsBehance } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "/components/ui/tooltip";

import {
  SiAdobephotoshop,
  SiAdobexd,
  SiCanva,
  SiAdobeillustrator,
} from "react-icons/si";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";

const designs = [
  {
    num: "01",
    title: "Wikipedia-Remake Prototype",
    description:
      "This Wikipedia redesign enhances both user experience and visual design while retaining the site's iconic informational structure. Featuring a modernized color palette with earthy tones, clearer typography, and simplified navigation, the redesign improves readability and usability. New features include a user-friendly account creation flow, editing history section, and fully responsive design to optimize mobile accessibility. Developed through comprehensive user research and iterative prototyping using Adobe XD, this project balances modernization with familiarity.",
    image: "/assets/UIUX/Wiki lowhifi.png",
    icon: <SiAdobexd></SiAdobexd>,
    link: "/wiki",
    behance:
      "https://www.behance.net/gallery/220142279/Wikipedia-Remake-Redesign-Prototype",
  },
  {
    num: "02",
    title: "IRCC-Remake Prototype",
    description:
      "The IRCC website redesign focuses on enhancing accessibility and simplifying complex information for immigrants and applicants. Key improvements include an AI-powered chatbot (GovChat) for real-time assistance, a multi-language menu supporting Hindi, Punjabi, Persian, and French, and user-controlled accessibility options like text size adjustment and background color switching. A new image carousel and 'Important Changes' section ensure users stay informed. Extensive usability research informed these updates, ensuring the redesign effectively streamlines user journeys while maintaining government standards.",
    image: "/assets/UIUX/ircc.png",
    icon: <SiAdobexd></SiAdobexd>,
    link: "/ircc",
    behance:
      "https://www.behance.net/gallery/220142005/IRCC-Website-Remake-Prototype",
  },
  {
    num: "03",
    title: "Zara-Remake Prototype",
    description:
      "This Zara e-commerce prototype focuses on enhancing product discovery and streamlining the review and checkout experience. Key design improvements include a minimalist product gallery with large imagery, a visually engaging 'Complete the Look' section, and a streamlined review form with post-submission feedback. Designed using Balsamiq and Canva, the prototype balances Zara’s signature aesthetic with improved usability, ensuring shoppers can effortlessly browse, review, and purchase products across desktop and mobile platforms.",
    image: "/assets/UIUX/zara.png",
    icon: <SiCanva />,
    link: "/zara",
    behance: "https://www.behance.net/gallery/220144159/Zara-Revamp-Prototype",
  },
  {
    num: "04",
    title: "FilmBucket-Prototype",
    description:
      "FilmBucket is a fully realized entertainment discovery platform, inspired by IMDb. Designed in Adobe XD, this prototype features bold visuals and intuitive navigation for exploring movies, TV shows, and trivia. Users can browse by genre, view cast and crew details, and engage with interactive quizzes. Personalized user profiles add a layer of engagement, while the clean, content-first design ensures users can easily discover new films and series.",
    image: "/assets/UIUX/film.png",
    icon: <SiAdobexd></SiAdobexd>,
    link: "/film",
    behance: "https://www.behance.net/gallery/220142571/FilmBucket-Project",
  },
  {
    num: "05",
    title: "SneakAttax Prototype",
    description:
      "The SneakAttax prototype, designed in Photoshop, blends urban sneaker culture with a bold, interactive user experience. Featuring gradient backgrounds, neon typography, and high-impact sneaker imagery, the design appeals to sneakerheads and resellers alike. Key sections include 'Latest Drops,' curated product cards showing real-time resale prices, and a streamlined navigation system that offers quick access to top sneaker brands and Discord community links. The vibrant design captures the hype culture around limited-edition sneakers while ensuring easy usability.",
    image: "/assets/UIUX/sneakattax.jpg",
    icon: <SiAdobephotoshop></SiAdobephotoshop>,
    behance: "https://www.behance.net/gallery/168801511/Sneak-Attax-Project",
  },
  {
    num: "06",
    title: "SweetTeeth-Prototype",
    description:
      "SweetTeeth is a playful, candy-themed e-commerce prototype that transforms online candy shopping into a delightful, immersive experience. Designed using Adobe XD and Illustrator, it features pastel color palettes, illustrated candy icons, and whimsical typography. Key pages include a visually rich home page, easy-to-navigate category pages, a smooth shopping cart flow, and a personalized account creation process. Designed for both kids and adults, SweetTeeth emphasizes visual storytelling, usability, and accessibility.",
    image: "/assets/UIUX/sweet.png",
    icon: [<SiAdobexd></SiAdobexd>, <SiAdobeillustrator></SiAdobeillustrator>],
    link: "/sweet",
    behance:
      "https://www.behance.net/gallery/155638459/Sweet-Teeth-Candy-Project",
  },
  {
    num: "07",
    title: "Sketchbook-inspired UI Kit",
    description:
      "This Sketchbook-inspired UI Kit blends hand-drawn charm with functional UI design, creating a playful yet intuitive experience. Designed in Adobe XD, it includes buttons, sliders, checkboxes, search bars, and menus, all with hover, pressed, and active states. Featuring rounded edges, bold typography, and vibrant colors like teal and mustard yellow, the kit adds personality to digital products while ensuring usability. Its flexibility makes it suitable for creative apps, e-learning platforms, and lifestyle websites.",
    image: "/assets/UIUX/UI kit.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance:
      "https://www.behance.net/gallery/156042043/Sketchbook-inspired-UI-KIT",
  },
  {
    num: "08",
    title: "Plantie-UI Kit",
    description:
      "Plantie UI Kit is a nature-inspired design system created in Adobe XD to support eco-conscious brands and apps. Soft greens, purples, and earthy tones create a calming aesthetic, while rounded buttons and minimalistic forms ensure user-friendliness. The kit includes logo samples, form templates, navigation elements, and color palettes designed to highlight sustainability messaging. Designed for apps focused on gardening, eco-living, and plant care, this kit balances visual beauty with usability.",
    image: "/assets/UIUX/plantie ui kit.jpg",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/168801829/Plantie-Project",
  },
  {
    num: "09",
    title: "Bauhaus-inspired Fashion Moodboard",
    description:
      "This Bauhaus-inspired fashion moodboard blends modern fashion aesthetics with Bauhaus principles of geometry, bold typography, and contrasting colors. Created in Adobe XD, the moodboard features mustard yellow, teal, and burnt orange, paired with fashion photography and layered textures to highlight craftsmanship and creativity. Its clean grid layout and strong visual hierarchy make it ideal for fashion branding, editorial shoots, and trend forecasting.",
    image: "/assets/UIUX/UI moodboard.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/154128633/Cherry-Closet",
  },
  {
    num: "10",
    title: "Sports Application Research User Persona",
    description:
      "Samantha Jefferson, a 23-year-old web developer and fitness enthusiast from Toronto, represents the target persona for a fitness tracking and lifestyle app. Through detailed user research, Samantha’s goals, habits, and frustrations were mapped to shape features like workout tracking, personalized meal planning, and progress visualization. This persona embodies health-conscious tech users who value seamless integration between fitness, wellness, and social features.",
    image: "/assets/UIUX/UX persona.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/155636433/User-Persona-Project",
  },
];

const Designs = () => {
  const [design, setDesign] = useState(designs[0]);

  const handleSlideChange = (swiper) => {
    //get currebt slide index

    const currentIndex = swiper.activeIndex;
    //update project state based on current slide activeIndex

    setDesign(designs[currentIndex]);
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
                {design.num}
              </div>

              {/* Project Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {design.title}
              </h2>

              {/* Project Description */}
              <p className="text-white/60">{design.description}</p>

              {/* Icons (Tech Stack) */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <div className="flex flex-wrap gap-4 text-4xl items-center">
                    {/* This handles the spacing issue */}
                    {Array.isArray(design.icon) ? (
                      design.icon.map((icon, index) => (
                        <div
                          key={index}
                          className="hover:text-accent transition-all duration-300"
                        >
                          {icon}
                        </div>
                      ))
                    ) : (
                      <div className="hover:text-accent transition-all duration-300">
                        {design.icon}
                      </div>
                    )}
                  </div>
                </Tooltip>
              </TooltipProvider>

              {/* Border Divider */}
              <div className="border border-white/20"></div>

              {/* Action Buttons (Links, Behance, GitHub) */}
              <div className="flex items-center gap-4 mt-auto">
                {design.link && (
                  <Link href={design.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>See More About {design.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {design.github && (
                  <Link href={design.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{design.title} GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {design.behance && (
                  <Link href={design.behance}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsBehance className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{design.title} Behance</p>
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
              {designs.map((design, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-fullh-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={design.image}
                          fill
                          sizes=""
                          className="object-contain"
                          alt="design images"
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

export default Designs;
