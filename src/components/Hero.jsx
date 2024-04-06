'use client'
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles  from "@/components/styles/hero.module.css"



export default function Hero () {

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <motion.section className={styles.heroContainer}
        style={{ opacity }}
        ref={targetRef}
      >
          <h1 className={styles.titleHero}>
            <span>Hola, soy Rodrigo.</span> <br/> 
            <span>Desarrollador de software.</span>
          </h1> 
          <h4 className={styles.textHero}>Me gusta crear soluciones programando.</h4>
      </motion.section>
    </>
  )
}