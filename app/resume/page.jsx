"use client";

import {
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiJquery,
  SiFirebase,
  SiAdobecreativecloud,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "/components/ui/tooltip";

import { ScrollArea } from "/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: "lorem",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Barkat Singh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 647 675 4385",
    },
    {
      fieldName: "Email",
      fieldValue: "barkat01@mail.utoronto.ca",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Location",
      fieldValue: "Toronto-Canada",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Farsi, Punjabi",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description: "lorem",
  items: [
    {
      company: "",
      position: "",
      duration: "year-to-year",
    },
    {
      company: "",
      position: "",
      duration: "year-to-year",
    },
    {
      company: "",
      position: "",
      duration: "year-to-year",
    },
    {
      company: "",
      position: "",
      duration: "year-to-year",
    },
    {
      company: "",
      position: "",
      duration: "year-to-year",
    },
    {
      company: "",
      position: "",
      duration: "year-to-year",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description: "lorem",
  items: [
    {
      institution: "University of Toronto-Mississauga",
      degree: "",
      duration: "year-to-year",
    },
    {
      institution: " Humber College-North",
      degree: "",
      duration: "year-to-year",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "lorem",
  skillList: [
    {
      icon: <FaHtml5></FaHtml5>,
      name: "html 5",
    },
    {
      icon: <FaCss3></FaCss3>,
      name: "Css 3",
    },
    {
      icon: <FaJs></FaJs>,
      name: "javascript",
    },
    {
      icon: <FaReact></FaReact>,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs></SiNextdotjs>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss></SiTailwindcss>,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs></FaNodeJs>,
      name: "node.js",
    },
    {
      icon: <SiJquery></SiJquery>,
      name: "jquery",
    },
    {
      icon: <SiFirebase></SiFirebase>,
      name: "firebase",
    },
    {
      icon: <SiMysql></SiMysql>,
      name: "mysql",
    },
    {
      icon: <SiMongodb></SiMongodb>,
      name: "mongodb",
    },
    {
      icon: <FaBootstrap></FaBootstrap>,
      name: "bootstrap",
    },
    {
      icon: <FaFigma></FaFigma>,
      name: "figma",
    },
    {
      icon: <SiAdobecreativecloud></SiAdobecreativecloud>,
      name: "Adobe cc",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 l:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[80px]"
        >
          <TabsList className="flex flex-col w-full max-w--[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[60px] h-[6px] rounded-full bg-accent">
                              <p className="text-white/60">{item.company}</p>
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                {/* <ScrollArea className="h-[400px]"> */}
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[60px] h-[6px] rounded-full bg-accent">
                            <p className="text-white/60">{item.institution}</p>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {/* </ScrollArea> */}
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex=col gap=[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <TooltipProvider delay-duration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center-group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
