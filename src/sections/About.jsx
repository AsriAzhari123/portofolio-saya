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
            Hallo, perkenalkan nama saya Asri Azhari, bisa di panggil Asri. Saya adalah lulusan S1 Teknik Informatika di{" "}
            <LinkTag style="text-violet-500 link" url="https://mikroskil.ac.id/">
              Universitas Mikroskil.
            </LinkTag>
          </p>
          <p>
            Saya adalah Front-End Developer yang berfokus pada pengembangan aplikasi web dan mobile. 
            Saya memiliki pengalaman dalam pengembangan aplikasi web dan mobile menggunakan teknologi terbaru. Saat ini saya sedang belajar dan mengembangkan aplikasi menggunakan teknologi ReactJS dan Flutter.
          </p>
          <p>
           Saya juga sedang mengikuti kursus online untuk meningkatkan kemampuan saya dalam pemrograman dan desain.
          </p>
          <p>Berikut adalah beberapa keahlian yang saya miliki, diantaranya :</p>
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
