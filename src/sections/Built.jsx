import React, { useEffect, useRef } from "react";
import { srConfig } from "../config";
import project1 from "../assets/project-one.png";
import project2 from "../assets/project-two.png";
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
          Sesuatu yang telah saya bangun
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
            <h1 className={styles.builtContentHeading}>Project Pertama</h1>
            <p className={styles.builtItemText}>
              Sebuah aplikasi android berbasis flutter dart yang memudahkan penggunanya untuk menitipkan hewan peliharaan, dan juga mencari hewan peliharaan yang ingin diadopsi.
              aplikasi ini juga melayani service ke rumah untuk grooming hewan peliharaan. dan pengguna juga dapat memberikan hewan yang terlantar.
            </p>
          </div>
        </div>

        <div className={styles.builtItemSecond}>
          <div className={styles.builtItemContent}>
            <h1 className={styles.builtItemHeading}>Medical Record</h1>
            <h1 className={styles.builtContentHeading}>Project Kedua</h1>
            <p className={styles.builtItemText}>
              Aplikasi berbasis flutter dart yang memudahkan pengguna untuk menyimpan rekam medis pasien, dan juga memudahkan dokter untuk mengakses rekam medis pasien.
            </p>
          </div>
          <figure>
            <img
              className={styles.builtItemCoverImg}
              src={project2}
              draggable="false"
              loading="lazy"
              alt="project1"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
