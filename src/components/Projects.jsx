'use client'
import styles from "@/components/styles/projects.module.css"
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, } from "framer-motion";
import Image from "next/image";
import project01 from "../../public/img/Captura_de_Pantalla_01.png" 
import project02 from "../../public/img/Captura_de_Pantalla_portfolio_01.png"


export default function () {

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);

  return (
    <>
      <section className={styles.projectContainer} ref={targetRef}>
        
          <motion.div className={styles.firstContainer} style={{opacity}}   whileHover={{ scale: 1.01,transition: { duration: 0.5 },}}>
            
              <h3 className={styles.titleProjects}>Proyecto: "Qué vemos"</h3>
              <div className={styles.socialLink}>
                  <a href="https://github.com/Rodri-OG/movie-generation/tree/main">
                  <svg className={styles.iconSocial} stroke="#b4bcd0" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
              </div> 
              <Link href="https://to-see-app.vercel.app/">
              <div className={styles.imagesWrapper}>
                <Image alt="project01" src={project01} className={styles.imgStyle}/>
              </div>
              </Link>
            
          </motion.div>
          
          
          
          <motion.div className={styles.secondContainer} style={{opacity}}   whileHover={{ scale: 1.01,transition: { duration: 0.5 },}}>
            <h3 className={styles.titleProjects}>Proyecto: "Portfolio"</h3>
            <div className={styles.socialLink}>
                  <a href="https://github.com/Rodri-OG">
                  <svg className={styles.iconSocial} stroke="#b4bcd0" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
            </div> 
            <Link href="https://devrog.vercel.app/">
              <div className={styles.imagesWrapper}>
                <Image alt="project02" src={project02} className={styles.imgStyle}/>
              </div>
            </Link>

          </motion.div>
         
      </section>
    </>
  )
};