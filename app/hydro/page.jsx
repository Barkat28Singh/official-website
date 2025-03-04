"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";

import {} from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "/components/ui/tooltip";

import { motion } from "framer-motion";
import Image from "next/image";

// About, Process, Features, Toolkit - Data from earlier message (re-inserted for context)
const about = {
  title: "HydroBag & HydroSatchel: Innovative Hydration Meets Fashion 💧🎒",
  description:
    "HydroBag & HydroSatchel is a product design project combining functionality and fashion, blending essential hydration with stylish accessories. The HydroBag is a traditional leather backpack infused with a concealed water bladder and straw system, while the HydroSatchel offers a sleek, metallic waist satchel incorporating a detachable aluminum water container. Both designs aim to solve the inconvenience of carrying separate water bottles, especially for students and fashion-forward individuals constantly on the go.\n\nThis project, designed independently using Adobe Illustrator, InDesign, and EPUB, involved thorough research into user needs, initial concept sketches, iterative design, and final branding development. The final designs balance aesthetics, usability, and sustainability — offering durable, fashionable solutions for hydration on the move.",
  info: [
    {
      fieldName: "My Role",
      fieldValue: "Product Designer, Illustrator & Brand Developer",
      image: "/assets/Hydro/1.png",
    },
    {
      fieldName: "Team Members",
      fieldValue: "Independent Project — Solo Execution",
      image: "/assets/Hydro/2.png",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Iterative Design Process — Research, Ideation, Prototyping & Refinement",
    },
    {
      fieldName: "Location",
      fieldValue: "Humber college North - Etobicoke, ON, Canada",
    },
  ],
};

const process = {
  title1: "HydroBag & HydroSatchel: From Concept to Market-Ready Designs 💼🚰",
  items: [
    {
      num: "1.",
      step: "🔎 Research & Ideation",
      description:
        "The process began with identifying the need for more convenient hydration solutions for students, commuters, and fashion enthusiasts. Research covered ergonomic product design, competitor analysis (hydration packs and satchels), and user surveys to understand preferences around bag styles, water capacity, and portability.",
      image: "/assets/Hydro/3.png",
    },
    {
      num: "2.",
      step: "✏️ Initial Sketches & Concept Development",
      description:
        "Multiple preliminary concepts were sketched, ranging from conventional hydration backpacks to futuristic metallic waist bags. Each concept explored form, functionality, and aesthetic appeal. The HydroBag evolved into a leather school bag with hidden hydration capabilities, while the HydroSatchel fused fashion-forward metallic finishes with functional water storage.",
      image: "/assets/Hydro/4.png",
    },
    {
      num: "3.",
      step: "🛠️ Prototyping & Material Exploration",
      description:
        "Detailed mockups were created in Adobe Illustrator, mapping the positioning of water bladders, straw systems, and attachment mechanisms. Material exploration focused on durable leather, lightweight aluminum, and BPA-free plastic for safe water storage.",
      image: "/assets/Hydro/5.png",
    },
    {
      num: "4.",
      step: "🎨 Branding & Presentation Design",
      description:
        "Both products were branded to appeal to distinct audiences — HydroBag for students and daily commuters, HydroSatchel for fashion enthusiasts. Branding elements, including typography, color palettes, and product descriptions, were developed in Adobe InDesign and compiled into a final digital pitch deck and EPUB presentation.",
      image: "/assets/Hydro/7.png",
      video: "/assets/Hydro/8.mp4",
    },
    {
      num: "5.",
      step: "🚀 Final Design & Pitch",
      description:
        "The final presentation showcased product functionality, visual appeal, user personas, and the innovative fusion of hydration and everyday carry items. The project highlights the importance of user-centered design, multi-functionality, and aesthetics in modern product development.",
      image: "/assets/Hydro/1.png",
    },
  ],
};

