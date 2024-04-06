import styles from "@/components/styles/worksection.module.css"
import { useRef } from "react";
import { motion, useScroll, useTransform, } from "framer-motion";

export default function WorkSection () {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1.2]); 

  return(
    <>
      <section
      className={styles.secondContainer} 
      ref={targetRef}>

        <motion.div className={styles.textWrapperSecond} style={{ opacity }} >
              <h1 className={styles.titleSecond}>Trabajemos en equipo. </h1>
              <br/> 
              <h3 className={styles.textSecond}>Diseñemos experiencias creativas y centradas en el usuario.</h3>
        </motion.div>

        <div className={styles.wrapperSvg}> 
          <motion.img style={{  opacity,scale }} alt="portfolio" src="http://localhost:3000/img/codeBlock.png" className={styles.imgSecond}/>
        </div>

      </section>
    </>
  )
}