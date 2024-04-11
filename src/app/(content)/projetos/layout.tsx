"use client";

import VideoFixed from "@/app/components/videoFixed";
import styles from "./layout.module.scss";
import StickyBox from "react-sticky-box";
import Slide from "@/app/components/Slide";
import { projects } from "./projectsData";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const [isMoved, setIsMoved] = useState(false);
 const [active, setActive] = useState(0);
 const [isInitialized, setIsInitialized] = useState(false);

 useEffect(() => {
  if (!isInitialized) {
   const savedActive = localStorage.getItem("activeProject");
   if (savedActive !== null) {
    setActive(Number(savedActive));
   }
   setIsInitialized(true);
  } else {
   localStorage.setItem("activeProject", active.toExponential());
  }
 }, [active, isInitialized]);

 const handleMouseDown = () => {
  setIsMoved(false);
 };

 const handleMouseMove = () => {
  setIsMoved(true);
 };

 const handleClick = (e: React.MouseEvent, indice: number) => {
  if (isMoved) e.preventDefault();
  setActive(indice);
 };

 return (
  <>
   <main className={styles["main"]}>
    <section className={styles["myInfo"]}>
     <div className={styles["text"]}>
      <h1>Detalhes dos Projetos</h1>
      <p>
       Em cada projeto, você encontrará uma combinação de várias tecnologias, principalemente HTML,
       CSS, JavaScript, React.js e Next.js. Cada projeto é um testemunho do meu compromisso com a
       aprendizagem contínua e da minha paixão pela inovação. Obrigado por visitar!
      </p>
     </div>
     <VideoFixed />
    </section>

    <StickyBox offsetTop={-40}>
     <Slide>
      <div
       className={styles["btnsWrapper"]}
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
      >
       {projects.map((project, i) => (
        <React.Fragment key={i}>
         <Link
          className={`${active === i ? `${styles["active"]}` : ""}`}
          scroll={false}
          onClick={(e) => {
           handleClick(e, i);
          }}
          href={project.link}
         >
          Projeto {i + 1}
         </Link>
         <Link
          className={`${active === i ? `${styles["active"]}` : ""}`}
          scroll={false}
          onClick={(e) => {
           handleClick(e, i);
          }}
          href={project.link}
         >
          Projeto {i + 1}
         </Link>
         <Link
          className={`${active === i ? `${styles["active"]}` : ""}`}
          scroll={false}
          onClick={(e) => {
           handleClick(e, i);
          }}
          href={project.link}
         >
          Projeto {i + 1}
         </Link>
        </React.Fragment>
       ))}
      </div>
     </Slide>
    </StickyBox>

    <div>{children}</div>
   </main>
  </>
 );
}
