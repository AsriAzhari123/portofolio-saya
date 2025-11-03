import React, { useEffect, useRef } from "react";
import { srConfig } from "../config";
import project1 from "../assets/project-one.png";
import project2 from "../assets/project-two.png";
import project3 from "../assets/project-three.png";
import project4 from "../assets/project-four.png";
import sr from "../utils/sr";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Built() {
  const styles = {
    builtSection: `py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto`,
    sectionHeader: `mb-12 sm:mb-16 lg:mb-20`,
    sectionTitle: `text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 font-bold mb-3`,
    sectionSubtitle: `text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl`,
    projectsGrid: `space-y-16 sm:space-y-20 lg:space-y-24`,
    projectCard: `group grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center`,
    projectCardReverse: `group grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center`,
    projectImageWrapper: `relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-violet-500/10 to-sky-400/10 p-2`,
    projectImage: `w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500`,
    projectContent: `space-y-4 sm:space-y-5 order-2 lg:order-1`,
    projectContentReverse: `space-y-4 sm:space-y-5 order-2`,
    projectImageOrder: `order-1 lg:order-2`,
    projectImageOrderReverse: `order-1`,
    projectBadge: `inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-500/20 rounded-full mb-2`,
    projectTitle: `text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 mb-3`,
    projectDescription: `text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300`,
    techStack: `flex flex-wrap gap-2 mt-4`,
    techBadge: `px-3 py-1 text-xs sm:text-sm font-medium bg-slate-200 dark:bg-dark-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-500/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200`,
  };

  const projects = [
    {
      id: 1,
      title: "PetAdopted",
      badge: "First Project",
      description: "An Android application based on Flutter Dart that makes it easy for users to leave their pets, as well as look for pets they want to adopt. This application also provides home services for pet grooming, and users can also give abandoned animals.",
      image: project1,
      tech: ["Flutter", "Dart", "Android"],
      reverse: false,
    },
    {
      id: 2,
      title: "Medical Record",
      badge: "Second Project",
      description: "A Flutter Dart-based application that makes it easy for users to store patient medical records, and also allows doctors to easily access patient medical records.",
      image: project2,
      tech: ["Flutter", "Dart", "Mobile App"],
      reverse: true,
    },
    {
      id: 3,
      title: "MuseumYog Admin",
      badge: "Third Project",
      description: "MuseumYog! is a museum service platform that provides complete information, facilities, visitor reviews, as well as the convenience of purchasing tickets online, making it easier for visitors to plan their visits efficiently and giving museum managers full control over ticket bookings, event arrangements, and special offers.",
      image: project3,
      tech: ["React", "Admin Panel", "Web"],
      reverse: false,
    },
    {
      id: 4,
      title: "SmartLok",
      badge: "Fourth Project",
      description: "Smartlok is a website that provides efficient and secure digital storage services at the National Library to enhance user convenience when storing items. We focus on a smooth user experience by specializing in luggage storage features, ensuring that visitors' trips to the library are easy, safe, and comfortable.",
      image: project4,
      tech: ["Web", "Digital Storage", "React"],
      reverse: true,
    },
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
    <section ref={revealContainer} id="built" className={styles.builtSection}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Projects I've Built
        </h1>
        <p className={styles.sectionSubtitle}>
          A collection of applications I've developed using modern technologies
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article 
            key={project.id}
            className={project.reverse ? styles.projectCardReverse : styles.projectCard}
          >
            <div className={project.reverse ? styles.projectContentReverse : styles.projectContent}>
              <span className={styles.projectBadge}>
                {project.badge}
              </span>
              <h2 className={styles.projectTitle}>
                {project.title}
              </h2>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <div className={styles.techStack}>
                {project.tech.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <figure className={project.reverse ? styles.projectImageOrderReverse : styles.projectImageOrder}>
              <div className={styles.projectImageWrapper}>
                <img
                  className={styles.projectImage}
                  src={project.image}
                  draggable="false"
                  loading="lazy"
                  alt={`${project.title} - ${project.badge}`}
                />
              </div>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}