"use client";
import { motion } from "framer-motion";
const ThankYou = () => {
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
        <div className="flex flex-col items-center justify-cen xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h2 className="h2 mb-6">
              Thank you For Contacing Me!<br></br>
              <span className="text-accent">
                I Will Get Back To You Shortly!
              </span>
            </h2>
            <span className="flex text-xl text-center justify-center ">
              {" "}
              Have A Great Day!
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ThankYou;
