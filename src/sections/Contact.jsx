import React, { useEffect, useRef } from "react";
import { srConfig } from "../config";
import sr from "../utils/sr";
import LinkTag from "../compoents/LinkTag";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { 
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

export default function Contact () {
    const styles = {
        contactSection: `py-20 flex flex-col justify-center`,
        contactContent: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mb-10`,
        contactContentSecond: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mt-10`,
        contactContentCoverImg: `object-cover w-full hover:scale-110 ease-in-out duration-500`,
        contactContentText: `leading-7`,
        contactContentHeading: `text-xl text-violet-700`,
        contactContentSubheading: `text-3xl w-max bg-clip-text font-bold`,
        contactContentIcon: `text-5xl text-violet-700 flex justify-center md:justify-start mt-5 md:mt-0 space-x-5`, 
    };

    const revealContainer = useRef();
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }
        sr.reveal(revealContainer.current, srConfig());
    }, []);

    return (
        <section ref={revealContainer} id="contact" className={styles.contactSection}>
            <h1 className="text-5xl pb-3 bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 mb-8 md:mb-7 font-bold">
                Sosial Media
            </h1>
            <div className={styles.contactContent}>
                <div className={styles.contactContentText}>
                    <h1 className={styles.contactContentHeading}>Social Media Saya</h1>
                    <p className={styles.contactContentText}>
                        Jika Anda tertarik dengan saya dan ingin melihat lebih tentang saya, silahkan kunjungi saya melalui sosial media dibawah ini :
                    </p>
                </div>
            </div>
            <div className="flex justify-center md:justify-start mt-5 md:mt-0">
                <div className="grid grid-cols-3 gap-8">
                    <LinkTag url="https://github.com/AsriAzhari123">
                        <FaGithub className="text-5xl text-violet-700" />
                    </LinkTag>
                    <LinkTag url="https://www.linkedin.com/in/asri-azhari-0988aa229/">
                        <FaLinkedin className="text-5xl text-violet-700" />
                    </LinkTag>
                    <LinkTag url="https://www.instagram.com/asrazhr1i?igsh=MXE3NnhuYTZxbjhxag==">
                        <FaInstagram className="text-5xl text-violet-700" />
                    </LinkTag>
                </div>
                
            </div>
        </section>
    );
}
