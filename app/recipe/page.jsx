"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";
import { FaCss3, FaJs, FaHtml5, FaBootstrap, FaNodeJs } from "react-icons/fa";

import { SiAdobexd, SiEjs, SiExpress, SiMysql } from "react-icons/si";

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
  title: "RecipeRoadmap: Your Personalized Culinary Journal 🍳",
  description:
    "RecipeRoadmap is a personal recipe management web app designed to capture and organize your culinary creations and favorite dishes in one place. Developed entirely as a solo full-stack project, RecipeRoadmap allowed me to deepen my understanding of CRUD (Create, Read, Update, Delete) functionality while working with  Node.js, MySQL, and EJS templating.\n\nThe app serves as a digital recipe journal, enabling users to log new recipes, update them with new ingredients or techniques, and remove outdated entries. Inspired by the simplicity of traditional notebooks but enhanced with modern web capabilities, RecipeRoadmap emphasizes both intuitive design and robust backend functionality. The focus was to create a seamless blend of simplicity, flexibility, and reliability — a companion for both casual home cooks and passionate chefs.",
  info: [
    {
      fieldName: "My Role",
      fieldValue:
        "Solo Full-Stack Developer — Responsible for design, development, and deployment.",
      image: "/assets/RecipeRoadmap/1.png",
    },
    {
      fieldName: "Team Members",
      fieldValue: "Independent Project (1 Member)",
      image: "/assets/RecipeRoadmap/2.png",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Waterfall — From initial concept to final deployment, with clear documentation at each phase.",
    },
    {
      fieldName: "Location",
      fieldValue: "Developed Remotely — Toronto, ON, Canada",
    },
  ],
};

const process = {
  title1: "RecipeRoadmap: From Concept to Kitchen Companion 🥘",
  title2: "Iterative Development & Feature Refinement 🔄",
  items: [
    {
      num: "1.",
      step: "🧐 Ideation & User Needs Analysis",
      description:
        "The project began with identifying a gap in personal recipe management tools. Many apps are either too complex (geared towards professional chefs) or too simplistic (lacking edit/delete features). RecipeRoadmap was envisioned as a middle ground, blending ease of use with practical CRUD functionality — perfect for everyday users documenting their evolving cooking journeys.",
    },
    {
      num: "2.",
      step: "📐 Wireframing & Architecture Planning",
      description:
        "Initial wireframes focused on creating a clean, distraction-free interface where recipes could be viewed, edited, or removed in just a few clicks. The EJS templating engine  was chosen to dynamically render recipes and provide a seamless user experience. The backend architecture was designed following the MVC pattern, ensuring a clear separation between data, logic, and presentation.",
    },
    {
      num: "3.",
      step: "💻 Backend Development & Database Integration",
      description:
        "The backend was built using Node.js and Express.js, handling routing, server-side logic, and database interactions.  MySQL  served as the relational database, with recipes stored as individual entries containing titles, ingredients, steps, and optional images. Full  CRUD functionality  was implemented, allowing users to create new recipes, view existing ones, update them as needed, and delete outdated or unwanted entries.",
    },
    {
      num: "4.",
      step: "🔎 Testing & User Experience Refinement",
      description:
        "Manual testing covered all CRUD operations, ensuring error-free functionality even with complex recipes containing extensive ingredients or steps. User feedback emphasized the importance of clear navigation and fast response times, leading to optimizations such as  query indexing, form validation, and lazy loading of recipe images.",
    },
    {
      num: "5.",
      step: "🚀 Final Deployment & Optimization",
      description:
        "RecipeRoadmap was deployed as a lightweight, responsive web app, designed to work smoothly on both desktops and mobile devices. Final optimizations included security enhancements to prevent SQL injection, input sanitization, and performance tuning to ensure that even large recipe databases load quickly. Plans for future enhancements include user authentication and collaborative recipe sharing.",
      image: "/assets/RecipeRoadmap/1.png",
    },
  ],
};

