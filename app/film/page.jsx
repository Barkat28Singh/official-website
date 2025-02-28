"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";

import { FaCss3, FaJs, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiAdobexd, SiPassport, SiExpress } from "react-icons/si";

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
  title: "Film Bucket: A Comprehensive Entertainment Platform 🎥🍿",
  description:
    "Film Bucket is a full-stack web application inspired by IMDb, designed to offer movie enthusiasts an intuitive and content-rich browsing experience. Built using the Online Movie Database API from RapidAPI, it allows users to browse movies, explore detailed actor profiles, and even test their film knowledge with trivia quizzes.\n\nAs the Tech Lead, Full-Stack Developer, and UX/UI Designer, I oversaw the entire development lifecycle, ensuring seamless integration of front-end and back-end systems. The platform is built following the MVC architectural pattern, maintaining separation of concerns between models, views, and controllers.",
  info: [
    {
      fieldName: "My Role",
      fieldValue: "Tech Lead, Full-Stack Developer, UX/UI Designer",
    },
    {
      fieldName: "Team Members",
      fieldValue:
        "3 Members — Collaborated on design, development, and research.",
      image: "/assets/FilmBucket/team.png",
    },
    {
      fieldName: "Methodology Used",
      fieldValue: "Waterfall — Sequential process from planning to deployment.",
      image: "/assets/FilmBucket/methodology.png",
    },
    {
      fieldName: "Location",
      fieldValue: "Humber College North - Etobicoke, ON, Canada",
      image: "/assets/FilmBucket/location.png",
    },
  ],
};

const process = {
  title1: "Film Bucket: Concept, Foundation 🎬 & Full-Stack Evolution 🚀",
  items: [
    {
      num: "1.",
      step: "📚 Research & Ideation",
      description:
        "We started by analyzing platforms like IMDb to understand user expectations. Market research and user personas helped us identify core features: movie search, actor bios, and interactive trivia. API research ensured that the chosen data source (RapidAPI) could support these features.",
      image: "/assets/FilmBucket/research.png",
    },
    {
      num: "2.",
      step: "📝 Wireframing & Prototyping",
      description:
        "We created wireframes using Adobe XD to map out the user flow — from browsing movies to viewing cast details. Our goal was to make navigation seamless while maintaining a visual aesthetic that complemented the film industry.",
      image: "/assets/FilmBucket/wireframes.png",
    },
    {
      num: "3.",
      step: "💻 Development & Integration",
      description:
        "We followed the MVC pattern, separating data (models), application logic (controllers), and UI (views). The back end was built using Node.js and Express.js, with Passport.js managing secure authentication. AJAX and jQuery handled real-time data retrieval from RapidAPI.",
      image: "/assets/FilmBucket/dev.png",
    },
    {
      num: "4.",
      step: "🔍 Testing & Refinement",
      description:
        "During the testing phase, we conducted usability testing, API rate limit stress tests, and performance optimization using image compression and lazy loading. Based on feedback, we adjusted search filters, improved error handling, and refined the trivia feature.",
      image: "/assets/FilmBucket/testing.png",
    },
    {
      num: "5.",
      step: "🚀 Deployment & Launch",
      description:
        "Film Bucket was deployed as a responsive, mobile-friendly web app. We created promotional assets (banners, video teasers) to support the launch. Final optimizations ensured fast load times and a smooth user experience across all devices.",
      image: "/assets/FilmBucket/launch.png",
    },
  ],
};

const features = {
  title: "Features: A Cinematic Exploration Hub 🍿🎥",
  items: [
    {
      num: "1.",
      feature: "📺 Real-Time Movie & TV Show Data",
      description:
        "Film Bucket dynamically fetches movie and TV data from the Online Movie Database API, ensuring up-to-date content on trending titles, actor bios, and box office hits.",
      image: "/assets/FilmBucket/movies.png",
    },
    {
      num: "2.",
      feature: "🌟 Actor Profiles & Filmographies",
      description:
        "Explore comprehensive actor profiles with biographies, filmographies, and personal trivia. The system even highlights actors born on the current date.",
      image: "/assets/FilmBucket/actors.png",
    },
    {
      num: "3.",
      feature: "🎮 Interactive Movie Trivia",
      description:
        "Engage with fun trivia quizzes that test users’ knowledge of movies and actors, combining pre-set questions and real-time data pulled from the API.",
      image: "/assets/FilmBucket/trivia.png",
    },
    {
      num: "4.",
      feature: "👤 Personalized User Profiles",
      description:
        "Logged-in users can personalize profiles, save favorites, and upload profile pictures using Multer.js. Profiles dynamically update to track viewed titles.",
      image: "/assets/FilmBucket/profiles.png",
    },
    {
      num: "5.",
      feature: "🔎 Dynamic Search with Live Suggestions",
      description:
        "The search bar offers real-time suggestions as users type, powered by AJAX and RapidAPI, ensuring fast and accurate content discovery.",
      image: "/assets/FilmBucket/search.png",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Methodologies & Learnings 🛠️",
  description: [
    {
      sub: "Full-Stack Development",
      bullet:
        "Built a fully functional application using Node.js, Express.js, and jQuery, integrating front-end and back-end components seamlessly.",
    },
    {
      sub: "API Integration & Data Handling",
      bullet:
        "Integrated the Online Movie Database API using AJAX, handling live data feeds, caching strategies, and error handling.",
    },
    {
      sub: "MVC Architecture",
      bullet:
        "Employed the MVC pattern to cleanly separate concerns between models (data), views (UI), and controllers (logic), improving maintainability.",
    },
    {
      sub: "Authentication & Security",
      bullet:
        "Implemented user authentication using Passport.js, bcrypt for secure passwords, and session management for persistent logins.",
    },
    {
      sub: "Waterfall Development Process",
      bullet:
        "Followed a structured Waterfall approach — from requirement gathering to deployment, ensuring thorough documentation and phase-wise sign-offs.",
    },
  ],
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiPassport />, name: "Passport.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
  ],
};
const FilmBucket = () => {
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

export default FilmBucket;
