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
  description:
    "Hi, I’m Barkat Singh — a Full-Stack Developer and designer with a background in Applied Mathematics and Information Technology from the University of Toronto. My expertise spans HTML/CSS, JavaScript, Node.js, and design tools like Figma, Photoshop, and After Effects. I’ve led agile teams, delivered full-stack projects, and built solutions that are both functional and visually compelling. I thrive in collaborative environments, love solving real-world problems through tech, and constantly seek growth and inspiration. Beyond coding, I enjoy weight training, thrifting, cooking, reading self-help books, and playing poker with friends. Let’s connectand create an impact together!",
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
      fieldValue: "Toronto, ON, CA",
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
  description:
    "I have extensive experience as a Full-Stack Developer, Designer, and Project Lead. I've led cross-functional teams at UofT Web Dev Club, delivering successful full-stack projects and fostering team collaboration. At Humber College, I developed responsive web applications and designed user-centric UI/UX components. My internship at Jupitice involved enhancing websites and optimizing team workflows. Additionally, I supported academic success as a Program Assistant at UTM, managed administrative tasks at Aramark, and showcased creativity as a Creative Director at Open Design Collaboratory and Product Designer for Hydro Bag & Satch.",
  items: [
    {
      company: "UofT Web Dev Club",
      position: "Project Lead",
      duration: "2023-2024",
    },
    {
      company: "Humber College North",
      position: "Web Developer & Designer",
      duration: "2022-2023",
    },
    {
      company: "Jupitice – AEREN IT Solutions",
      position: "Junior Software Engineer Intern",
      duration: "2021-2021",
    },
    {
      company: "RGASC, UTM",
      position: "Program Assistant",
      duration: "2023-Present",
    },
    {
      company: "Aramark, UTM",
      position: "Administrative Assistant",
      duration: "2021-2022",
    },
    // {
    //   company: "Open Design Collaboratory",
    //   position: "Creative Director",
    //   duration: "2023-2024",
    // },
    // {
    //   company: "Hydro Bag & Satch",
    //   position: "Product Designer",
    //   duration: "2024-2024",
    // },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "I hold an Honours B.Sc. in Applied Mathematics and Communication, Culture & Information Technology from the University of Toronto Mississauga, where I was actively involved in the MCS Club, UofT Web Dev Club (Project Lead), and various student roles. I also earned a Web Design and Development Certificate from Humber College with a 91.5% grade, leading full-stack projects like Film-Bucket and Sweet Teeth. Additionally, I graduated from Strawberry Fields School in the non-medical stream, participating in athletics, swimming, and MUN leadership.",
  items: [
    {
      institution: "University of Toronto-Mississauga",
      degree: "Honours Bachelor of Science (HBsc)",
      field_of_study:
        "Double major in Applied Mathematics and Information Technology",
      duration: "2019-2024",
    },
    {
      institution: "Humber College-North",
      degree: "1-year Diploma program",
      field_of_study: "Web Development and Design",
      duration: "2022-2023",
    },
    {
      institution: "Strawberry Fields High School",
      degree: "XII ISC Certificate of Completetion",
      field_of_study:
        "Non-Medical Stream: Physics, Chemistry, Mathematics, Computer Science",
      duration: "2017-2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    " I am ambitious Full-Stack Web Developer and Designer with skills in HTML/CSS, JavaScript, Node.js, Git, and Firebase, along with design tools like Figma, Photoshop, and Adobe XD. My collaborative spirit, problem-solving abilities, and passion for innovation drive my work.",
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
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">{item.company}</p>
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
                <ul className="grid grid-cols-1 gap-[30px] ">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col xl:items-start gap-1 "
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[400px] min-h-[60px] lg:text-left">
                          {item.degree}
                        </h3>
                        <div className=" max-w-[400px] min-h-[60px] lg:text-left gap-3">
                          <p className=" text-accent">{item.institution}</p>
                          <p className=" text-white/60">
                            {item.field_of_study}
                          </p>
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
                <div className="flex flex-col gap-[30px] text-center xl:text-center">
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
                        className="bg-[#232329] h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <TooltipProvider delay-duration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center-group">
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
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0 gap-x-6">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
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
