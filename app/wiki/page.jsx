"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";

import { FaMobileAlt } from "react-icons/fa";
import { SiAdobexd, SiCanva, SiAdobeillustrator } from "react-icons/si";

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
  title:
    "Wikipedia Redesign: Enhancing Usability & Information Architecture 📖",
  description:
    "The Wikipedia redesign project focused on improving the platform's user experience and accessibility while maintaining its core structure. Through extensive research, usability evaluation, and iterative design, we enhanced content organization, navigation, and readability. This project was executed in a team of three and aimed to address common usability issues found in the existing Wikipedia interface.\n\nOur key improvements included a refined information architecture, a clearer content hierarchy, and a responsive UI for both web and mobile users. The new design incorporates a structured layout that simplifies navigation and enhances user interaction. By implementing interactive elements and improving visual contrast, we ensured a smoother and more intuitive browsing experience.",
  info: [
    {
      fieldName: "My Role",
      fieldValue: "UX/UI Designer, Researcher",
      image: "/assets/Wikipedia/launch.png",
    },
    {
      fieldName: "Team Members",
      fieldValue:
        "3 Members — Collaborated on wireframes, research, and interactive prototyping.",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Iterative Design — Research, Wireframing, Prototyping, and Usability Testing.",
    },
    {
      fieldName: "Location",
      fieldValue: "University of Toronto - Mississauga, ON, Canada",
    },
  ],
};

const process = {
  title1: "Wikipedia Redesign: Research, Prototyping & User Testing 🔍",
  items: [
    {
      num: "1.",
      step: "📚 Research & Information Architecture Analysis",
      description:
        "We started by analyzing Wikipedia's existing structure, focusing on navigation, content flow, and accessibility. A Node-Link diagram was created to visualize the current architecture and propose improvements, ensuring better categorization of content across multiple pages instead of a single long-scroll format.",
      image: "/assets/Wikipedia/research.png",
    },
    {
      num: "2.",
      step: "📝 Wireframing & Layout Redesign",
      description:
        "Using Balsamiq and Adobe XD, we developed wireframes for desktop and mobile versions. Key refinements included improved navigation placement, a simplified global menu, better structured content sections, and enhanced readability through optimized typography and spacing.",
      image: "/assets/Wikipedia/wireframes.png",
    },
    {
      num: "3.",
      step: "💻 Prototyping & Interactive Elements",
      description:
        "We built interactive prototypes with hover effects, collapsible menus, and improved search functionality. Special attention was given to structural, associative, and utility navigation, ensuring an intuitive and accessible user experience.",
      image: "/assets/Wikipedia/prototyping.png",
    },
    {
      num: "4.",
      step: "🔍 Usability Testing & Iterative Improvements",
      description:
        "Usability tests were conducted with real users to evaluate accessibility, navigation ease, and content discoverability. Based on feedback, we refined the search experience, added visual cues for better engagement, and optimized the contrast ratio for readability.",
      image: "/assets/Wikipedia/testing.png",
    },
    {
      num: "5.",
      step: "🚀 Final Implementation & Documentation",
      description:
        "The final prototype was documented with detailed design decisions, showcasing improvements in layout, usability, and user engagement. We created both web and mobile prototypes, ensuring responsive adaptation across devices.",
      image: "/assets/Wikipedia/launch.png",
    },
  ],
};

const features = {
  title: "Features: A More Intuitive & Accessible Wikipedia 🏛️",
  items: [
    {
      num: "1.",
      feature: "📂 Improved Information Architecture",
      description:
        "Redesigned content structure using a Node-Link diagram approach, allowing for better categorization and navigation instead of long, unstructured pages.",
      image: "/assets/Wikipedia/architecture.png",
    },
    {
      num: "2.",
      feature: "🔍 Enhanced Search Functionality",
      description:
        "Implemented a redesigned search bar with auto-suggestions and better visual cues, making it easier for users to find relevant content efficiently.",
      image: "/assets/Wikipedia/search.png",
    },
    {
      num: "3.",
      feature: "🖥️ Responsive UI for Web & Mobile",
      description:
        "Ensured a seamless experience across different screen sizes with mobile-friendly layouts, collapsible menus, and adaptive content sections.",
      image: "/assets/Wikipedia/responsive.png",
    },
    {
      num: "4.",
      feature: "🎨 Improved Readability & Accessibility",
      description:
        "Adjusted typography, spacing, and contrast ratios to enhance readability, while ensuring compliance with WCAG accessibility standards.",
      image: "/assets/Wikipedia/accessibility.png",
    },
    {
      num: "5.",
      feature: "🛠️ Interactive Editing & Contribution Tools",
      description:
        "Redesigned the ‘Edit’ and ‘Create Page’ interfaces to provide a smoother editing experience, incorporating real-time feedback mechanisms and improved form design.",
      image: "/assets/Wikipedia/editting.png",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Research, Design & UX Methodologies 🛠️",
  description: [
    {
      sub: "User Research & Heuristic Evaluation",
      bullet:
        "Conducted extensive user research and heuristic evaluations to identify usability gaps and prioritize design improvements.",
    },
    {
      sub: "Information Architecture Optimization",
      bullet:
        "Utilized Node-Link diagrams and sitemap structuring to enhance Wikipedia’s navigation and content discoverability.",
    },
    {
      sub: "Wireframing & Prototyping",
      bullet:
        "Developed wireframes using Balsamiq and interactive prototypes with Adobe XD, focusing on usability, responsiveness, and engagement.",
    },
    {
      sub: "Accessibility & UI Enhancements",
      bullet:
        "Improved text contrast, font readability, and page structure to align with accessibility guidelines and ensure a frictionless experience.",
    },
    {
      sub: "Iterative Testing & Refinement",
      bullet:
        "Implemented feedback-driven iterative design improvements, refining prototypes based on real-world usability tests.",
    },
  ],
  skillList: [
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: <FaMobileAlt />, name: "Mobile-First Design" },
  ],
};

const Wiki = () => {
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
          href="/uxui"
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
                        className="rounded-lg object-contain h[350px]"
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
                        className="rounded-lg object-contain h[350px]"
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
                          className="rounded-lg object-contain h[350px]"
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

export default Wiki;
