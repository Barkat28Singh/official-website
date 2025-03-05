"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";

import {} from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobecreativecloud,
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
  title: "Happy by Pharrell Williams: Lyric Video 🎶✨",
  description:
    "This vibrant motion design project brings Pharrell Williams' iconic song 'Happy' to life through kinetic typography and playful animations. Crafted as a solo project at Humber College, the lyric video combines illustration, animation, and motion design principles to create an engaging visual experience.\n\nUsing Adobe Illustrator and Photoshop, I created all custom assets, from expressive stick figures to colorful background elements. Adobe XD was used to storyboard each scene, mapping out transitions and timing before assembling the final video in After Effects. Adobe Media Encoder was used to optimize the final video for various platforms. The project emphasizes creative storytelling through motion design, blending typography with fluid transitions to enhance the energy of the song.",
  info: [
    {
      fieldName: "My Role",
      fieldValue: "Motion Designer, Illustrator, Animator",
    },
    {
      fieldName: "Team Members",
      fieldValue: "Independent Project (1 Member)",
      image: "/assets/HappyLyricVideo/team.png",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Iterative Design Process — Sketch, Storyboard, Animate, Review.",
      image: "/assets/HappyLyricVideo/methodology.png",
    },
    {
      fieldName: "Location",
      fieldValue: "Humber College - Toronto, ON, Canada",
      image: "/assets/HappyLyricVideo/location.png",
    },
  ],
};

const process = {
  title1: "Happy Lyric Video: From Concept to Animated Reality 🎥💃",
  items: [
    {
      num: "1.",
      step: "📚 Research & Concept Development",
      description:
        "The project began with research into kinetic typography and music video trends, particularly focusing on playful, bold visuals that match the upbeat tempo of 'Happy.' I developed initial mood boards drawing inspiration from street art, bold typographic layouts, and retro animation styles.",
      image: "/assets/HappyLyricVideo/research.png",
    },
    {
      num: "2.",
      step: "📝 Sketching & Storyboarding",
      description:
        "I sketched out six distinct scenes, mapping out the lyrics’ flow, character actions, and visual transitions. Using Adobe XD, I created wireframe animations to pre-visualize key scenes, experimenting with typographic placement, scale shifts, and color schemes.",
      image: "/assets/HappyLyricVideo/storyboard.png",
      video: "/assets/HappyLyricVideo/storyboard.mp4",
    },
    {
      num: "3.",
      step: "🎨 Asset Creation & Visual Design",
      description:
        "Each visual element, from stick figure dancers to kinetic type, was designed in Adobe Illustrator and Photoshop. I created color palettes matching the song's bright, optimistic mood, incorporating playful graphics like confetti bursts, speech bubbles, and bouncing letters.",
      image: "/assets/HappyLyricVideo/assets.png",
    },
    {
      num: "4.",
      step: "🎞️ Animation & Motion Graphics",
      description:
        "Assets were imported into After Effects where I animated each scene, aligning movements precisely with the song's beats. Kinetic typography was timed to emphasize key lyrics, with smooth zoom-ins, rotations, and bounces keeping the energy high. Scene transitions used bold wipes and layered typography effects.",
      image: "/assets/HappyLyricVideo/animation.png",
    },
    {
      num: "5.",
      step: "📼 Rendering & Final Touches",
      description:
        "The final video was exported using Adobe Media Encoder, ensuring optimal quality across platforms. Before submission, I conducted peer reviews and refined timing, color balance, and transitions to ensure seamless flow.",
      image: "/assets/HappyLyricVideo/rendering.jpg",
      video: "/assets/HappyLyricVideo/finalRender.mp4",
    },
  ],
};

const features = {
  title: "Features: Dynamic, Playful & Story-Driven Animation 🎶✨",
  items: [
    {
      num: "1.",
      feature: "🎨 Custom Illustrated Visuals",
      description:
        "Every character, background, and prop was custom-designed using Adobe Illustrator and Photoshop, tailored to match the song’s upbeat, joyful tone.",
      image: "/assets/HappyLyricVideo/customAssets.png",
    },
    {
      num: "2.",
      feature: "🔠 Kinetic Typography",
      description:
        "Lyrics appear dynamically through scaling, rotation, color shifts, and playful animation, enhancing the narrative and maintaining viewer engagement.",
      image: "/assets/HappyLyricVideo/typography.png",
    },
    {
      num: "3.",
      feature: "💫 Seamless Scene Transitions",
      description:
        "Scene transitions utilize creative wipes, zooms, and dynamic letter movements to maintain visual momentum without jarring cuts.",
      image: "/assets/HappyLyricVideo/location.png",
    },
    {
      num: "4.",
      feature: "🎶 Music Synced Animation",
      description:
        "Every motion — from character movements to typographic shifts — is synchronized with the beat, ensuring the visual energy complements the musical flow.",
      image: "/assets/HappyLyricVideo/methodology.png",
    },
    {
      num: "5.",
      feature: "📺 Platform-Optimized Export",
      description:
        "Final output was encoded with Adobe Media Encoder for optimal quality across YouTube, social platforms, and academic presentations.",
      image: "/assets/HappyLyricVideo/team.png",
      video: "/assets/HappyLyricVideo/finalRender.mp4",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Methodologies & Learnings 🛠️",
  description: [
    {
      sub: "Illustration & Asset Design",
      bullet:
        "Crafted all visual elements in Adobe Illustrator and Adobe Photoshop, blending hand-drawn and vector styles for maximum flexibility.",
    },
    {
      sub: "Storyboarding & Planning",
      bullet:
        "Used Adobe XD to map out each frame’s timing, transitions, and lyric integration, ensuring a cohesive visual story.",
    },
    {
      sub: "Motion Design & Animation",
      bullet:
        "Implemented all animations in After Effects, utilizing keyframes, motion paths, and effects to create dynamic, beat-synced visuals.",
    },
    {
      sub: "Audio-Visual Synchronization",
      bullet:
        "Perfected timing alignment between visuals and music using After Effects’ audio waveform visualization tools.",
    },
    {
      sub: "Iterative Review Process",
      bullet:
        "Conducted multiple review cycles, refining based on peer feedback and personal critiques to enhance clarity, pacing, and visual appeal.",
    },
  ],
  skillList: [
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiAdobeaftereffects />, name: "Adobe After Effects" },
    { icon: <SiAdobecreativecloud />, name: "Adobe Media Encoder" },
  ],
};

const Happy = () => {
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
          href="/motion"
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
                        className="rounded-lg h-[350px] object-contain"
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
                          className="rounded-lg h-[350px] object-contain"
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

export default Happy;
