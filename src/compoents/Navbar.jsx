import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import navLogo from "../favicon.svg";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Navbar = () => {
  const [scrolled, setSrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  
  const navbarRef = useRef(null);
  const navbarWrapperRef = useRef();

  useOnClickOutside(navbarWrapperRef, () => setToggle(false));

  const style = {
    navbar: `fixed border-b border-gray-200 dark:border-dark-500 top-0 w-full z-20 py-3 sm:py-4 ${
      scrolled
        ? "bg-[#f6f8fd]/50 backdrop-blur-md ease-in duration-200 dark:bg-dark-800/90"
        : "ease-out duration-200 dark:bg-dark-900"
    }`,
    navbarContainer: `mx-4 sm:mx-6 md:mx-12 flex flex-wrap justify-between items-center`,
    navbarLogoContainer: `flex items-center justify-center`,
    navbarLogo: `w-8 h-8 sm:w-10 sm:h-10`,
    navbarMenu: `hidden w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto md:font-medium`,
    navbarMenuListWrapper: `flex flex-row space-x-6 xl:space-x-10`,
    navbarLink: `block font-semibold select-none link py-2 text-sm xl:text-base text-center dark:text-white hover:text-violet-700 hover:dark:text-violet-700 cursor-pointer transition-colors duration-200`,
    navbarBtn: `border-l-[0.01rem] pl-5 dark:border-dark-500`,
    navbarLinkActive: `text-violet-700 dark:text-violet-500`,
    navbarLinkMobileActive: `bg-violet-500 text-white rounded-md`,
    hamburgerMenu: `z-50 lg:hidden cursor-pointer rounded-full text-lg w-[37px] h-[37px] hover:bg-gray-200 dark:hover:bg-dark-500 flex items-center justify-center`,
    hamburgerLine: `w-[17px] h-[2px] bg-slate-800 dark:bg-white transition-all duration-300 ease-in-out`,
    mobileMenuWrapper: `fixed shadow-md border-l top-0 right-0 bottom-0 h-screen lg:hidden bg-white dark:bg-dark-800 dark:border-0 overflow-y-auto`,
    mobileMenuHeader: `flex justify-between align-middle relative px-5 py-2.5 items-center`,
  };

  const slideUp = {
    hidden: {
      y: -30,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        type: "spring",
        ease: "easeInOut",
      },
    },
  };

  const navLink = [
    { id: 1, setTo: "hero", name: "Main" },
    { id: 2, setTo: "about", name: "About" },
    { id: 3, setTo: "built", name: "My Project" },
    { id: 4, setTo: "contact", name: "Social Media" }, 
  ];
  
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 70) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };
  });
  
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed z-10 inset-0 bg-dark-900/50 backdrop-blur lg:hidden transition-opacity duration-200 ${
          toggle ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>
      
      <nav ref={navbarWrapperRef} className={style.navbar}>
        <div className={style.navbarContainer}>
          <div className={style.navbarLogoContainer}>
            <img src={navLogo} className={style.navbarLogo} alt="logo-nav" />
          </div>
          
          <div className={style.navbarMenu}>
            <motion.ul
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className={style.navbarMenuListWrapper}
            >
              {navLink &&
                navLink.map((item, i) => (
                  <motion.li className="pr-3 lg:pr-5" variants={slideUp} key={i}>
                    <Link
                      to={item.setTo}
                      spy={true}
                      smooth={true}
                      offset={-500}
                      activeClass={style.navbarLinkActive}
                      duration={500}
                      className={style.navbarLink}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
            </motion.ul>
          </div>

          {/* Hamburger Icon (3 lines) */}
          <div onClick={() => setToggle(!toggle)} className={style.hamburgerMenu}>
            <div className="flex flex-col gap-[5px] items-center justify-center">
              <span className={`${style.hamburgerLine} ${toggle ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`${style.hamburgerLine} ${toggle ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`${style.hamburgerLine} ${toggle ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {toggle && (
            <motion.div
              ref={navbarRef}
              initial={{ width: 0 }}
              animate={{
                width: 250,
              }}
              exit={{
                width: 0,
                transition: { ease: "circIn" },
              }}
              className={style.mobileMenuWrapper}
            >
              <div className={style.mobileMenuHeader}>
                {/* Logo on mobile menu */}
                <img src={navLogo} className="w-8 h-8" alt="logo-nav" />
              </div>
              
              <ul className="flex flex-col justify-center space-y-5 p-5 mt-4">
                {navLink &&
                  navLink.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.setTo}
                        spy={true}
                        activeClass={style.navbarLinkMobileActive}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="block py-3 px-5 text-slate-800 dark:text-white cursor-pointer font-medium hover:bg-gray-100 dark:hover:bg-dark-700 rounded-md transition-colors duration-200"
                        onClick={() => {
                          setToggle(false);
                          if (item.setTo === "contact") {
                            document.getElementById("contact").scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;