const features = {
  title: "Features: Fashion Meets Functionality 💦👜",
  items: [
    {
      num: "1.",
      feature: "💼 HydroBag - Integrated Hydration Backpack",
      description:
        "A leather backpack with a built-in 2L water bladder and detachable sipper straw, keeping hydration discreet yet accessible for students and commuters.",
      image: "/assets/Hydro/1.png",
    },

    {
      num: "2.",
      feature: "✨ HydroSatchel - Fashion-Forward Hydration Waist Bag",
      description:
        "A sleek metallic waist satchel with a 1L detachable aluminum water container, offering hydration without compromising on style.",
      image: "/assets/Hydro/2.png",
    },
    {
      num: "3.",
      feature: "🛠️ Modular & Easy-to-Clean Components",
      description:
        "Detachable straw, stopper, and sipper for easy cleaning and maintenance, ensuring hygiene and reusability.",
      image: "/assets/Hydro/6.png",
    },

    {
      num: "4.",
      feature: "🎒 Multi-Compartment Storage",
      description:
        "HydroBag includes 5 compartments for books, electronics, and stationery, while HydroSatchel balances storage for essentials with integrated hydration.",
      image: "/assets/Hydro/5.png",
    },
    {
      num: "5.",
      feature: "🌱 Eco-Friendly & Space-Saving",
      description:
        "By eliminating the need for separate disposable bottles, the designs reduce plastic waste and free up internal bag space for other essentials.",
      image: "/assets/Hydro/7.png",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Tools, Skills & Process Insights 🛠️",
  description: [
    {
      sub: "Product Design & 3D Concepting",
      bullet:
        "Developed detailed product sketches and digital mockups using Adobe Illustrator and Procreate, focusing on ergonomics and aesthetics.",
    },
    {
      sub: "Branding & Marketing Assets",
      bullet:
        "Created cohesive branding elements (logos, typography, product names) and designed promotional materials using Adobe InDesign.",
    },
    {
      sub: "User Research & Persona Development",
      bullet:
        "Conducted user research, created target personas, and defined user pain points to drive design decisions.",
    },
    {
      sub: "Iterative Prototyping",
      bullet:
        "Refined initial sketches into high-fidelity product illustrations, incorporating user feedback to enhance usability and appeal.",
    },
    {
      sub: "Presentation & Digital Publishing",
      bullet:
        "Compiled final product pitch deck and digital EPUB presentation to showcase product evolution, features, and user-centered approach.",
    },
  ],
  skillList: [
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <SiAdobeindesign />, name: "Adobe InDesign" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
  ],
};

const Hydro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        {/* Back Button */}
        <Link
          href="/products"
          className="flex w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center group mb-7"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <BsArrowLeft className="text-white text-3xl group-hover:text-accent" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Back to Projects</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        {/* Main Tabs */}
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[80px]"
        >
          {/* Sidebar Navigation */}
          <TabsList className="flex flex-col gap-8">
            <TabsTrigger
              className=" data-[state=active]:text-accent"
              value="about"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              className=" data-[state=active]:text-accent"
              value="progression"
            >
              Process
            </TabsTrigger>
            <TabsTrigger
              className=" data-[state=active]:text-accent"
              value="features"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              className=" data-[state=active]:text-accent"
              value="toolkit"
            >
              Toolkit
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <div className="w-full">
            {/* About Section */}
            <TabsContent
              value="about"
              className="flex flex-col xl:flex-row gap-8"
            >
              <div className="flex flex-col gap-6 w-full xl:w-1/2">
                <h3 className="xl:text-3xl text-center text-2xl font-bold mb-6  ">
                  {about.title}
                </h3>
                <p className="text-white/60">{about.description}</p>
                <ul className="flex flex-col gap-2">
                  {about.info.map((item, index) => (
                    <li key={index}>
                      <span className="text-accent text-md ">
                        {item.fieldName}:
                      </span>
                      <span className="text-sm"> {item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Images */}
              <div className="grid gap-3 xl:w-1/2">
                {about.info
                  .filter((item) => item.image)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#232329] rounded-xl flex justify-center items-center"
                    >
                      <Image
                        src={item.image}
                        alt={item.fieldName}
                        width={450}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>

            {/* Process Section */}
            <TabsContent value="progression" className="tabs-content">
              <h3 className="xl:text-3xl text-2xl font-bold mb-6 text-center ">
                {process.title1}
              </h3>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {process.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4"
                  >
                    <span className="text-accent font-semibold">
                      {item.num}
                    </span>
                    <h4 className="text-xl font-bold">{item.step}</h4>
                    <p className="text-white/60">{item.description}</p>
                    <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center w-full">
                      <Image
                        src={item.image}
                        alt={item.step || "Sweet Teeth Process Image"} // Fallback alt text
                        width={400}
                        height={200}
                        className="rounded-lg h-[300px] object-contain"
                      />
                    </div>

                    {/* Video - Only show if video exists */}
                    {item.video && (
                      <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center">
                        <ReactPlayer
                          url={item.video}
                          controls
                          width="100%"
                          height="100%"
                          style={{
                            maxHeight: "350px",
                            objectFit: "contain",
                            pointerEvents: "auto",
                          }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Features Section */}
            <TabsContent value="features">
              <h3 className="xl:text-3xl text-2xl font-bold mb-6 text-center ">
                {features.title}
              </h3>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {features.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4"
                  >
                    <span className="text-accent font-semibold">
                      {item.num}
                    </span>
                    <h4 className="text-xl font-bold">{item.feature}</h4>
                    <p className="text-white/60">{item.description}</p>

                    <div className="flex flex-col gap-4">
                      {/* Image */}
                      <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center">
                        <Image
                          src={item.image}
                          alt={item.feature || "Sweet Teeth Feature Image"}
                          width={400}
                          height={200}
                          className="rounded-lg h-[300px] object-cover"
                        />
                      </div>

                      {/* Video - Only show if video exists */}
                      {item.video && (
                        <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center">
                          <ReactPlayer
                            url={item.video}
                            controls
                            width="100%"
                            height="100%"
                            style={{
                              maxHeight: "350px",
                              objectFit: "contain",
                              pointerEvents: "auto",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Toolkit Section */}
            <TabsContent value="toolkit">
              <h3 className="xl:text-3xl text-2xl font-bold mb-6 text-center ">
                {toolkit.title}
              </h3>
              <div className="flex flex-col gap-6">
                {toolkit.description.map((item, index) => (
                  <div key={index} className="bg-[#232329] p-6 rounded-xl">
                    <h4 className="text-xl font-bold">{item.sub}</h4>
                    <p className="text-white/60">{item.bullet}</p>
                  </div>
                ))}
              </div>

              {/* Skills Grid */}
              <h4 className="text-2xl font-bold mt-6 mb-4">
                Technologies & Tools
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {toolkit.skillList.map((skill, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-5xl group-hover:text-accent transition-all duration-100">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Hydro;
