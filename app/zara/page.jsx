"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";

import { SiAdobexd, SiCanva, SiFigma, SiGoogleforms } from "react-icons/si";

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
    "Zara.com Revamp: Enhancing Usability & Accessibility for Fashion Enthusiasts 👗",
  description:
    "The Zara.com Redesign project was a comprehensive UX/UI revamp aimed at addressing critical usability issues that were negatively impacting user satisfaction and online sales. Conducted as a solo project, this redesign was driven by extensive user research, heuristic analysis, and the application of Human-Computer Interaction (HCI) principles.\n\nThe project tackled problems such as inefficient navigation, poor search functionality, limited accessibility features, and a confusing checkout process. By analyzing competitor websites like H&M, Shein, and Marks & Spencer, the redesign introduced a cleaner layout, larger text, more intuitive navigation, product review integration, and a simplified grid-based product display system. The goal was to transform Zara’s website into a more user-centric, accessible, and visually appealing shopping experience — particularly for its tech-savvy target audience aged 18-30.",
  info: [
    {
      fieldName: "My Role",
      fieldValue: "UX/UI Researcher & Designer",
      image: "/assets/Zara/final.png",
    },
    {
      fieldName: "Team Members",
      fieldValue: "3 Members",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Iterative Design Process — Research, Prototyping, Usability Testing, Refinement",
    },
    {
      fieldName: "Location",
      fieldValue: "Conducted Remotely — Toronto, ON, Canada",
    },
  ],
};

const process = {
  title1: "Zara Redesign: Research-Driven Process & Iterative Prototyping 🔄",
  items: [
    {
      num: "1.",
      step: "📚 Research & Competitive Analysis",
      description:
        "The project began with thorough research into user complaints, expert reviews, and competitor analysis. Research identified key pain points including inefficient navigation, hidden menus, poor search filtering, lack of visible product information, and a confusing checkout process. Inspiration was drawn from H&M and Shein, known for their user-friendly layouts.",
      image: "/assets/Zara/research.png",
    },
    {
      num: "2.",
      step: "📝 Information Architecture & Wireframing",
      description:
        "The main navigation menu was restructured into a horizontal bar with clear category labels, replacing the previous hidden and confusing hamburger menu. Balsamiq was used to create low-fidelity wireframes, focusing on simplified layout, product visibility, and clear calls to action.",
      image: "/assets/Zara/wireframes.png",
    },
    {
      num: "3.",
      step: "💻 Medium-Fidelity Prototyping",
      description:
        "The first interactive prototype was built on Canva, incorporating a cleaner product grid, larger text, improved filtering, and an intuitive one-page checkout process. Product pages featured prominent reviews and related product suggestions for outfit completion.",
      image: "/assets/Zara/prototype.png",
    },
    {
      num: "4.",
      step: "🔬 Usability Testing & User Feedback",
      description:
        "A usability study was conducted with participants aged 18-30 who frequently shop online. Participants completed navigation, search, and checkout tasks, followed by semi-structured interviews and a survey inspired by the Post-Study System Usability Questionnaire (PSSUQ). Feedback highlighted improvements in navigation and checkout, but also suggested refining search filters and adding review incentives.",
      image: "/assets/Zara/testing.png",
    },
    {
      num: "5.",
      step: "🚀 Final Refinement & Documentation",
      description:
        "Based on user feedback, the design was refined to further improve search result relevance, add clearer icons, and explore options to encourage authentic product reviews. Documentation summarized research insights, usability scores, and future enhancement opportunities to guide future iterations.",
      image: "/assets/Zara/final.png",
    },
  ],
};

const features = {
  title: "Features: User-Centric E-Commerce Experience ✨🛍️",
  items: [
    {
      num: "1.",
      feature: "📂 Clear & Visible Navigation",
      description:
        "A horizontal navigation menu with large, legible labels replaced the hidden hamburger menu, improving usability and reducing frustration.",
      image: "/assets/Zara/nav.png",
    },
    {
      num: "2.",
      feature: "🔍 Intuitive Search with Relevant Filters",
      description:
        "Search results are displayed in a user-friendly grid format with clear filters (gender, category, price range), improving search relevance and discoverability.",
      image: "/assets/Zara/search.png",
    },
    {
      num: "3.",
      feature: "⭐ Verified Product Reviews",
      description:
        "Product pages now feature user reviews, including verified purchase badges, giving shoppers confidence in product quality.",
      image: "/assets/Zara/reviews.png",
    },
    {
      num: "4.",
      feature: "🛒 Simplified One-Page Checkout",
      description:
        "The checkout process was condensed into a single, visually clear page with progress indicators and helpful tooltips to guide users.",
      image: "/assets/Zara/checkout.png",
    },
    {
      num: "5.",
      feature: "👀 Accessibility Enhancements",
      description:
        "Text size and contrast improvements, clear iconography, and optional accessibility tools (font size toggle, color adjustments) ensure a more inclusive shopping experience.",
      image: "/assets/Zara/accessibility.png",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Research, Design & Evaluation Methods 🛠️",
  description: [
    {
      sub: "User Research & Competitive Analysis",
      bullet:
        "Conducted user interviews, analyzed competitors like H&M, Shein, and Marks & Spencer, and reviewed user feedback from Medium articles and user forums.",
    },
    {
      sub: "Wireframing & Prototyping",
      bullet:
        "Created low-fidelity wireframes using Balsamiq, followed by medium-fidelity prototypes designed in Canva to visualize redesigned layouts and interactions.",
    },
    {
      sub: "Information Architecture (IA) & UX Writing",
      bullet:
        "Restructured the main navigation menu and improved labeling for better clarity and findability.",
    },
    {
      sub: "Usability Testing & Data Collection",
      bullet:
        "Ran moderated usability sessions, conducted semi-structured interviews, and collected survey data using PSSUQ methodology to evaluate user satisfaction.",
    },
    {
      sub: "Iterative Design & Continuous Feedback",
      bullet:
        "Refined design elements based on user feedback, with plans for high-fidelity interactive prototypes in future iterations.",
    },
  ],
  skillList: [
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiGoogleforms />, name: "Google Forms" },
    { icon: <SiFigma />, name: "Figma (Future Iterations)" },
  ],
};

const Zara = () => {
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

export default Zara;
