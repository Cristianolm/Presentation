import React from "react";
import styles from "./GridContent.module.scss";
import { motion } from "framer-motion";

const GridContent: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className={styles.gridContainer}
    >
      <div className={styles.container}>
        <div className={styles.verticalImg}>
          <div className={styles.imageContainer}>
            <div className={styles.image}></div>
          </div>
        </div>
        <div className={styles.squareImg1}>
          <div className={styles.imageContainer}>
            <div className={styles.image}></div>
          </div>
        </div>
        <div className={styles.squareImg2}>
          <div className={styles.imageContainer}>
            <div className={styles.image}></div>
          </div>
        </div>
        <div className={styles.text}>
          <p className="text-black dark:text-black">AI ART</p>
        </div>
      </div>
    </motion.div>
  );
};

export default GridContent;
