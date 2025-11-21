import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  const styles = {
    hero: `h-screen flex flex-col justify-center items-start`,
    heroContent: `flex space-y-4 sm:space-y-5 flex-col justify-center`,
    heroHeading: `text-xl`,
    heroHeadingSpan: `text-violet-500`,
    heroSubHeading1: `text-[45px] tracking-wide sm:text-7xl font-bold gradient-animate`,
    heroSubHeading2: `text-5xl sm:text-6xl font-bold dark:text-white`,
    heroText: `md:text-md md:w-4/6 leading-7`,
    resumeButton: `mt-6 inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl`,
  };

  const fadeAnimation = {
    initial: {
      y: 80,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        type: "spring",
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  const handleDownloadResume = () => {
    const resumeUrl = "src/assets/ASRI AZHARI.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Asri_Azhari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id="hero" className={styles.hero}>
        <motion.div
          variants={fadeAnimation}
          initial="initial"
          animate="animate"
          className={styles.heroContent}
        >
          <motion.div variants={fadeAnimation} className="inline-flex items-center">
            <h1 className={styles.heroHeading}>Hello</h1>
            <picture className="mx-2">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif"
                alt="👋"
                width="30"
                height="30"
              />
            </picture>
            <h1 className={styles.heroHeading}>,my name is</h1>
          </motion.div>

          <motion.h2 variants={fadeAnimation} className={styles.heroSubHeading1}>
            Asri Azhari
          </motion.h2>
          <motion.h3 variants={fadeAnimation} className={styles.heroSubHeading2}>
            Web & Mobile Developer
          </motion.h3>

          <motion.button
            variants={fadeAnimation}
            onClick={handleDownloadResume}
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}