"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";
import { FaCss3, FaJs, FaHtml5 } from "react-icons/fa";

import { SiWix, SiAdobeillustrator, SiAdobexd } from "react-icons/si";

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
    "Open Design Collaboratory: Empowering Creative Confidence through Accessibility & Innovation 🛠️",
  description:
    "The Open Design Collaboratory (ODC) is a web-based platform designed to empower students at the University of Toronto Mississauga (UTM) to discover and embrace their creative potential. Built using Wix, ODC serves as a hybrid makerspace — both a digital gateway and a creative inspiration hub for students hesitant to explore physical design spaces.\n\nThe platform was developed in response to the intimidating nature of traditional design labs, where unfamiliar tools and environments can stifle creativity. ODC bridges that gap by offering students a virtual 3D lab tour, equipment manuals, student project showcases, and event listings, all designed to demystify the creative process and foster a welcoming, accessible design community.\n\nWith a focus on accessibility, inclusivity, and inspiration, ODC ensures that design innovation is not confined to the physical space of the lab. By lowering barriers and showcasing the creative works of fellow students, ODC nurtures curiosity, collaboration, and confidence in every aspiring designer.",
  info: [
    {
      fieldName: "My Role",
      fieldValue:
        "Solo Designer & Developer — Platform Design, UX/UI, Content Curation, and Development (Wix).",
    },
    {
      fieldName: "Target Audience",
      fieldValue:
        "CCIT Students at UTM — with a broader goal of welcoming all design enthusiasts across disciplines.",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "User-Centered Design — Extensive research, user personas, iterative prototyping, and feedback loops.",
    },
    {
      fieldName: "Location",
      fieldValue: "University of Toronto Mississauga — CCIT Department.",
    },
  ],
};

const process = {
  title1:
    "Open Design Collaboratory: From Concept to Virtual Makerspace 💡, Iterative Design & Accessibility-First Focus ♿️",
  items: [
    {
      num: "1.",
      step: "Research & Problem Identification",
      description:
        "The process started with research into the barriers preventing UTM students from fully utilizing the physical Open Design Collaboratory lab. Surveys and interviews revealed that many students, especially beginners, felt intimidated by the technical equipment, unfamiliar processes, and fear of judgment. This insight shaped the core mission of ODC — to make design accessible, inviting, and inspiring to all students regardless of experience level.",
    },
    {
      num: "2.",
      step: "Ideation & Wireframing",
      description:
        "Drawing inspiration from global makerspaces at Georgia Tech, Columbia University, and Emory University, the initial wireframes envisioned a digital platform that balanced practical guidance (manuals & equipment overviews) with inspirational content (student project gallery & design challenges). Accessibility features such as clear navigation, device compatibility, and visual simplicity were prioritized to ensure the platform was inclusive.",
    },
    {
      num: "3.",
      step: "Platform Development & Content Integration",
      description:
        "The platform was built entirely on Wix, chosen for its ease of use and flexible design capabilities. Pages were created for key features, including: \n- Virtual 3D Lab Tour to reduce intimidation.\n- Equipment Cards & Manuals to provide clear, visual guides for every tool.\n- Upcoming Events & Workshop Listings to encourage participation.\n- Student Project Gallery to showcase peer creations, fostering inspiration and peer learning.\n- Contact Us with AI Chatbot to provide 24/7 support and design advice.",
    },
    {
      num: "4.",
      step: "User Testing & Accessibility Optimization",
      description:
        "The platform underwent extensive user testing with a diverse group of UTM students, particularly those from non-design backgrounds. Feedback emphasized the importance of clear navigation, consistent page layouts, and alternative content formats (text, video, images). Accessibility audits ensured compliance with AODA (Accessibility for Ontarians with Disabilities Act) guidelines, including keyboard navigation, descriptive alt text, and color contrast enhancements.",
    },
    {
      num: "5.",
      step: "Launch & Future Scalability Planning",
      description:
        "The platform launched as a live website, accessible via desktop and mobile, with plans for ongoing content updates. Future scalability options were outlined, including adding a collaborative design feed (similar to Behance), integrating volunteer opportunities for peer mentoring, and expanding to include online design workshops & certification programs.",
    },
  ],
};

const features = {
  title: "Features: Unlocking Creativity & Building Confidence 🚀✨",
  items: [
    {
      num: "1.",
      feature: "3D Virtual Lab Tour",
      description:
        "Students can explore the physical ODC lab space through an interactive 3D tour, allowing them to familiarize themselves with equipment locations and spatial layout before stepping into the lab.",
    },
    {
      num: "2.",
      feature: "Equipment Manuals & How-To Videos",
      description:
        "Each piece of equipment has a dedicated page featuring visual guides, step-by-step manuals, and student-created tutorial videos, ensuring students feel prepared and confident using any tool.",
    },
    {
      num: "3.",
      feature: "Student Project Gallery",
      description:
        "An evolving gallery showcases completed student projects, demonstrating creative possibilities and providing real-life inspiration for future designers. Projects span disciplines, from graphic design to product prototypes.",
    },
    {
      num: "4.",
      feature: "Events Calendar & Workshop Registration",
      description:
        "Students can browse upcoming workshops, design challenges, and collaborative projects, with easy online registration using an integrated Google Calendar system.",
    },
    {
      num: "5.",
      feature: "AI Chatbot Assistance",
      description:
        "A built-in chatbot provides real-time answers to questions about equipment, lab policies, and design techniques — offering students instant support whenever needed.",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Methodologies & Learnings 🛠️",
  description: [
    {
      sub: "Wix Platform Mastery",
      bullet:
        "Gained hands-on experience building a fully functional multi-page website using Wix, balancing custom design, interactivity, and responsive layouts.",
    },
    {
      sub: "User-Centered Design Process",
      bullet:
        "Applied research-driven design principles, combining user personas, journey mapping, and iterative feedback cycles to create an accessible, student-friendly platform.",
    },
    {
      sub: "Accessibility-First Development",
      bullet:
        "Prioritized AODA-compliant design, ensuring all elements (text, images, navigation) met accessibility standards, and incorporating keyboard-friendly navigation and assistive technology support.",
    },
    {
      sub: "Interactive & Multimedia Content Integration",
      bullet:
        "Developed engaging, student-friendly content across formats — including video tutorials, interactive maps, and project showcases — to inspire creativity and lower barriers to entry.",
    },
    {
      sub: "Project Scalability Planning",
      bullet:
        "Outlined future scalability strategies, including adding a student design feed with likes/comments, online design courses, and potential collaborative project forums, ensuring long-term growth potential.",
    },
  ],
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiWix />, name: "Wix" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiAdobeillustrator />, name: "Illustrator" },
  ],
};

const ODC = () => {
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

export default ODC;
