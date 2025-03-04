"use client";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";
import { FaCss3, FaJs, FaHtml5, FaBootstrap } from "react-icons/fa";

import {
  SiJquery,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobexd,
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

// About, Process, Features, Toolkit Data (same as you provided but fixed)
const about = {
  title: "Sweet Teeth: A Sweet Shopping Experience 🍭🍫",
  description:
    "Sweet Teeth is a creative e-commerce project inspired by my father's lifelong passion for sweets. In my family, we always joked that he didn't have just a sweet tooth — he had a whole set of 'Sweet Teeth'. This personal connection sparked the idea for a vibrant, playful online candy store designed to immerse users in the colorful world of international confectionery. \n\nThe project went through two major phases of development, evolving from a static, visually engaging storefront into a fully responsive and interactive shopping platform. Along the way, Sweet Teeth's brand identity came to life through custom motion design advertisements, playful product imagery, and interactive candy selection tools. Sweet Teeth was more than a technical challenge — it was an exploration in user-centered design, branding, and building an experience that evokes joy and nostalgia for every candy lover.",
  info: [
    {
      fieldName: "My Role",
      fieldValue:
        "Tech Lead, Front End Developer, UX/UI Designer, and Motion Graphics Designer",
    },
    {
      fieldName: "Team Members",
      fieldValue:
        "3 Members — Collaborated closely with two team members to manage design assets, user flows, and front-end development.",
      image: "/assets/SweetTeeth/first.png",
    },
    {
      fieldName: "Methodology Used",
      fieldValue:
        "Scrum — Employed agile techniques with iterative sprints, daily stand-ups, and bi-weekly retrospectives to enhance features and refine design based on user feedback.",
      image: "/assets/SweetTeeth/mix.png",
    },
    {
      fieldName: "Location",
      fieldValue: "Humber College North - Etobicoke, ON, Canada",
      image: "/assets/SweetTeeth/second.png",
    },
  ],
};

const process = {
  title1: "Sweet Teeth 1.0: The Foundation 🍬",
  title2: "Sweet Teeth 2.0: The Evolution 🚀",
  items: [
    {
      num: "1.",
      step: "🧐 Research & Ideation",
      description:
        "The project began with comprehensive research into international candy trends and user preferences. We conducted surveys to understand how users prefer to browse and purchase specialty sweets online. The insights helped us craft initial wireframes, define user personas, and map user flows to ensure the experience would be both delightful and intuitive.",
      image: "/assets/SweetTeeth/res.png",
    },
    {
      num: "2.",
      step: "🎨 Design & Prototyping",
      description:
        "With a strong focus on visual storytelling, the design phase involved creating high-fidelity wireframes in Adobe XD, establishing a playful and vibrant brand identity. The design language incorporated bold colors, rounded typography, and fun animations. This phase also saw the creation of motion design advertisements and GIFs using Adobe After Effects and Premiere Pro, further enhancing Sweet Teeth’s personality.",
      image: "/assets/SweetTeeth/wir.png",
    },
    {
      num: "3.",
      step: "💻 Development",
      description:
        "Sweet Teeth 1.0 was built using HTML, CSS, Bootstrap, jQuery, and vanilla JavaScript, focusing on core e-commerce functionality like product browsing and checkout. In Sweet Teeth 2.0, the focus shifted to responsiveness, with the site optimized for mobile, tablet, and desktop users. The updated version introduced dynamic UI components, a Mix & Match builder, and interactive category pages to offer a personalized shopping experience.",
      image: "/assets/SweetTeeth/dev.png",
    },
    {
      num: "4.",
      step: "📊 Testing & Optimization",
      description:
        "User testing played a crucial role in improving Sweet Teeth’s usability. We gathered feedback on navigation, responsiveness, and performance across devices. Insights from user testing directly shaped refinements, including improving load times, simplifying the checkout flow, and enhancing category filters for easier product discovery. Optimization techniques included image compression, lazy loading, and modular CSS/JS structuring.",
      image: "/assets/SweetTeeth/proj1/test.png",
    },
    {
      num: "5.",
      step: "🚀 Final Deployment & Launch",
      description:
        "The final iteration of Sweet Teeth was a fully responsive, visually rich, and performance-optimized candy shopping platform. Alongside the web experience, we deployed promotional assets — including video advertisements and animated banners — to establish a cohesive and memorable brand presence across social platforms.",
      image: "/assets/SweetTeeth/proj2/sweet2.png",
    },
  ],
};

const features = {
  title: "Features: A Deliciously Interactive Shopping Experience 🍭",
  items: [
    {
      num: "1.",
      feature: "🌎 International Candy Selection",
      description:
        "A curated catalog featuring sweets from across the globe, allowing users to discover and explore treats from India, Japan, the Caribbean, and beyond. Each product is presented with vibrant imagery, playful descriptions, and clear categorization for effortless browsing.",
      image: "/assets/SweetTeeth/proj1/inter.png",
    },
    {
      num: "2.",
      feature: "📦 TreatBox Package",
      description:
        "To cater to gift shoppers and seasonal buyers, we introduced pre-packaged TreatBoxes. These themed boxes — available for holidays like Halloween and Christmas — offer a curated mix of candies, beautifully packaged and ready for purchase with a single click.",
      image: "/assets/SweetTeeth/proj1/treat.png",
    },
    {
      num: "3.",
      feature: "🍬 Mix & Match Builder",
      description:
        "For candy enthusiasts who prefer a personalized experience, Sweet Teeth features a Mix & Match section. This interactive tool lets users hand-pick individual candies and build their own custom treat box, with real-time visual previews that update as selections are made.",
      image: "/assets/SweetTeeth/proj1/match.png",
    },
    {
      num: "4.",
      feature: "🎞️ Motion Design & GIFs",
      description:
        "To enhance Sweet Teeth’s brand personality, we incorporated motion design into both the website and marketing assets. Custom animated product reveals, dynamic category banners, and looping GIFs bring the store to life — reinforcing the fun, playful nature of the brand.",
      image: "/assets/SweetTeeth/Sweet_Teeth_GIF.gif",
      video: "/assets/SweetTeeth/main comp 2.mp4",
    },
  ],
};

const toolkit = {
  title: "Toolkit: Technologies, Methodologies & Learnings 🔧",
  description: [
    {
      sub: "Enhanced UI/UX & Responsive Design",
      bullet:
        "Gained extensive experience creating user-friendly interfaces that adapt seamlessly across devices. Learned to balance visual richness with performance optimization through modular styling and smart asset management.",
    },
    {
      sub: "Agile Development & Scrum Methodology",
      bullet:
        "Worked within a Scrum framework, participating in sprint planning, daily standups, and retrospective sessions. This iterative process encouraged frequent testing, rapid adjustments, and constant collaboration across design and development.",
    },
    {
      sub: "Motion Design & Branding Integration",
      bullet:
        "Strengthened my skills in motion graphics by designing product reveal animations, interactive banners, and promotional videos using Adobe After Effects. Ensured that all motion elements were aligned with the overall brand identity.",
    },
    {
      sub: "Advanced Interactive Features",
      bullet:
        "Gained hands-on experience developing dynamic UI features, including real-time builders like the Mix & Match candy box tool. Combined jQuery logic with modular CSS to ensure smooth user interactions across devices.",
    },
  ],
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiJquery />, name: "jQuery" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiAdobeaftereffects />, name: "After Effects" },
    { icon: <SiAdobeillustrator />, name: "Illustrator" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
  ],
};

const Sweet = () => {
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
                {process.title1} & {process.title2}
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
                        className="rounded-lg h-[350px] object-cover"
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
                          className="rounded-lg h-[350px] object-cover"
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

export default Sweet;
