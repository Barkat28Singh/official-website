"use client";

import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col min-h-screen"
    >
      <section className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Text */}
            <h2 className="xl:text-6xl font-bold text-white text-2xl md:text-4xl mb-6">
              Thank you for contacting me!
              <br />
              <span className="text-accent">
                I will get back to you shortly!
              </span>
            </h2>
            <p className="text-xl text-white/60">Have a great day!</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ThankYou;
