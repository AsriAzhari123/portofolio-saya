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
    builtSection: `py-20 flex flex-col justify-center`,
    builtItem: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mb-10`,
    builtItemSecond: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mt-10`,
    builtItemCoverImg: `object-cover w-full hover:scale-110 ease-in-out duration-500`,
    builtItemContent: `space-y-5 flex flex-col relative justify-center`,
    builtContentHeading: `text-xl text-violet-700`,
    builtItemHeading: `text-3xl w-max bg-clip-text font-bold`,
    builtItemText: `leading-7`,
  };

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <>
      <section ref={revealContainer} id="built" className={styles.builtSection}>
        <h1 className="text-5xl pb-3 bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 mb-8 md:mb-7 font-bold">
          Something that I have built
        </h1>
        <div className={styles.builtItem}>
          <figure>
            <img
              className={styles.builtItemCoverImg}
              draggable="false"
              loading="lazy"
              src={project1}
              alt="project1"
            />
          </figure>
          <div className={styles.builtItemContent}>
            <h1 className={styles.builtItemHeading}>PetAdopted</h1>
            <h1 className={styles.builtContentHeading}>First Project</h1>
            <p className={styles.builtItemText}>
              An Android application based on Flutter Dart that makes it easy for users to leave their pets, as well as look for pets they want to adopt. This application also provides home services for pet grooming, and users can also give abandoned animals.
            </p>
          </div>
        </div>

        <div className={styles.builtItemSecond}>
          <div className={styles.builtItemContent}>
            <h1 className={styles.builtItemHeading}>Medical Record</h1>
            <h1 className={styles.builtContentHeading}>Second Project</h1>
            <p className={styles.builtItemText}>
              A Flutter Dart-based application that makes it easy for users to store patient medical records, and also allows doctors to easily access patient medical records.
            </p>
          </div>
          <figure>
            <img
              className={styles.builtItemCoverImg}
              src={project2}
              draggable="false"
              loading="lazy"
              alt="project2"
            />
          </figure>
             <figure>
            <img 
              className={styles.builtItemCoverImg}
              draggable="false"
              loading="lazy"
              src={project3}
              alt="project3"
            />
          </figure>
          <div className={styles.builtItemContent}>
            <h1 className={styles.builtItemHeading}>MuseumYog Admin</h1>
            <h1 className={styles.builtContentHeading}>Third Project</h1>
            <p className={styles.builtItemText}>
              MuseumYog! is a museum service platform that provides complete information, facilities, visitor reviews, as well as the convenience of purchasing tickets online, making it easier for visitors to plan their visits efficiently and giving museum managers full control over ticket bookings, event arrangements, and special offers, thereby addressing the information challenges faced by art and culture enthusiasts.
            </p>
          </div>
          <div className={styles.builtItemContent}>
            <h1 className={styles.builtItemHeading}>SmartLok</h1>
            <h1 className={styles.builtContentHeading}>Fourth Project</h1>
            <p className={styles.builtItemText}>
              Smartlo is a website that provides efficient and secure digital storage services at the National Library to enhance user convenience when storing items. We focus on a smooth user experience by specializing in luggage storage features, ensuring that visitors' trips to the library are easy, safe, and comfortable.
            </p>
          </div>
          <figure>
            <img 
              className={styles.builtItemCoverImg}
              draggable="false"
              loading="lazy"
              src={project4}
              alt="project4"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
