"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";

import { FaPaintBrush, FaGamepad, FaVolumeUp } from "react-icons/fa";
import {
  SiAutodeskmaya,
  SiUnity,
  SiAdobephotoshop,
  SiAdobeillustrator,
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
  title: "SweetScape: A Fantastical Dessert-Themed Adventure Game 🍰🍭",
  description:
    "SweetScape is an interactive 3D game world where players explore a whimsical land made entirely of oversized desserts, vibrant treats, and fantastical food-themed landscapes. Developed independently, SweetScape combines immersive storytelling, interactive gameplay, and creative world-building to captivate players. Players guide the baby character 'Bubbles' through an enchanting sugary world, encountering quirky fruit-based characters and overcoming playful challenges.\n\nThe project involved creating detailed 3D models in Maya, incorporating textures that capture the whimsical aesthetic, and integrating them into Unity to form an explorable environment. Gameplay elements included interactive collectibles, barriers coded to guide player progression, and colorful visuals that bring the sweet world to life.",
  info: [
    {
      fieldName: "My Role",
      fieldValue:
        "Game Designer, 3D Modeler, Storyteller, Environment Artist, Gameplay Programmer",
      image: "/assets/SweetScape/team.png",
    },
    {
      fieldName: "Team Members",
      fieldValue:
        "Independent Project — Designed and developed all elements solo.",
      image: "/assets/SweetScape/methodology.png",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Iterative Design Process — Multiple rounds of concepting, prototyping, and testing.",
    },
    {
      fieldName: "Location",
      fieldValue: "University of Toronto - Mississauga, ON, Canada",
    },
  ],
};

const process = {
  title1: "SweetScape: From Concept to Playable World 🍩🍒",
  items: [
    {
      num: "1.",
      step: "🧁 World Building & Story Development",
      description:
        "The foundation of SweetScape was creating a world that merges playful imagination with interactive storytelling. Drawing inspiration from classics like 'Charlie and the Chocolate Factory' and 'Purble Place,' I crafted a vibrant dessert island filled with oversized donuts, cupcakes, cakes, and candy rivers. The story centered around Bubbles, a curious baby-like character navigating this whimsical land in search of a way home, while meeting characters like Old Jerry the wise cherry and Lawrence the cranky orange.",
      image: "/assets/SweetScape/story.png",
    },
    {
      num: "2.",
      step: "🎨 Concept Art & Character Design",
      description:
        "Using hand sketches, I designed each character to fit the world’s aesthetic and personality. Bubbles waddles like a penguin, making baby noises when excited. Old Jerry, the wise cherry, offers helpful guidance, while Lawrence the Orange, who recently got braces, serves as a cranky obstacle. These designs helped shape both gameplay and environmental storytelling.",
      image: "/assets/SweetScape/characters.png",
    },
    {
      num: "3.",
      step: "🛠️ 3D Modeling & Asset Creation",
      description:
        "All environmental assets, including cakes, donuts, and candy landscapes, were modeled in Autodesk Maya. Each dessert was scaled to create a sense of wonder, with textures applied to enhance the glossy, sugary feel. This process ensured that the environment felt both immersive and playful.",
      image: "/assets/SweetScape/assets.png",
    },
    {
      num: "4.",
      step: "🎮 Unity Integration & Gameplay Programming",
      description:
        "The assets were imported into Unity, where I scripted interactive gameplay elements. Players collect floating toffees, navigate environmental barriers, and receive directional guidance from characters. Colliders, triggers, and movement logic were coded to ensure smooth and intuitive player interaction.",
      image: "/assets/SweetScape/gameplay.png",
      video: "/assets/SweetScape/gameplay.mp4",
    },
    {
      num: "5.",
      step: "🔊 Sound Design & Feedback Integration",
      description:
        "Sound played a key role in SweetScape’s charm. Inspired by SpongeBob-like squishy walking sounds, I created playful audio cues for Bubbles' movements and interactions. Character dialogue was paired with raspy or pirate-like voice clips, enriching the narrative immersion.",
      image: "/assets/SweetScape/sound.png",
    },
  ],
};

const features = {
  title: "Features: Explore, Collect, and Escape 🍬🏃",
  items: [
    {
      num: "1.",
      feature: "🍪 Interactive Dessert World",
      description:
        "Explore a fully realized dessert-themed island, where every step reveals larger-than-life treats, from floating donuts to chocolate syrup rivers, creating a feast for the senses.",
      image: "/assets/SweetScape/world.png",
      video: "/assets/SweetScape/gameplay.mp4",
    },
    {
      num: "2.",
      feature: "👶 Play as Bubbles the Baby Explorer",
      description:
        "Control Bubbles, an adorable waddling baby with a curious spirit, and guide him through the sugary landscape while solving light puzzles and avoiding mischievous obstacles.",
      image: "/assets/SweetScape/bubbles.png",
    },
    {
      num: "3.",
      feature: "🍭 Collectibles & Challenges",
      description:
        "Collect scattered toffees to unlock new paths and progress through the world. Each area offers unique environmental challenges, requiring clever exploration to overcome.",
      image: "/assets/SweetScape/collectibles.png",
    },
    {
      num: "4.",
      feature: "🎙️ Character Interactions & Guidance",
      description:
        "Meet quirky inhabitants like Old Jerry the Cherry and Lawrence the Orange. Each character offers unique dialogue and hints, shaping Bubbles' journey and the overall narrative.",
      image: "/assets/SweetScape/characters.png",
    },
    {
      num: "5.",
      feature: "🌈 Vibrant Visual Design & Audio Feedback",
      description:
        "With a playful color palette of bright pinks, blues, and yellows, every visual element is designed to captivate younger audiences. Audio feedback, from squishy footsteps to character voices, enhances player immersion.",
      image: "/assets/SweetScape/visuals.png",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Skills & Learnings 🛠️",
  description: [
    {
      sub: "3D Modeling & Texturing",
      bullet:
        "Created all environment and character models in Autodesk Maya, applying vibrant textures to enhance the visual appeal of the dessert-themed world.",
    },
    {
      sub: "Game Development",
      bullet:
        "Built the interactive world in Unity, implementing player movement, collectible systems, environmental barriers, and character interactions using C# scripting.",
    },
    {
      sub: "Narrative & World Building",
      bullet:
        "Crafted the backstory, character bios, and world lore to create a cohesive and imaginative game environment that blends storytelling with exploration gameplay.",
    },
    {
      sub: "Sound Design",
      bullet:
        "Designed and integrated playful sound effects, including character voices and environmental audio, to enhance player engagement.",
    },
    {
      sub: "Iterative Prototyping",
      bullet:
        "Refined gameplay through multiple rounds of user testing and iteration, ensuring the mechanics were intuitive and the world visually compelling.",
    },
  ],
  skillList: [
    { icon: <SiAutodeskmaya />, name: "Autodesk Maya" },
    { icon: <SiUnity />, name: "Unity" },
    { icon: <FaPaintBrush />, name: "Texturing" },
    { icon: <FaGamepad />, name: "Game Design" },
    { icon: <FaVolumeUp />, name: "Sound Design" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
  ],
};

const SweetScape = () => {
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
                        className="rounded-lg "
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
                        className="rounded-lg h-[500px] object-contain"
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
                          className="rounded-lg h-[500px] object-contain"
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

export default SweetScape;