const features = {
  title: "Features: Your Personal Culinary Roadmap 🚀🍴",
  items: [
    {
      num: "1.",
      feature: "📝 Recipe Creation & Organization",
      description:
        "Users can easily create and store recipes, complete with ingredients, preparation steps, and optional images. Each entry can be categorized, allowing for intuitive organization (e.g., Desserts, Appetizers, Main Courses).",
      image: "/assets/RecipeRoadmap/3.png",
    },
    {
      num: "2.",
      feature: "✏️ Full CRUD Functionality",
      description:
        "Every recipe can be edited to add new ingredients, adjust cooking times, or incorporate new techniques. Outdated recipes can be deleted with a single click, ensuring the digital recipe box stays current.",
      image: "/assets/RecipeRoadmap/2.png",
    },
    {
      num: "3.",
      feature: "📂 MySQL-Powered Persistent Storage",
      description:
        "All recipes are stored in a structured MySQL database, enabling fast retrieval, efficient querying, and reliable data persistence across sessions.",
    },
    {
      num: "4.",
      feature: "📊 Recipe Dashboard with Dynamic Views",
      description:
        "The main dashboard dynamically displays all recipes using EJS templating, with real-time updates when recipes are added, modified, or deleted.",
    },
    {
      num: "5.",
      feature: "🔒 Security & Data Validation",
      description:
        "User input is sanitized to prevent malicious entries, and the backend features SQL injection protection, ensuring secure data handling throughout the app.",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Methodologies & Learnings 🛠️",
  description: [
    {
      sub: "Full-Stack Development",
      bullet:
        "Built the entire application independently using Node.js  and Express.js, integrating front-end templates with back-end logic and database operations.",
    },
    {
      sub: "MySQL Database Management",
      bullet:
        "Designed and managed a relational MySQL database, ensuring efficient storage and retrieval of structured recipe data. Implemented relational techniques to handle categories and tags.",
    },
    {
      sub: "Templating with EJS",
      bullet:
        "Leveraged EJS to create dynamic, reusable HTML templates for the recipe dashboard and detailed recipe views, ensuring consistency across the app.",
    },
    {
      sub: "CRUD Operations & User Interactions",
      bullet:
        "Gained hands-on experience implementing Create, Read, Update, Delete functionality across all recipe entries, enabling intuitive and responsive user interaction.",
    },
    {
      sub: "Waterfall Development Process",
      bullet:
        "Followed a structured Waterfall approach, starting with research and wireframing, followed by development, testing, and deployment.",
    },
  ],
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiEjs />, name: "EJS" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
  ],
};

const RecipeRoadmap = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center py-12"
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
          <TabsList className="flex flex-col gap-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="progression">Process</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="toolkit">Toolkit</TabsTrigger>
          </TabsList>

          <div className="w-full">
            {/* About Section */}
            <TabsContent
              value="about"
              className="flex flex-col xl:flex-row gap-8"
            >
              <div className="flex flex-col gap-6 w-full xl:w-1/2">
                <h3 className="xl:text-3xl text-2xl font-bold mb-6 text-center">
                  {about.title}
                </h3>
                <p className="text-white/60">{about.description}</p>
                <ul className="flex flex-col gap-2">
                  {about.info.map((item, index) => (
                    <li key={index}>
                      <span className="text-accent">{item.fieldName}:</span>
                      <span> {item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images - only render if they exist */}
              <div className="grid gap-3 xl:w-1/2">
                {about.info.map((item, index) =>
                  item.image ? (
                    <div
                      key={index}
                      className="bg-[#232329] rounded-xl flex justify-center items-center"
                    >
                      <Image
                        src={item.image}
                        alt={item.fieldName}
                        width={450}
                        height={400}
                        className="rounded-lg object-cover h-[350px]"
                      />
                    </div>
                  ) : null
                )}
              </div>
            </TabsContent>

            {/* Process Section */}
            <TabsContent value="progression">
              <h3 className="xl:text-3xl text-2xl font-bold mb-6 text-center">
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

                    {/* Conditional image display */}
                    {item.image && (
                      <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center">
                        <Image
                          src={item.image}
                          alt={item.step}
                          width={400}
                          height={200}
                          className="rounded-lg h-[300px] object-cover"
                        />
                      </div>
                    )}

                    {/* Conditional video display */}
                    {item.video && (
                      <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center">
                        <ReactPlayer
                          url={item.video}
                          controls
                          width="100%"
                          height="100%"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Features Section */}
            <TabsContent value="features">
              <h3 className="xl:text-3xl text-2xl font-bold mb-6 text-center">
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

                    {/* Conditional image display */}
                    {item.image && (
                      <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center">
                        <Image
                          src={item.image}
                          alt={item.feature}
                          width={400}
                          height={200}
                          className="rounded-lg h-[300px] object-cover"
                        />
                      </div>
                    )}

                    {/* Conditional video display */}
                    {item.video && (
                      <div className="bg-[#1a1a1a] p-2 rounded-xl flex justify-center items-center">
                        <ReactPlayer
                          url={item.video}
                          controls
                          width="100%"
                          height="100%"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Toolkit Section */}
            <TabsContent value="toolkit">
              <h3 className="xl:text-3xl text-2xl font-bold mb-6 text-center">
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

              {/* Skills */}
              <h4 className="text-2xl font-bold mt-6 mb-4">
                Technologies & Tools
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {toolkit.skillList.map((skill, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center">
                        <div className="text-5xl group-hover:text-accent transition-all duration-100">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
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

export default RecipeRoadmap;
