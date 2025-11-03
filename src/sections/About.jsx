import React, { useEffect, useRef } from "react";
import avatar from "../assets/avatar2.jpg";
import { srConfig } from "../config";
import sr from "../utils/sr";
import LinkTag from "../compoents/LinkTag";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function About() {
  const styles = {
    aboutSection: `py-20`,
    aboutHeading: `text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 text-left font-bold mb-10 lg:mb-7`,
    aboutContent: `flex flex-col xl:flex-row gap-5 md:space-x-10 justify-between`,
    aboutText: `space-y-3 order-2 mt-5 md:mt-0 xl:order-none tracking-wide leading-7 md:leading-6`,
    aboutListSkills: `grid grid-cols-2 gap-3 md:gap-2 list-inside`,
    aboutImageContent: `flex mx-auto rounded-md overflow-hidden justify-center order-1 xl:order-none items-center`,
    skillItem: `flex items-center justify-between`,
    skillLevel: `text-sm font-semibold text-violet-500`,
  };

  const skills = [
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML", level: "Expert" },
    { name: "React", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "Flutter", level: "Intermediate" },
    { name: "Dart", level: "Intermediate" },
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
      <div className={styles.aboutContent}>
        <div className={styles.aboutImageContent}>
          <img className={styles.aboutImage} src={avatar} draggable="false" alt="avatar" />
        </div>
        
        <div className={styles.aboutText}>
          <div className="inline-flex space-x-2">
            <h1 className={styles.aboutHeading}>Tentang Saya</h1>
          </div>
          <p>
            Hello, let me introduce myself, my name is Asri Azhari, you can call me Asri. I graduated with a Bachelor's degree in Information Technology from{" "}
            <LinkTag style="text-violet-500 link" url="https://mikroskil.ac.id/">
              Mikroskil University.
            </LinkTag>
          </p>
          <p>
            I am a Front-End Developer focused on developing web and mobile applications.
            I have experience in developing web and mobile applications using the latest technologies. Currently, I am learning and developing applications using ReactJS and Flutter technologies.
          </p>
          <p>
           I am also interested in learning about programming languages and design, to improve my skills in programming and design.
          </p>
          <p>Here are some of the skills I have, including :</p>
          <ul className={styles.aboutListSkills}>
            {skills &&
              skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  <span>{skill.name}</span>
                  <span className={styles.skillLevel}>|{skill.level}|</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
