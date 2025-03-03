"use client";

import { motion } from "framer-motion";
import React from "react";

import "swiper/css";

const services = [
  {
    category: "Full-Stack Web Development & Design",
    title: "Custom Websites, Web Apps & E-commerce Platforms",
    description:
      "I design and develop responsive, user-friendly web applications from concept to deployment. My focus is on clean code, seamless user experiences, and performance optimization using modern frameworks and technologies.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    category: "UX/UI Design & Research",
    title:
      "Wireframes, Prototypes, User Flows, Personas, UI Kits & Usability Testing",
    description:
      "I specialize in user-centric design, creating intuitive and accessible interfaces rooted in thorough user research. From low-fidelity wireframes to polished, high-fidelity prototypes, I prioritize usability and iterative design processes informed by user feedback.",
    stack: ["Adobe XD", "Figma", "Balsamiq", "Canva", "Adobe Creative Cloud"],
  },
  {
    category: "Graphic & Visual Design",
    title: "Logos, Branding, Banners, Illustrations & Marketing Assets",
    description:
      "I craft visually appealing graphics that align with brand identities and project goals. My designs range from sleek corporate branding to playful illustrations, ensuring creative flexibility across platforms.",
    stack: ["Adobe Illustrator", "Photoshop", "Canva"],
  },
  {
    category: "Product Design & Development",
    title: "Concept Development, Prototyping, Iterative Testing & Branding",
    description:
      "I take product ideas from research and concept generation to physical or digital prototypes. My process includes detailed user research, usability analysis, branding integration, and iterative refinement for market readiness.",
    stack: ["Adobe Illustrator", "InDesign", "Adobe XD"],
  },
  {
    category: "Motion Graphics & Video Editing",
    title: "Animated Ads, Lyric Videos, Promo Videos & Visual Effects",
    description:
      "I create engaging motion graphics, from lyric videos to branded promotional content. My process involves storyboarding, asset creation, animation, and post-production editing using industry-standard tools.",
    stack: [
      "Adobe After Effects",
      "Media Encoder",
      "Illustrator",
      "Photoshop",
      "Adobe XD",
    ],
  },
  {
    category: "Game Design & 3D Modeling",
    title: "Level Design, Asset Creation, Environment Design & Interactivity",
    description:
      "I design immersive game worlds, combining 3D modeling, texturing, and interactive mechanics. My projects include environment creation, custom character and object modeling, and scripting gameplay logic to enhance player engagement.",
    stack: ["Unity", "Autodesk Maya", "Adobe Photoshop"],
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
      }}
      className="min-h-screen py-16  flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#27272c] rounded-lg shadow-lg p-8 flex flex-col gap-4 transform hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Category */}
              <h3 className="text-2xl font-bold text-accent">
                {service.category}
              </h3>

              {/* Title */}
              <h4 className="text-lg font-semibold text-white">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-white/60 text-sm">{service.description}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {service.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs uppercase tracking-wide bg-white/10 text-white/70 py-1 px-3 rounded-full"
                  >
                    {typeof tech === "string" ? tech : tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
