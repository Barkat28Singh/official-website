"use client";

import { Button } from "/components/ui/button";
import { Textarea } from "/components/ui/textarea";
import { Input } from "/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const info = [
  {
    icon: <FaPhoneAlt></FaPhoneAlt>,
    title: "Phone",
    description: "+1(647)-675-4385",
  },
  {
    icon: <FaEnvelope></FaEnvelope>,
    title: "Email",
    description: "barkat01@alumni.utoronto.ca",
  },
  {
    icon: <FaMapMarkedAlt></FaMapMarkedAlt>,
    title: "Address",
    description: "Toronto, ON",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* contact form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3>Let's Work Together & Create Innovative Solutions</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores placeat quos deleniti veniam eligendi facere, ducimus
                commodi, reiciendis tempore incidunt eum beatae magni qui saepe
                rem nobis eveniet cupiditate accusantium.
              </p>

              {/* input area  */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname"></Input>
                <Input type="lastname" placeholder="Lastname"></Input>
                <Input type="email" placeholder="Email Address"></Input>
                <Input type="phone" placeholder="Phone Number"></Input>
              </div>
              {/* multi select option */}

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="wd">Web Development</SelectItem>
                    <SelectItem value="ix">UI/UX Design</SelectItem>
                    <SelectItem value="ld">Logo Design</SelectItem>
                    <SelectItem value="cc">Content Creation</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Anything else you want to mention? Type here..."
              ></Textarea>
              {/* Submit Btn */}
              <Button size="md" className="max-w-40">
                Submit Form
              </Button>
            </form>
          </div>
          {/* information  section */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-nonne mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2727c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
