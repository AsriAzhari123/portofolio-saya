import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ setLoading }) {
  const styles = {
    loaderWrapper: `h-screen flex justify-center items-center dark:bg-dark-900`,
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      backgroundColor: "#f6f8fd",
      opacity: 1,
      scale: [1, 0],
      transition: {
        scale: {
          delay: 3,
          duration: 0.3,
          ease: "backIn",
        },
        backgroundColor: {
          delay: 2,
          duration: 0.7,
          ease: "circIn",
        },
      },
    },
    exit: {
      backgroundColor: "#ffffff", // Putih
      transition: {
        duration: 0.5, // Durasi transisi
        ease: "easeInOut", // Efek transisi
      },
    },
  };

  const drawLetterA = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const drawLetterS = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const drawLetterR = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const drawLetterI = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 1.1,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.loaderWrapper}>
      <AnimatePresence type="crossfade">
        <motion.div
          variants={containerAnimation}
          onAnimationComplete={() => setLoading(false)}
          initial="hidden"
          animate="visible"
          exit="exit" 
          className="w-24 h-24 rounded-lg"
        >
          <motion.svg fill="none" viewBox="0 0 500 500">
            {/* New logo design */}
            <motion.path
              variants={drawLetterA}
              d="M100,400 L200,100 L300,400 L250,300 L150,300 Z"
              fill="none"
              stroke="#800080" // Ungu
              strokeWidth="20"
            />
            <motion.path
              variants={drawLetterS}
              d="M100,100 L200,100 L200,200 L100,200 L100,300 L200,300 L200,400 L100,400 Z"
              fill="none"
              stroke="#800080" // Ungu
              strokeWidth="20"
            />
            <motion.path
              variants={drawLetterR}
              d="M300,100 L300,200 Q300,250 250,250 L200,250 L300,300 L300,400 L200,400"
              fill="none"
              stroke="#800080" // Ungu
              strokeWidth="20"
            />
            <motion.path
              variants={drawLetterI}
              d="M400,100 L400,400 M350,100 L450,100 M350,400 L450,400"
              fill="none"
              stroke="#800080" // Ungu
              strokeWidth="20"
            />
          </motion.svg>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
