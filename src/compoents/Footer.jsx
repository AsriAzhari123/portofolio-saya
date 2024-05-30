import React from "react";

const Footer = () => {
  const styles = {
    footer: "py-5 w-full",
    footerCopyrightWrapper: `flex justify-center items-center dark:text-slate-200`,
    footerCopyrightContent: `text-sm lg:text-base`,
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerCopyrightWrapper}>
        <p className={styles.footerCopyrightContent}>Portofolio Asri Azhari</p>
      </div>
    </div>
  );
};

export default Footer;
