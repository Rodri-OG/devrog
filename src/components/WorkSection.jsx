import styles from "@/components/styles/worksection.module.css"
import { useRef } from "react";
import { motion, useScroll, useTransform, } from "framer-motion";
import Image from "next/image";
import codeBlock from "../../public/img/codeBlock.png"


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

        <motion.div className={styles.wrapperSvg}> 
          <motion.div style={{  opacity,scale }} >
            <Image alt="code" src={codeBlock} className={styles.imgSecond}/>
          </motion.div>
        </motion.div>

      </section>
    </>
  )
}