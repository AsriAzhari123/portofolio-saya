import React, { useEffect, useRef, useState } from "react";
import { srConfig } from "../config";
import project1 from "../assets/project-one.png";
import project2 from "../assets/project-two.png";
import project3 from "../assets/project-three.png";
import project4 from "../assets/project-four.png";
import project5 from "../assets/project-five.png";
import sr from "../utils/sr";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Built() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const styles = {
    builtSection: `py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto relative`,
    backgroundBlur: `absolute inset-0 -z-10 overflow-hidden`,
    gradientBlob: `absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse`,
    sectionHeader: `mb-12 sm:mb-16 lg:mb-20 text-center`,
    sectionTitle: `text-3xl pb-4 sm:text-4xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 font-bold mb-4 animate-fade-in`,
    sectionSubtitle: `text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto`,
    projectsGrid: `space-y-20 sm:space-y-24 lg:space-y-32`,
    projectCard: `group relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-500`,
    projectCardReverse: `group relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-500`,
    projectImageWrapper: `relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-violet-500/20 transition-all duration-700 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-sky-400/10 p-1 backdrop-blur-sm`,
    projectImageInner: `relative overflow-hidden rounded-xl bg-slate-900/5 dark:bg-slate-800/50`,
    projectImage: `w-full h-auto object-cover rounded-xl transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out`,
    projectImageOverlay: `absolute inset-0 bg-gradient-to-t from-violet-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`,
    projectContent: `space-y-4 sm:space-y-5 order-2 lg:order-1 transform transition-all duration-500 group-hover:translate-x-2`,
    projectContentReverse: `space-y-4 sm:space-y-5 order-2 transform transition-all duration-500 group-hover:-translate-x-2`,
    projectImageOrder: `order-1 lg:order-2 transform transition-all duration-500 group-hover:scale-105`,
    projectImageOrderReverse: `order-1 transform transition-all duration-500 group-hover:scale-105`,
    projectBadge: `inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-500/20 dark:to-purple-500/20 rounded-full mb-2 shadow-sm hover:shadow-md transition-all duration-300 border border-violet-200 dark:border-violet-500/30`,
    badgeIcon: `w-4 h-4 animate-pulse`,
    projectTitle: `text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-violet-600 to-slate-900 dark:from-white dark:via-violet-400 dark:to-white mb-3 group-hover:scale-105 transition-transform duration-300 origin-left`,
    projectDescription: `text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300`,
    techStack: `flex flex-wrap gap-2 sm:gap-3 mt-6`,
    techBadge: `relative px-4 py-2 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:-translate-y-0.5 border border-slate-200 dark:border-slate-700 hover:border-transparent`,
    projectNumber: `absolute -top-8 -left-4 text-8xl sm:text-9xl font-black text-slate-100 dark:text-slate-800/30 group-hover:text-violet-100 dark:group-hover:text-violet-900/30 transition-colors duration-500 select-none`,
    linkButton: `inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg font-medium hover:from-violet-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-violet-500/50`,
  };

  const projects = [
    {
      id: 1,
      title: "PetAdopted",
      badge: "First Project",
      description: "An Android application based on Flutter Dart that makes it easy for users to leave their pets, as well as look for pets they want to adopt. This application also provides home services for pet grooming, and users can also give abandoned animals.",
      image: project1,
      tech: ["Figma", "UI", "Android"],
      reverse: false,
    },
    {
      id: 2,
      title: "Medical Record",
      badge: "Second Project",
      description: "A Flutter Dart-based application that makes it easy for users to store patient medical records, and also allows doctors to easily access patient medical records.",
      image: project2,
      tech: ["Flutter", "Dart", "Android"],
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
      tech: ["Web", "React", "Node.js"],
      reverse: true,
    },
    {
      id: 5,
      title: "MusikalMania",
      badge: "Fifth Project",
      description: "MusikalMania is a website for purchasing concert tickets. Users can view concert ticket descriptions such as the concert date and the venue where the concert will take place.",
      image: project5,
      tech: ["React", "MongoDB", "DevOps"],
      reverse: false,
    }
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
      {/* Background decorative elements */}
      <div className={styles.backgroundBlur}>
        <div className={`${styles.gradientBlob} bg-violet-500 top-20 left-10`} />
        <div className={`${styles.gradientBlob} bg-purple-500 bottom-20 right-10`} />
        <div className={`${styles.gradientBlob} bg-sky-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
      </div>

      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Projects I've Built ✨
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
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Large background number */}
            <div className={styles.projectNumber}>
              0{project.id}
            </div>

            <div className={project.reverse ? styles.projectContentReverse : styles.projectContent}>
              <span className={styles.projectBadge}>
                <svg className={styles.badgeIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
                  <span 
                    key={index} 
                    className={styles.techBadge}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <figure className={project.reverse ? styles.projectImageOrderReverse : styles.projectImageOrder}>
              <div className={styles.projectImageWrapper}>
                <div className={styles.projectImageInner}>
                  <img
                    className={styles.projectImage}
                    src={project.image}
                    draggable="false"
                    loading="lazy"
                    alt={`${project.title} - ${project.badge}`}
                  />
                  <div className={styles.projectImageOverlay} />
                </div>
              </div>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}