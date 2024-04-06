import styles from "@/components/styles/skills.module.css"
import { motion, useScroll, useTransform, } from "framer-motion";
import { useRef } from "react";



export default function Skills (){

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.3 0.7", "start end"],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);


  return(
    <>
      <motion.div style={{opacity}} className={styles.skillsContainer} ref={targetRef}>
        <span className={styles.skillsWrapper}>Javascript</span>
        <span className={styles.skillsWrapper}>Next.js</span>
        <span className={styles.skillsWrapper}>React.js</span>
        <span className={styles.skillsWrapper}>Node.js</span>
        <span className={styles.skillsWrapper}>HTML</span>
        <span className={styles.skillsWrapper}>CSS</span>
        <span className={styles.skillsWrapper}>TailwinsCSS</span>
        <span className={styles.skillsWrapper}>Git</span>
        <span className={styles.skillsWrapper}>GitHub</span>
        <span className={styles.skillsWrapper}>Figma</span>
        
      </motion.div>

    </>
  )
};