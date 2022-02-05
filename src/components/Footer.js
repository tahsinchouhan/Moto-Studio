import React from "react";
import styles from '../styles/Home.module.css'
import AmazonFooter from "./footer/AmazonFooter";
import CenterFooter from "./footer/CenterFooter";
import LastFooter from "./footer/LastFooter";

const Footer = () => {
  return (
    <>
    <div>
     
     {/* <div className={styles.footer}> */}
      <AmazonFooter/>
      <CenterFooter/>
      </div>
     
     
    </>
  );
};

export default Footer;
