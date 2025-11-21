import React, { useEffect, useRef, useState } from "react";
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
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [isEmailHovered, setIsEmailHovered] = useState(false);

    const styles = {
        contactSection: `py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto relative`,
        backgroundBlur: `absolute inset-0 -z-10 overflow-hidden pointer-events-none`,
        gradientBlob: `absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse`,
        sectionHeader: `mb-10 sm:mb-12 lg:mb-16 text-center`,
        titleAccent: `w-20 h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 rounded-full mb-4 animate-pulse mx-auto`,
        sectionTitle: `text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 font-bold mb-3 sm:mb-4 leading-tight pb-2`,
        sectionSubtitle: `text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto`,
        contactCard: `relative bg-gradient-to-br from-white via-violet-50/30 to-sky-50/30 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border-2 border-violet-200/50 dark:border-dark-600 overflow-hidden backdrop-blur-sm`,
        cardGlow: `absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-sky-400 rounded-3xl opacity-20 blur-2xl -z-10`,
        contactContent: `space-y-8 sm:space-y-10 relative z-10`,
        contactHeading: `text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-violet-600 to-slate-900 dark:from-white dark:via-violet-400 dark:to-white mb-4 flex items-center justify-center lg:justify-start gap-3`,
        headingIcon: `text-violet-600 dark:text-violet-400`,
        contactText: `text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 text-center lg:text-left`,
        socialMediaGrid: `grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto`,
        socialIconWrapper: `group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-violet-500 cursor-pointer overflow-hidden`,
        socialIconGlow: `absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`,
        socialIcon: `text-5xl sm:text-6xl lg:text-7xl text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-all duration-500 relative z-10`,
        socialName: `mt-3 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 relative z-10`,
        socialParticles: `absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`,
        particle: `absolute w-1 h-1 bg-violet-500 rounded-full animate-ping`,
        getInTouch: `mt-10 sm:mt-12 pt-8 sm:pt-10 border-t-2 border-violet-200 dark:border-dark-600 relative`,
        getInTouchText: `text-center text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 font-medium`,
        emailButtonWrapper: `text-center relative inline-block w-full`,
        emailButton: `inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-sky-500 hover:from-violet-700 hover:via-purple-700 hover:to-sky-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-base sm:text-lg relative overflow-hidden group w-full sm:w-auto`,
        emailButtonGlow: `absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`,
        emailIcon: `text-2xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-300`,
        floatingIcon: `absolute text-6xl opacity-10 animate-float`,
        decorativeShape: `absolute w-32 h-32 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-2xl`,
    };

    const socialMedia = [
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/AsriAzhari123",
            color: "group-hover:text-slate-800 dark:group-hover:text-white",
            hoverColor: "from-slate-700 to-slate-900",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/asri-azhari-0988aa229/",
            color: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
            hoverColor: "from-blue-500 to-blue-700",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://www.instagram.com/blueblubblubrock?igsh=MXE3NnhuYTZxbjhxag==",
            color: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
            hoverColor: "from-pink-500 via-purple-500 to-orange-500",
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
            {/* Background decorative elements */}
            <div className={styles.backgroundBlur}>
                <div className={`${styles.gradientBlob} bg-violet-500 top-10 left-10`} />
                <div className={`${styles.gradientBlob} bg-purple-500 bottom-10 right-10`} />
                <div className={`${styles.gradientBlob} bg-sky-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
            </div>

            {/* Floating decorative icons */}
            <div className={`${styles.floatingIcon} top-20 right-20`} style={{ animationDelay: '0s' }}>💬</div>
            <div className={`${styles.floatingIcon} bottom-32 left-10`} style={{ animationDelay: '1s' }}>✉️</div>
            <div className={`${styles.floatingIcon} top-40 left-1/4`} style={{ animationDelay: '2s' }}>🚀</div>

            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>
                    Let's Connect ✨
                </h1>
                <p className={styles.sectionSubtitle}>
                    Find me on social media and let's start a conversation
                </p>
            </div>

            <div className={styles.contactCard}>
                <div className={styles.cardGlow}></div>
                
                {/* Decorative shapes */}
                <div className={`${styles.decorativeShape} -top-16 -right-16`}></div>
                <div className={`${styles.decorativeShape} -bottom-16 -left-16`}></div>

                <div className={styles.contactContent}>
                    <div>
                        <h2 className={styles.contactHeading}>
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            Follow Me on Social Media
                        </h2>
                        <p className={styles.contactText}>
                            If you are interested in me and want to see more about my work, 
                            feel free to connect with me through any of these platforms. 
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 🌟
                        </p>
                    </div>

                    <div className={styles.socialMediaGrid}>
                        {socialMedia.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <LinkTag key={index} url={social.url}>
                                    <div 
                                        className={styles.socialIconWrapper}
                                        onMouseEnter={() => setHoveredSocial(index)}
                                        onMouseLeave={() => setHoveredSocial(null)}
                                        style={{
                                            animationDelay: `${index * 150}ms`
                                        }}
                                    >
                                        <div 
                                            className={styles.socialIconGlow}
                                            style={{
                                                background: hoveredSocial === index 
                                                    ? `linear-gradient(to right, var(--tw-gradient-stops))` 
                                                    : undefined
                                            }}
                                        ></div>
                                        
                                        {/* Animated particles on hover */}
                                        {hoveredSocial === index && (
                                            <div className={styles.socialParticles}>
                                                <span className={styles.particle} style={{ top: '10%', left: '10%', animationDelay: '0s' }}></span>
                                                <span className={styles.particle} style={{ top: '20%', right: '15%', animationDelay: '0.2s' }}></span>
                                                <span className={styles.particle} style={{ bottom: '20%', left: '20%', animationDelay: '0.4s' }}></span>
                                                <span className={styles.particle} style={{ bottom: '15%', right: '10%', animationDelay: '0.6s' }}></span>
                                            </div>
                                        )}
                                        
                                        <IconComponent 
                                            className={`${styles.socialIcon} ${social.color}`}
                                            aria-label={social.name}
                                        />
                                        <span className={styles.socialName}>{social.name}</span>
                                    </div>
                                </LinkTag>
                            );
                        })}
                    </div>

                    <div className={styles.getInTouch}>
                        <p className={styles.getInTouchText}>
                            💌 Or send me an email directly
                        </p>
                        <div className={styles.emailButtonWrapper}>
                            <a 
                                href="mailto:asriazhari29@gmail.com" 
                                className={styles.emailButton}
                                onMouseEnter={() => setIsEmailHovered(true)}
                                onMouseLeave={() => setIsEmailHovered(false)}
                            >
                                <div className={styles.emailButtonGlow}></div>
                                <span className="relative z-10">Get In Touch</span>
                                <span className={`${styles.emailIcon} relative z-10`}>
                                    {isEmailHovered ? '🚀' : '📧'}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(10deg);
                    }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}