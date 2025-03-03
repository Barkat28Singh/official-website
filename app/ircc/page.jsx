"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";

import { FaAccessibleIcon } from "react-icons/fa";
import { SiChatbot, SiContentful, SiAdobexd } from "react-icons/si";

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
    "IRCC Website Redesign: Enhancing Accessibility & Navigation for All 🌐🇨🇦",
  description:
    "The IRCC (Immigration, Refugees, and Citizenship Canada) website redesign project was a comprehensive UX/UI initiative aimed at solving core usability, accessibility, and information architecture challenges faced by users. Through in-depth research, user interviews, and usability testing, we identified critical pain points, including overwhelming content, inefficient navigation, lack of multilingual support, and poor accessibility features.\n\nAs one of three core contributors, I focused on improving the global navigation system, adding an AI-powered chatbot, enhancing accessibility options like font resizing, background adjustments, and multi-language support, all while streamlining redundant content to make the website more intuitive and user-friendly for diverse audiences including immigrants, students, legal professionals, and refugees.",
  info: [
    {
      fieldName: "My Role",
      fieldValue: "UX/UI Designer & Researcher",
    },
    {
      fieldName: "Team Members",
      fieldValue:
        "3 Members — Collaborated on user research, content analysis, wireframing, and prototyping.",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "User-Centered Design — Iterative process with user feedback at each phase.",
    },
    {
      fieldName: "Location",
      fieldValue: "University of Toronto Mississauga - Mississauga, ON, Canada",
    },
  ],
};

const process = {
  title1: "IRCC Redesign: Research, Analysis & Iterative Redesign Process 🔄",
  items: [
    {
      num: "1.",
      step: "📚 Research & Problem Identification",
      description:
        "We conducted content audits using Screaming Frog and performed extensive user research through interviews, observations, and secondary data analysis (including Reddit discussions). Users reported frustration with excessive content, overwhelming navigation, lack of accessibility, and redundant page structures. This research formed the foundation for the redesign strategy.",
    },
    {
      num: "2.",
      step: "📝 Wireframing & Prototyping",
      description:
        "We developed low-fidelity wireframes using Balsamiq, followed by high-fidelity prototypes in Adobe XD. Key focuses included restructuring the global navigation bar into a horizontal format, simplifying the homepage layout, and ensuring key services like application forms and processing times were easily accessible without deep link chains.",
    },
    {
      num: "3.",
      step: "🌍 Accessibility & Multilingual Features",
      description:
        "The new design added critical accessibility features including a language selector with diverse translation options, text resizing tools, and background contrast adjustment. These enhancements catered to users with visual impairments and non-English speakers, reflecting Canada's diverse population.",
    },
    {
      num: "4.",
      step: "🤖 AI Chatbot Integration",
      description:
        "We replaced the confusing search bar with a conversational AI chatbot that guides users directly to the pages and resources they need, reducing time spent navigating through excessive links and irrelevant content.",
    },
    {
      num: "5.",
      step: "📊 Usability Testing & Refinement",
      description:
        "The team conducted usability tests on the redesigned prototype, gathering feedback from students, new immigrants, and legal professionals. Their feedback validated improvements in navigation, reduced cognitive overload, and the effectiveness of the new accessibility features.",
    },
  ],
};

const features = {
  title: "Features: Simplifying Immigration Information Access 🚀",
  items: [
    {
      num: "1.",
      feature: "🌐 Horizontal Global Navigation Bar",
      description:
        "The previous vertical navigation was replaced with a user-friendly horizontal menu, improving visibility and reducing content overlap. Subcategories were refined and redundant sections removed.",
    },
    {
      num: "2.",
      feature: "📣 AI-Powered Chatbot",
      description:
        "A custom chatbot acts as a smart search assistant, allowing users to type queries and receive direct links to relevant forms, documents, and resources — eliminating the need for multi-step navigation.",
    },
    {
      num: "3.",
      feature: "♿ Comprehensive Accessibility Tools",
      description:
        "The redesign includes a toolbar for font resizing, background color adjustment, and language translation into multiple languages beyond English and French — improving inclusivity for diverse audiences.",
    },
    {
      num: "4.",
      feature: "📂 Streamlined Information Architecture",
      description:
        "Redundant pages were removed, subcategories were re-labeled with clearer titles, and critical sections like 'Processing Times' and 'Application Forms' were moved to the homepage for quick access.",
    },
    {
      num: "5.",
      feature: "📱 Mobile-Responsive Redesign",
      description:
        "The entire prototype was designed to be fully responsive, ensuring smooth navigation and usability across desktop, tablet, and mobile devices.",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Methodologies & Learnings 🛠️",
  description: [
    {
      sub: "User-Centered Research",
      bullet:
        "Conducted mixed-method research including user interviews, content audits, usability testing, and secondary research to identify critical UX pain points.",
    },
    {
      sub: "Information Architecture Overhaul",
      bullet:
        "Redesigned site structure to eliminate deep link chains, reduce redundant content, and simplify the labeling system for improved clarity.",
    },
    {
      sub: "Accessibility-First Design",
      bullet:
        "Integrated accessibility features including font resizing, background contrast adjustment, and multi-language support to accommodate a diverse user base.",
    },
    {
      sub: "Prototyping & Iterative Design",
      bullet:
        "Created wireframes and high-fidelity prototypes using Balsamiq and Adobe XD, incorporating iterative improvements based on real user feedback.",
    },
    {
      sub: "Collaborative Teamwork",
      bullet:
        "Worked closely with a team of three, ensuring seamless collaboration from research through final design, with clear task ownership and regular check-ins.",
    },
  ],
  skillList: [
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <FaAccessibleIcon />, name: "Accessibility Design" },
    { icon: <SiChatbot />, name: "AI Chatbot Integration" },
    {
      icon: <SiContentful />,
      name: "Content Audits & Information Architecture",
    },
  ],
};

const IRCC = () => {
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

export default IRCC;
