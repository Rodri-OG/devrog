'use client'

import Link from 'next/link'
import styles from "@/components/styles/navbar.module.css";

export default function (){
  return(
    <>
      <div className={styles.containerNav}>            
        <ul className={styles.ulNavbar}>
        <Link className={styles.linkNav} href="/"><li  > Inicio </li></Link>
        <Link className={styles.linkNav} href={"/about"}><li  > Sobre mí</li></Link>
        <Link className={styles.linkNav} href="#project"><li > Proyectos</li></Link>
        <Link className={styles.linkNav} href="/contact"><li> Contacto</li></Link>
        </ul>
      </div>
    </>
  )
};