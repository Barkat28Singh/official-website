"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web development",
    description: `
    I offer end-to-end web development services, building responsive, user-friendly websites and full-stack applications using technologies like HTML/CSS, JavaScript, Node.js, and React. From concept to deployment, I ensure seamless functionality and modern design.`,
    href: "/web",
    
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: `
    I create intuitive and engaging user experiences through wireframing, prototyping, and responsive design using Figma, Adobe XD, and Illustrator. My focus is on user-centered designs that enhance usability and aesthetic appeal.`,
    href: "/uxui",
  },
  {
    num: "03",
    title: "Logo Design",
    description: `
    I design memorable and versatile logos that reflect your brand’s identity. Using tools like Adobe Illustrator and Photoshop, I ensure each logo is tailored to your vision and stands out in any market.`,
    href: "/logos",
  },
  {
    num: "04",
    title: "Advertisment & Marketing",
    description: `
   I craft compelling advertisements, social media content, and marketing materials using Adobe Creative Suite. My designs aim to boost engagement, drive traffic, and enhance your brand’s visibility across platforms.`,
    href: "/advertisment",
  },
];

const Services = () => {
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
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">
                    {" "}
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl "></BsArrowDownRight>
                  </Link>
                </div>
                <span className=" flex text-[13px] leading-none text-white group-hover:text-accent transition-all duration-500 justify-end h-0 ">
                  Have A Peek!
                </span>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
