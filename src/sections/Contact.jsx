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

export default function Contact() {
    const styles = {
        contactSection: `py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto`,
        sectionHeader: `mb-10 sm:mb-12 lg:mb-16`,
        sectionTitle: `text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 font-bold mb-3 sm:mb-4`,
        sectionSubtitle: `text-base sm:text-lg text-slate-600 dark:text-slate-400`,
        contactCard: `bg-gradient-to-br from-violet-50 to-sky-50 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-violet-100 dark:border-dark-600`,
        contactContent: `space-y-6 sm:space-y-8`,
        contactHeading: `text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4`,
        contactText: `text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-6 sm:mb-8`,
        socialMediaGrid: `grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-md mx-auto lg:mx-0`,
        socialIconWrapper: `group relative flex items-center justify-center p-4 sm:p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-violet-500`,
        socialIcon: `text-4xl sm:text-5xl lg:text-6xl text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300`,
        socialIconGlow: `absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`,
        getInTouch: `mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-violet-200 dark:border-dark-600`,
        getInTouchText: `text-center lg:text-left text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4`,
        emailButton: `inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base`,
    };

    const socialMedia = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/AsriAzhari123",
            color: "hover:text-slate-800 dark:hover:text-white",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/asri-azhari-0988aa229/",
            color: "hover:text-blue-600 dark:hover:text-blue-400",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://www.instagram.com/asrazhr1i?igsh=MXE3NnhuYTZxbjhxag==",
            color: "hover:text-pink-600 dark:hover:text-pink-400",
        },
    ];

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
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>
                    Let's Connect
                </h1>
                <p className={styles.sectionSubtitle}>
                    Find me on social media and let's start a conversation
                </p>
            </div>

            <div className={styles.contactCard}>
                <div className={styles.contactContent}>
                    <div>
                        <h2 className={styles.contactHeading}>
                            Follow Me on Social Media
                        </h2>
                        <p className={styles.contactText}>
                            If you are interested in me and want to see more about my work, 
                            feel free to connect with me through any of these platforms. 
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className={styles.socialMediaGrid}>
                        {socialMedia.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <LinkTag key={index} url={social.url}>
                                    <div className={styles.socialIconWrapper}>
                                        <div className={styles.socialIconGlow}></div>
                                        <IconComponent 
                                            className={`${styles.socialIcon} ${social.color}`}
                                            aria-label={social.name}
                                        />
                                    </div>
                                </LinkTag>
                            );
                        })}
                    </div>

                    <div className={styles.getInTouch}>
                        <p className={styles.getInTouchText}>
                            Or send me an email directly
                        </p>
                        <div className="text-center lg:text-left">
                            <a 
                                href="mailto:asriazhari29@gmail.com" 
                                className={styles.emailButton}
                            >
                                Get In Touch 📧
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}