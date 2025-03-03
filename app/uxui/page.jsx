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
      "TThis Wikipedia remake enhances both UX and UI while keeping the site’s familiar structure. It features Hi-Fi prototypes and Lo-Fi wireframes for web and mobile, with a modern color palette, improved typography, and clearer navigation. Key updates include a create account form, editing history section, and responsive design, all focused on improving readability, accessibility, and user interaction.",
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
      "The IRCC website remake aims to improve accessibility, clarity, and user-friendliness. Key features include a redesigned header with quick access to application forms, an AI Chat Bot (GovChat) for real-time support, and a language menu offering multiple translations (Hindi, Punjabi, Persian, French). Accessibility is prioritized through options like background color adjustments and text size customization. The image carousel highlights important visuals, and an important changes section ensures users receive timely updates on global situations. The improved navigation makes complex information easily accessible, streamlining the user journey for immigrants and applicants.",
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
      "This Zara website remake focuses on enhancing the e-commerce shopping experience through clean Lo-Fi wireframes and structured layouts. Key features include an improved product page with a large image carousel, detailed reviews section, and options to complete the look with complementary products. The leave a review flow is streamlined with a user-friendly form and verification process. Post-submission, users are greeted with a thank-you page and suggested products, encouraging continued engagement. The design prioritizes clarity, easy navigation, and accessibility while maintaining Zara’s minimalist branding.",
    image: "/assets/UIUX/zara.png",
    icon: <SiCanva />,
    link: "/zara",
    behance: "https://www.behance.net/gallery/220144159/Zara-Revamp-Prototype",
  },
  {
    num: "04",
    title: "FilmBucket-Prototype",
    description:
      "The Filmbucket prototype, designed in Adobe XD, is an IMDB-inspired web app that helps users easily explore movies and TV shows. With a bold red and dark maroon color scheme, it features sections for latest releases, top-rated films, genres, and trivia. Users can browse cast details, ratings, and upcoming releases, while account creation and profile personalization enhance engagement. An interactive trivia section adds entertainment, all wrapped in a clean, user-friendly design focused on simplicity and easy navigation.",
    image: "/assets/UIUX/film.png",
    icon: <SiAdobexd></SiAdobexd>,
    link: "/film",
    behance: "https://www.behance.net/gallery/220142571/FilmBucket-Project",
  },
  {
    num: "05",
    title: "SneakAttax-Protoype",
    description:
      "The SneakAttax** prototype, designed in Photoshop, is a bold and user-friendly reseller site for sneaker enthusiasts. It features gradient backgrounds, neon typography, and vibrant sneaker imagery, creating an urban aesthetic. Sections like Latest Drops and Black Friday Sales enhance engagement, while product cards highlight resale prices for quick comparisons.  Streamlined navigation offers quick access to Jordan, Yeezy, and SN Discord releases, and a contact section provides easy communication. Brand logos in the footer boost credibility, blending **visual flair with seamless usability.",
    image: "/assets/UIUX/sneakattax.jpg",
    icon: <SiAdobephotoshop></SiAdobephotoshop>,
    behance: "https://www.behance.net/gallery/168801511/Sneak-Attax-Project",
  },
  {
    num: "06",
    title: "SweetTeeth-Prototype",
    description:
      "TThe Sweet Teeth e-commerce web app offers a fun and user-friendly shopping experience for candy lovers. Featuring a soft pastel color palette and playful, handwritten typography, the design creates a warm and inviting atmosphere. Key pages include a visually engaging home page with illustrated category icons, a simple and intuitive shopping cart for smooth checkout, a welcoming account creation page to encourage sign-ups, and a colorful gummy bear category page with charming product displays. The overall design prioritizes ease of use, accessibility, and visual appeal, making the shopping journey enjoyable for both children and adults.",
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
      "This sketchbook-inspired UI kit, designed in Adobe XD, combines playful hand-drawn elements with functional design, featuring vibrant colors like teal, mustard yellow, and burnt orange. It includes buttons, sliders, checkboxes, search bars, radio buttons, and menus, all with default, hover, and pressed states for smooth interaction. Rounded buttons, gradient fills, and smooth sliders enhance usability, while the weather widget blends icons and typography for clear, engaging updates. Layered menu cards with colorful icons and bold text improve navigation, blending hand-drawn charm with modern usability for a friendly, approachable interface.",
    image: "/assets/UIUX/UI kit.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance:
      "https://www.behance.net/gallery/156042043/Sketchbook-inspired-UI-KIT",
  },
  {
    num: "08",
    title: "Plantie-UI Kit",
    description:
      "The Plantie UI Kit, designed in Adobe XD, offers a serene and eco-conscious interface inspired by nature, using soft greens, purples, blues, and earthy tones to promote sustainability and tranquility. It includes logo samples, color swatches, contact and account forms, and button navigation elements, all designed with rounded buttons, gentle gradients, and minimalist forms for enhanced accessibility and a calming user experience. Featuring PingFang TC typography for clean readability, the design highlights vibrant floral imagery and natural elements, aligning with the app’s focus on eco-friendly living, plant care, and sustainability.",
    image: "/assets/UIUX/plantie ui kit.jpg",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/168801829/Plantie-Project",
  },
  {
    num: "09",
    title: "Bauhuas-inspired Fashion Moodboard",
    description:
      "This fashion mood board, created in Adobe XD, draws inspiration from the Bauhaus movement, blending bold colors like mustard yellow, teal, burnt orange, and deep red against a dark background for striking contrast. Featuring fashion photography, textiles, and sewing elements, it highlights craftsmanship, texture, and modern design aesthetics. Rounded frames, geometric accents, and curved playful typography enhance the retro-modern vibe, while linear decorative elements reflect Bauhaus geometry, creating a bold, stylish, and creative visual identity for Cherry Closet.",
    image: "/assets/UIUX/UI moodboard.png",
    icon: <SiAdobexd></SiAdobexd>,
    behance: "https://www.behance.net/gallery/154128633/Cherry-Closet",
  },

  {
    num: "10",
    title: "Sports-Application Research User Persona",
    description:
      "TSamantha Jefferson, a 23-year-old web developer from Toronto, is a health-conscious, social, and creative individual. She balances her career with cooking, exercise, and outdoor activities, aiming to stay organized, maintain mind-body positivity, and improve her diet for muscle growth. With interests in cycling, photography, and fitness, she’s an ideal target user for health and wellness apps.",
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
