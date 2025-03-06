"use client";

import { Button } from "/components/ui/button";
import { Textarea } from "/components/ui/textarea";
import { Input } from "/components/ui/input";
import { useRouter } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+1(647)-675-4385" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "barkat01@alumni.utoronto.ca",
  },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "Toronto, ON" },
];

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeEndpoint = "https://formspree.io/f/mnnpangg";

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/ThankYou"); // Redirect to thank you page on success
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

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
          {/* contact form (set to 50% width on desktop) */}
          <div className="xl:h-[54%] order-2 xl:order-none xl:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <Input
                type="text"
                name="firstname"
                placeholder="Firstname"
                required
                value={formData.firstname}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastname"
                placeholder="Lastname"
                required
                value={formData.lastname}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              {/* Service Selection - Styled */}
              <div className="w-full">
                <select
                  name="service"
                  className="w-full p-3 bg-[#1f1f24] text-white border border-white/20 rounded-md"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Web-Dev-Design">
                    Web Development & Design
                  </option>
                  <option value="UX/UI-Design">UI/UX Design</option>
                  <option value="Graphic-Design">Graphic Design</option>
                  <option value="Product-Design">Product Design</option>
                  <option value="Motion-Design">Motion Design</option>
                  <option value="Game-Design">Game Design</option>
                </select>
              </div>

              <Textarea
                name="message"
                placeholder="Anything else you want to mention?"
                className="h-[200px]"
                value={formData.message}
                onChange={handleChange}
              />

              <Button type="submit" size="lg" className="p-5 flex">
                Submit Form
              </Button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2727c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
