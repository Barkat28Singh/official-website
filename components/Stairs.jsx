import { motion } from "framer-motion";

const StairAnimation = {
  intitial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the rever index fir staggered delay

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => (
  <>
    {/*   Render 6 motion divs, each representing a step of the stairs
   Each div will have the same animation defined by the StairAnimation object.
     The delay for each div is calculated dynamically based on its reversed index,
  Creating a staggered effect with decreasing delay for each subsequent step. */}
    {[...Array(6)].map((_, index) => {
      return (
        <motion.div
          key={index}
          variants={StairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        ></motion.div>
      );
    })}
    ;
  </>
);

export default Stairs;
