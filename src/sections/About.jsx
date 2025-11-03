import React, { useEffect, useRef } from "react";
import avatar from "../assets/avatar2.jpg";
import { srConfig } from "../config";
import sr from "../utils/sr";
import LinkTag from "../compoents/LinkTag";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function About() {
  const styles = {
    aboutSection: `py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto`,
    aboutHeading: `text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 text-left font-bold mb-6 sm:mb-8 lg:mb-10 animate-gradient`,
    aboutContent: `flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start`,
    aboutText: `space-y-4 sm:space-y-5 order-2 lg:order-1 tracking-wide leading-relaxed text-slate-700 dark:text-slate-300 w-full lg:flex-1`,
    aboutParagraph: `text-sm sm:text-base leading-7 sm:leading-8`,
    aboutListSkills: `grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6`,
    aboutImageContent: `flex justify-center order-1 lg:order-2 w-full lg:w-auto lg:flex-shrink-0`,
    aboutImageWrapper: `relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80`,
    aboutImage: `w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-violet-500/30`,
    aboutImageOverlay: `absolute inset-0 bg-gradient-to-br from-violet-500/20 to-sky-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`,
    skillItem: `flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-dark-800 dark:to-dark-700 border border-slate-200 dark:border-dark-600 hover:shadow-lg hover:shadow-violet-500/10 dark:hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1`,
    skillName: `font-semibold text-slate-800 dark:text-white text-sm sm:text-base`,
    skillLevel: `text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-md`,
    linkStyle: `text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-semibold underline decoration-2 decoration-violet-500/30 hover:decoration-violet-500 transition-all duration-200`,
    sectionTitle: `inline-flex items-center space-x-3 mb-6`,
    titleAccent: `w-12 h-1 bg-gradient-to-r from-violet-500 to-sky-400 rounded-full`,
  };

  const skills = [
    { name: "ReactJS", level: "Intermediate" },
    { name: "HTML", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "TailwindCSS", level: "Intermediate" },
    { name: "Figma", level: "Intermediate" },
    { name: "Trello", level: "Intermediate" },
    { name: "Node.js", level: "Advance" },
    { name: "Flutter", level: "Advance" },
    { name: "Dart", level: "Advance" },
  ];

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section id="about" ref={revealContainer} className={styles.aboutSection}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.aboutHeading}>About Me</h1>
       
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p className={styles.aboutParagraph}>
            Hello 👋, let me introduce myself, my name is <span className="font-bold text-violet-600 dark:text-violet-400">Asri Azhari</span>, you can call me Asri. I graduated with a Bachelor's degree in informatics engineering from{" "}
            <LinkTag style={styles.linkStyle} url="https://mikroskil.ac.id/">
              Mikroskil University
            </LinkTag>.
          </p>

          <p className={styles.aboutParagraph}>
            I am a <span className="font-semibold text-violet-600 dark:text-violet-400">Front-End Developer</span> focused on developing web and mobile applications.
            I have experience in developing web and mobile applications using the latest technologies. Currently, I am learning and developing applications using <span className="font-semibold">ReactJS</span> and <span className="font-semibold">Flutter</span> technologies.
          </p>

          <p className={styles.aboutParagraph}>
            I am also interested in learning about programming languages and design, to improve my skills in programming and design.
          </p>

          <div className="pt-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Skills & Technologies
            </h3>
            <ul className={styles.aboutListSkills}>
              {skills &&
                skills.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className={styles.aboutImageContent}>
          <div className={styles.aboutImageWrapper}>
            <img 
              className={styles.aboutImage} 
              src={avatar} 
              draggable="false" 
              alt="Asri Azhari - Front-End Developer" 
            />
            <div className={styles.aboutImageOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}