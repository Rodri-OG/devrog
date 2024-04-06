'use client'
//Components
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import Projects from "@/components/Projects";



//Styles
import styles from "./page.module.css";


export default function Home() {

  return (

  <div className={styles.bodyStyle}>


    <div className={styles.headerStyle}>
      <NavBar/>
    </div>
 

    <section className={styles.main}>
      <div className={styles.blob}/>

      <div className={styles.first} >
          <Hero/>
      </div>

      
        <div className={styles.second} >
          <WorkSection/>
        </div>
    

      <div className={styles.third} id="project">
        <h1  >Proyectos</h1>
        <div className={styles.wrapperProject}><Projects/></div>
      </div>

      <div className={styles.fourthContainer}>
       <h1>Habilidades técnicas</h1>
        <Skills/>
        
      </div>

      
    </section>
    <footer className={styles.footerStyle}>
      <span>© 2024 Rodrigo Dev</span>
     <div className={styles.socialLink}>
        <a href="https://www.linkedin.com/in/rodrigo-garcia-82897928b"   >
          <svg className={styles.iconSocial} stroke="#b4bcd0" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        <a href="https://github.com/Rodri-OG">
          <svg className={styles.iconSocial} stroke="#b4bcd0" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div> 
    </footer>
  </div>
  );
}
