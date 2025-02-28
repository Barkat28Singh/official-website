"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";
import { FaCss3, FaJs, FaHtml5, FaNodeJs } from "react-icons/fa";

import { SiFirebase, SiMysql, SiPassport } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "/components/ui/tooltip";

import { motion } from "framer-motion";
import Image from "next/image";

// About, Process, Features, Toolkit Data (same as you provided but fixed)
const about = {
  title:
    "Butterfly: A Mini Social Platform for Creative Expression & Connection 🦋",
  description:
    "Butterfly is a creative social media platform designed to empower users to express themselves beyond conventional boundaries. Inspired by the need for more versatile, imagination-driven platforms, Butterfly allows users to upload and showcase a variety of content formats, from images and PDFs to digital art and creative documents. Unlike traditional social apps, Butterfly's multidisciplinary upload functionality celebrates the diversity of human imagination.\n\nAs the Back-End Developer for this project, I focused on building secure, scalable infrastructure using Node.js, MySQL, and Firebase Authentication, enabling real-time content management and seamless multi-platform login (Google, Facebook, and Email). Butterfly also introduces a 'Topic of the Day' discussion group, where users can engage in spontaneous, thought-provoking conversations across philosophy, science, pop culture, and more — encouraging curiosity and learning something new every day.",
  info: [
    {
      fieldName: "My Role",
      fieldValue: "Back-End Developer",
    },
    {
      fieldName: "Team Members",
      fieldValue:
        "2 Members — Collaborated closely with a Front-End Developer to build user-centric features and ensure seamless integration.",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Agile — Iterative sprints focused on adding and refining features based on user feedback.",
    },
    {
      fieldName: "Location",
      fieldValue: "Humber College North - Etobicoke, ON, Canada",
    },
  ],
};

const process = {
  title1: "Butterfly: Ideation, Research 🧐, Development & Evolution 🚀",
  items: [
    {
      num: "1.",
      step: "📚 Research & Conceptualization",
      description:
        "The project started with research into emerging social platforms, analyzing gaps in creative self-expression and file-sharing capabilities. Our goal was to build a hybrid social-media-meets-content-platform, where users could share images, PDFs, and artwork in a single space. This was supported by research on how platforms like Instagram limit content formats, creating opportunities for innovation.",
    },
    {
      num: "2.",
      step: "📝 Wireframing & User Flow Design",
      description:
        "Working closely with the Front-End Developer, we mapped out the entire user flow, from account creation to uploading content and joining discussions. Wireframes were built using Adobe XD, focusing on simplicity, creativity, and multi-file support. Special attention was given to the user dashboard, ensuring smooth file management across formats.",
    },
    {
      num: "3.",
      step: "💻 Back-End Development & Database Integration",
      description:
        "The back-end was built using Node.js and Express.js, managing user accounts, file uploads, and chat history storage. User authentication and authorization were powered by Firebase Authentication, enabling login via Google, Facebook, and email/password. The chat system and user content storage leveraged MySQL, implementing full CRUD operations for editing, deleting, and updating posts and messages.",
    },
    {
      num: "4.",
      step: "💬 Real-Time Discussion Group & Topic Generator",
      description:
        "A unique feature of Butterfly is its 'Topic of the Day' discussion group, which challenges users to engage with randomly generated conversation prompts. Topics are pulled from a curated list of philosophical, cultural, and trending questions, fostering curiosity and cross-cultural exchange. This feature was powered by server-side logic in Node.js, dynamically serving new topics each day.",
    },
    {
      num: "5.",
      step: "🚀 Testing, Refinement & Deployment",
      description:
        "Thorough testing ensured seamless file uploads, correct file-type validation, and robust real-time chat functionality. Performance optimization included caching user profiles and reducing database query redundancy. Following successful beta testing, Butterfly was deployed as a responsive web app, with future plans to expand into mobile platforms.",
    },
  ],
};

const features = {
  title: "Features: Express, Explore & Connect 🦋",
  items: [
    {
      num: "1.",
      feature: "📂 Multi-Format Upload Dashboard",
      description:
        "Users can upload and showcase a wide variety of content formats — from standard images to PDFs, digital artwork, and creative documents — directly on their profiles and the public feed, encouraging multidisciplinary creativity.",
    },
    {
      num: "2.",
      feature: "🔐 Flexible Multi-Platform Authentication",
      description:
        "Sign-in and Sign-out powered by Firebase Authentication, supporting seamless login via Google, Facebook, and email/password, ensuring secure and flexible user access.",
    },
    {
      num: "3.",
      feature: "💬 Random 'Topic of the Day' Discussion Group",
      description:
        "Users can join daily discussions on randomly selected topics — ranging from deep philosophical questions to trending cultural debates — fostering intellectual curiosity and community bonding.",
    },
    {
      num: "4.",
      feature: "🗂️ Real-Time CRUD Chat System",
      description:
        "A fully functional chat system allows users to send, edit, and delete messages in real-time. Messages are stored in MySQL, enabling persistent chat history with user-friendly interfaces.",
    },
    {
      num: "5.",
      feature: "🤖 AI-Powered Chatbot Support",
      description:
        "A 'Contact Us' page offers users direct interaction with Butterfly's chatbot, providing assistance, answering FAQs, and enhancing user engagement with conversational AI elements.",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Methodologies & Learnings 🛠️",
  description: [
    {
      sub: "Backend Development & Database Integration",
      bullet:
        "Built RESTful APIs using Node.js and Express.js  , managing user data, file uploads, and chat history in MySQL. Implemented full CRUD functionality for posts and chats.",
    },
    {
      sub: "Authentication & Microservices",
      bullet:
        "Integrated Firebase Authentication, supporting Google, Facebook, and email/password logins. Applied microservices for authentication and content moderation.",
    },
    {
      sub: "Real-Time Chat & Content Handling",
      bullet:
        "Developed real-time messaging with MySQL storage, supporting message editing, deleting, and history retrieval, ensuring smooth conversation flow.",
    },
    {
      sub: "Topic Generator & Curated Discussions",
      bullet:
        "Built a server-side topic generator serving random conversation starters daily, fostering creative engagement.",
    },
    {
      sub: "Agile Development Process",
      bullet:
        "Used Agile methodologies with weekly sprints, regular retrospectives, and incremental feature releases to adapt to feedback and evolving project goals.",
    },
  ],
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiPassport />, name: "Passport.js" },
    { icon: <SiFirebase />, name: "Firebase Auth" },
    { icon: <SiMysql />, name: "MySQL" },
  ],
};

const Butterfly = () => {
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
          href="/web"
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

export default Butterfly;
