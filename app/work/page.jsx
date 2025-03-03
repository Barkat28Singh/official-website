"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const works = [
  {
    num: "01",
    title: "Web Design & Development",
    description: `
      I specialize in building custom, responsive websites and dynamic web applications that blend clean code with visually engaging designs. Leveraging my expertise in HTML, CSS, JavaScript, React, Next.js, and Node.js, I create seamless user experiences optimized for performance across all devices. From concept and wireframing to deployment and optimization, I bring ideas to life with attention to both form and function.`,
    href: "/web",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: `
      Through in-depth user research, wireframing, and iterative prototyping, I craft intuitive and visually appealing digital experiences. Using tools like Figma, Adobe XD, and Balsamiq, I focus on accessibility, user flows, and interface clarity to ensure every product is both beautiful and user-friendly. My process combines design thinking and user-centered methodologies to align functionality with aesthetics.`,
    href: "/uxui",
  },
  {
    num: "03",
    title: "Product & Game Design",
    description: `
      My product design expertise spans from initial research and ideation to physical and digital prototyping, branding, and user testing. In game design, I apply 3D modeling, texturing, level design, and interactive scripting using Maya and Unity. Whether creating innovative products like HydroBag or immersive games like SweetScape, I balance creativity, functionality, and storytelling to deliver engaging user experiences.`,
    href: "/products",
  },
  {
    num: "04",
    title: "Logo & Branding Design",
    description: `
      I design impactful logos and comprehensive branding packages that reflect each client’s unique identity and story. From minimalist corporate logos to playful illustrated marks, I tailor designs to target audiences while ensuring scalability and versatility across digital and print platforms using Adobe Illustrator, Photoshop, and InDesign.`,
    href: "/logos",
  },
  {
    num: "05",
    title: "Motion Design & Video Editing",
    description: `
      I create visually striking motion graphics, animated advertisements, and promotional videos that blend typography, illustration, and animation. Using Adobe After Effects, Premiere Pro, and Media Encoder, I craft engaging narratives and dynamic visuals that capture attention across social media, websites, and presentations.`,
    href: "/motion",
  },
  {
    num: "06",
    title: "Graphic Design & Visual Assets",
    description: `
      I produce versatile graphic design assets ranging from social media banners and marketing collateral to complex illustrations and infographics. Combining creative flair with brand consistency, I work across Adobe Illustrator, Photoshop, and Canva to deliver high-quality visuals aligned with strategic goals.`,
    href: "/graphic",
  },
];

const Works = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {works.map((work, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">
                    {" "}
                    {work.num}
                  </div>

                  <Link
                    href={work.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl "></BsArrowDownRight>
                  </Link>
                </div>
                <span className=" flex text-[13px] leading-none text-white group-hover:text-accent transition-all duration-500 justify-end h-0 ">
                  Have A Peek!
                </span>

                <h2 className="text-[42px] mt-3 font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {work.title}
                </h2>
                <p className="text-white/60">{work.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
