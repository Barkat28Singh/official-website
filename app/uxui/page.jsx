"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "/components/ui/tooltip";
import { SiAdobephotoshop, SiAdobexd } from "react-icons/si";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";

import ProjSliderBtns from "/components/ProjSliderBtns";

const designs = [
  {
    num: "01",
    title: "Sketchbook-inspired UI Kit",
    description:
      "This sketchbook-inspired UI kit, designed using Adobe XD, showcases a playful yet functional design system with hand-drawn elements and vibrant colors. The kit includes essential components like buttons, sliders, checkboxes, search bars, radio buttons, navigation icons, and menu layouts—each with default, hover, and pressed states for improved user interaction. The color palette combines teal, mustard yellow, burnt orange, and warm gradients, adding warmth and energy while maintaining usability. Buttons feature rounded corners and gradient fills, while sliders incorporate smooth toggles with matching hues. The weather widget uses a combination of icons and typography for an engaging, informative look. Navigation elements like arrows and search icons have distinct hover states, offering clear visual feedback. The menu sections use layered cards with colorful icons and bold typography, enhancing clarity and accessibility. The overall style blends hand-drawn charm with modern usability, perfect for creative applications seeking a friendly, approachable interface.",
    image: "/assets/UIUX/UI kit.png",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "02",
    title: "Bauhuas-inspired Fashion Moodboard",
    description:
      "TThis fashion mood board, created with Adobe XD, is inspired by the vibrant color palette and geometric principles of the Bauhaus movement. It showcases the visual direction for Cherry Closet, blending bold colors like mustard yellow, teal, burnt orange, and deep red with a dark background for striking contrast. The board features a mix of fashion photography, textiles, and sewing elements, reflecting themes of textile, texture, design, style, and boldness. Rounded and geometric frames encapsulate images of contemporary outfits, fabrics, and vintage sewing machines, highlighting the brand’s focus on craftsmanship and modern aesthetics. Curved, playful typography complements the retro-modern vibe, while linear decorative elements evoke Bauhaus’s iconic geometry.This mood board captures a bold, stylish, and creative brand identity—balancing vintage inspiration with contemporary fashion trends.",
    image: "/assets/UIUX/UI moodboard.png",
    icon: <SiAdobexd></SiAdobexd>,
  },

  {
    num: "03",
    title: "Sports-Application Research User Persona",
    description:
      "This user persona represents Samantha Jefferson, a 23-year-old web developer and designer from Toronto, created through research for a sports application. Samantha is a health-conscious individual with a strong work ethic who manages job-related stress through cooking and exercising. As an extrovert, she enjoys learning from her environment and values social interactions.Her primary goals include maintaining an organized routine, prioritizing mind and body positivity, stepping outside her comfort zone, and optimizing her diet for muscle growth. Samantha uses technologies like IT systems, mobile apps, Adobe Creative Cloud, and social media networks to support her lifestyle. With interests in cycling, swimming, photography, and cooking, she embodies traits like being a health enthusiast, hardworking, friendly, and creative—making her an ideal target user for fitness and lifestyle applications. The persona's clean layout, clear demographic data, motivational quote, and visual elements enhance understanding of Samantha's needs and motivations.",
    image: "/assets/UIUX/UX persona.png",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "04",
    title: "Plantie-UI Kit",
    description:
      "The Plantie UI Kit, designed in Adobe XD, is a thoughtfully crafted web application interface focused on promoting sustainability and eco-conscious living. With a calming color palette inspired by nature—featuring soft greens, purples, blues, and earthy tones—the design evokes a sense of tranquility and environmental awareness.The kit includes essential components such as logo samples, color swatches, contact and account forms, and button navigation elements. The typography utilizes the PingFang TC family in varying weights (Thin, Light, Regular) for clean, readable content, reinforcing the minimalist and user-friendly approach.Design components like rounded buttons, gentle gradients, and simple forms enhance accessibility while creating a visually soothing user experience. The images of vibrant flowers and natural elements underscore the app’s sustainability theme, encouraging users to engage with plant-based lifestyles and eco-friendly practices. Plantie’s visual direction not only emphasizes aesthetic appeal but also aligns with values of environmental stewardship—making it ideal for applications centered around gardening, plant care, or sustainable living.",
    image: "/assets/UIUX/UI Plantie.png",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "05",
    title: "HydroSatch-Product Design",
    description:
      "The Plantie UI Kit, designed in Adobe XD, is a thoughtfully crafted web application interface focused on promoting sustainability and eco-conscious living. With a calming color palette inspired by nature—featuring soft greens, purples, blues, and earthy tones—the design evokes a sense of tranquility and environmental awareness.The kit includes essential components such as logo samples, color swatches, contact and account forms, and button navigation elements. The typography utilizes the PingFang TC family in varying weights (Thin, Light, Regular) for clean, readable content, reinforcing the minimalist and user-friendly approach.Design components like rounded buttons, gentle gradients, and simple forms enhance accessibility while creating a visually soothing user experience. The images of vibrant flowers and natural elements underscore the app’s sustainability theme, encouraging users to engage with plant-based lifestyles and eco-friendly practices. Plantie’s visual direction not only emphasizes aesthetic appeal but also aligns with values of environmental stewardship—making it ideal for applications centered around gardening, plant care, or sustainable living.",
    image: "/assets/UIUX/satch.png",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "06",
    title: "SneakAttax-Protoype",
    description:
      "The SneakAttax prototype, designed using Photoshop, is a vibrant and user-friendly reseller website tailored for sneaker enthusiasts. The UX/UI design focuses on clear visual hierarchy and an engaging shopping experience, featuring sections like Latest Drops & Arrivals and a prominent Black Friday Sale banner to capture user attention. The use of gradient backgrounds, neon-inspired typography, and sneaker imagery creates a modern, urban aesthetic that resonates with the target audience. The product cards display resale values prominently, making price comparisons easy, while the hover effects and organized layout enhance usability. Navigation is streamlined with a clear menu and quick links to different sneaker releases (e.g., Jordan, Yeezy, and SN Discord), ensuring easy access to key content. The contact section is easily accessible, providing multiple communication channels, which boosts user trust and convenience. Incorporating brand logos (Nike, Adidas, Converse) at the footer reinforces brand legitimacy. Overall, the design effectively blends bold visuals with functional elements, ensuring both aesthetic appeal and seamless user experience for sneaker shoppers.",
    image: "/assets/UIUX/sneakattax.jpg",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "07",
    title: "SweetTeeth-Prototype",
    description:
      "TThe Sweet Teeth e-commerce web app offers a fun and user-friendly shopping experience for candy lovers. Featuring a soft pastel color palette and playful, handwritten typography, the design creates a warm and inviting atmosphere. Key pages include a visually engaging home page with illustrated category icons, a simple and intuitive shopping cart for smooth checkout, a welcoming account creation page to encourage sign-ups, and a colorful gummy bear category page with charming product displays. The overall design prioritizes ease of use, accessibility, and visual appeal, making the shopping journey enjoyable for both children and adults.",
    image: "/assets/UIUX/sweet.png",
  },
  {
    num: "08",
    title: "Wikipedia-Remake Prototype",
    description:
      "This Wikipedia remake focuses on improving both UX and UI while retaining the site’s familiar structure. The design includes Hi-Fi interactive prototypes and Lo-Fi wireframes for both web and mobile versions. The new interface incorporates a more modern color palette with earthy tones, improved typography, and clearer navigation. Key enhancements include a create account form, editing history section, and a responsive mobile version for better accessibility. The clean layout prioritizes content readability, user interaction, and ease of navigation while maintaining the platform’s educational purpose.",
    image: "/assets/UIUX/Wiki lowhifi.png",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "09",
    title: "IRCC-Remake Prototype",
    description:
      "The IRCC website remake aims to improve accessibility, clarity, and user-friendliness. Key features include a redesigned header with quick access to application forms, an AI Chat Bot (GovChat) for real-time support, and a language menu offering multiple translations (Hindi, Punjabi, Persian, French). Accessibility is prioritized through options like background color adjustments and text size customization. The image carousel highlights important visuals, and an important changes section ensures users receive timely updates on global situations. The improved navigation makes complex information easily accessible, streamlining the user journey for immigrants and applicants.",
    image: "/assets/UIUX/ircc.png",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "10",
    title: "Zara-Remake Prototype",
    description:
      "This Zara website remake focuses on enhancing the e-commerce shopping experience through clean Lo-Fi wireframes and structured layouts. Key features include an improved product page with a large image carousel, detailed reviews section, and options to complete the look with complementary products. The leave a review flow is streamlined with a user-friendly form and verification process. Post-submission, users are greeted with a thank-you page and suggested products, encouraging continued engagement. The design prioritizes clarity, easy navigation, and accessibility while maintaining Zara’s minimalist branding.",
    image: "/assets/UIUX/zara.png",
    icon: <SiAdobexd></SiAdobexd>,
  },
  {
    num: "11",
    title: "FilmBucket-Prototype",
    description:
      "The FILMBUCKET prototype is an IMDB-inspired web application designed in Adobe XD, offering users an engaging platform to explore movies and TV shows. The design utilizes a bold red and dark maroon color palette, creating a vibrant and cinematic feel while enhancing visual hierarchy.Key features include a home page displaying the latest releases and popular content, with categorized sections for movies, TV shows, and genres. The menu provides quick access to top-rated films, awards, trivia, and more, ensuring seamless navigation. The movie/TV show details page showcases information like cast, ratings, and upcoming releases, enhancing the browsing experience. The app includes account management features, with clear sign-up and login forms, and offers users the ability to personalize their experience. An interactive movie trivia section adds a fun, engaging element to the platform, encouraging user interaction. Overall, the UX/UI design focuses on user-friendly navigation, vibrant visuals, and functional components to create an enjoyable movie discovery and information platform.",
    image: "/assets/UIUX/film.png",
    icon: <SiAdobexd></SiAdobexd>,
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
      className="min-h-[80vh] flex items-center justify-center py-12 l:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none pr-5">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {design.num}
              </div>
              {/* project category heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {design.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{design.description}</p>
              <TooltipProvider delay-duration={100}>
                <Tooltip>
                  <div className="text-4xl duration-300 flex">
                    {design.icon}
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
              {designs.map((design, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[600px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
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
