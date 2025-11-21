import React, { useEffect, useRef, useState } from "react";
import avatar from "../assets/avatar2.jpg";
import { srConfig } from "../config";
import sr from "../utils/sr";
import LinkTag from "../compoents/LinkTag";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const styles = {
    aboutSection: `py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:pt-9 lg:px-12 max-w-7xl mx-auto relative`,
    backgroundBlur: `absolute inset-0 -z-10 overflow-hidden pointer-events-none`,
    gradientBlob: `absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse`,
    aboutHeading: `text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 text-left font-bold mb-2 animate-gradient leading-tight pb-2`,
    aboutContent: `flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start`,
    aboutText: `space-y-4 sm:space-y-6 order-2 lg:order-1 tracking-wide leading-relaxed text-slate-700 dark:text-slate-300 w-full lg:flex-1`,
    aboutParagraph: `text-sm sm:text-base leading-7 sm:leading-8 transform transition-all duration-300 hover:translate-x-2`,
    aboutListSkills: `grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6`,
    aboutImageContent: `flex justify-center order-1 lg:order-2 w-full lg:w-auto lg:flex-shrink-0 relative`,
    aboutImageWrapper: `relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80`,
    aboutImage: `w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-violet-500/40 group-hover:scale-105 group-hover:rotate-2`,
    aboutImageOverlay: `absolute inset-0 bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-sky-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`,
    imageBorder: `absolute inset-0 rounded-2xl border-4 border-violet-500/0 group-hover:border-violet-500/50 transition-all duration-500 -z-10 transform group-hover:scale-110`,
    imageGlow: `absolute -inset-4 bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-20`,
    skillItem: `flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-dark-800 dark:to-dark-700 border border-slate-200 dark:border-dark-600 hover:shadow-xl hover:shadow-violet-500/20 dark:hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden group`,
    skillItemHovered: `before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-500/10 before:to-purple-500/10 before:transition-opacity before:duration-300`,
    skillName: `font-semibold text-slate-800 dark:text-white text-sm sm:text-base relative z-10 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300`,
    skillLevel: `text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300`,
    linkStyle: `text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-semibold underline decoration-2 decoration-violet-500/30 hover:decoration-violet-500 transition-all duration-200 hover:scale-105 inline-block`,
    sectionTitle: `mb-8 relative pb-4`,
    titleAccent: `w-20 h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 rounded-full mb-4 animate-pulse`,
    highlight: `font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors duration-200`,
    badge: `inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-violet-600 dark:text-violet-400 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-500/20 dark:to-purple-500/20 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-violet-200 dark:border-violet-500/30 hover:scale-105`,
    badgeIcon: `w-4 h-4`,
    skillsHeader: `text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-6 flex items-center gap-3`,
    sparkle: `inline-block animate-pulse`,
  };

  const skills = [
    { name: "ReactJS", level: "Intermediate", icon: "⚛️" },
    { name: "HTML", level: "Intermediate", icon: "🌐" },
    { name: "Git", level: "Intermediate", icon: "📦" },
    { name: "TailwindCSS", level: "Intermediate", icon: "🎨" },
    { name: "Figma", level: "Intermediate", icon: "🎭" },
    { name: "Trello", level: "Intermediate", icon: "📋" },
    { name: "Node.js", level: "Advance", icon: "🚀" },
    { name: "Flutter", level: "Advance", icon: "📱" },
    { name: "Dart", level: "Advance", icon: "🎯" },
    { name: "MongoDB", level: "Advance", icon: "🍃" },
    { name: "MySQL", level: "Advance", icon: "🗄️" },
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
      {/* Background decorative elements */}
      <div className={styles.backgroundBlur}>
        <div className={`${styles.gradientBlob} bg-violet-500 top-0 left-0`} />
        <div className={`${styles.gradientBlob} bg-purple-500 bottom-0 right-0`} />
        <div className={`${styles.gradientBlob} bg-sky-400 top-1/2 right-1/4`} />
      </div>

      <div className={styles.sectionTitle}>
        <h1 className={styles.aboutHeading}>
          About Me <span className={styles.sparkle}>✨</span>
        </h1>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <div className="space-y-5">
            <p className={styles.aboutParagraph}>
              <span className="text-2xl">👋</span> Hello! Let me introduce myself, my name is{" "}
              <span className={styles.highlight}>Asri Azhari</span>, you can call me Asri. 
              I graduated with a Bachelor's degree in informatics engineering from{" "}
              <LinkTag style={styles.linkStyle} url="https://mikroskil.ac.id/">
                Mikroskil University
              </LinkTag>.
            </p>

            <p className={styles.aboutParagraph}>
              I am a{" "}
              <span className={styles.badge}>
                <svg className={styles.badgeIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                </svg>
                Front-End Developer
              </span>{" "}
              focused on developing web and mobile applications.
              I have experience in developing applications using the latest technologies. Currently, I am learning and developing applications using{" "}
              <span className={styles.highlight}>ReactJS</span> and{" "}
              <span className={styles.highlight}>Flutter</span> technologies.
            </p>

            <p className={styles.aboutParagraph}>
              I am also passionate about learning programming languages and design, constantly improving my skills to create beautiful and functional applications. 🎨💻
            </p>
          </div>

          <div className="pt-6">
            <h3 className={styles.skillsHeader}>
              <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Skills & Technologies
            </h3>
            <ul className={styles.aboutListSkills}>
              {skills.map((skill, i) => (
                <li 
                  key={i} 
                  className={`${styles.skillItem} ${hoveredSkill === i ? styles.skillItemHovered : ''}`}
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    animationDelay: `${i * 50}ms`
                  }}
                >
                  <span className={styles.skillName}>
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className={styles.skillLevel}>{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.aboutImageContent}>
          <div className={styles.aboutImageWrapper}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageBorder}></div>
            <img 
              className={styles.aboutImage} 
              src={avatar} 
              draggable="false" 
              alt="Asri Azhari - Front-End Developer" 
            />
            <div className={styles.aboutImageOverlay}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-white text-center p-4">
                  <p className="text-lg font-bold">Asri Azhari</p>
                  <p className="text-sm">Front-End Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}