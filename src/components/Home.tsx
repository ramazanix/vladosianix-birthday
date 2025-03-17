import { motion } from "motion/react";
import transition from "../transition";

const Home = () => {
  return (
    <motion.div className="home">
      <h1 className="old-standard-tt-bold">С днём рождения сучечка</h1>
      <motion.img
        src="/crown.png"
        alt="crown"
        width={250}
        height="auto"
        className="home-image crown"
        initial={{ rotate: "15deg", scale: 0.9 }}
        animate={{ y: [-10, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1.2,
        }}
      />
      <motion.img
        src="/money.png"
        alt="money"
        width={250}
        height="auto"
        className="home-image money"
        animate={{
          y: [-80, 0],
          x: [0, 90],
          rotate: [0, 90],
        }}
        transition={{
          duration: 3,
          ease: "backInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1.2,
        }}
      />
    </motion.div>
  );
};

export default transition(Home);
