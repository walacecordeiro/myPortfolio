"use client";

import VideoFixed from "@/app/components/videoFixed";
import styles from "./layout.module.scss";
import StickyBox from "react-sticky-box";
import Slide from "@/app/components/Slide";
import { projects } from "./projectsData";
import React, { useState } from "react";
import Link from "next/link";

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const [isMoved, setIsMoved] = useState(false);

 const handleMouseDown = () => {
  setIsMoved(false);
 };

 const handleMouseMove = () => {
  setIsMoved(true);
 };

 const handleClick = (e: React.MouseEvent) => {
  if (isMoved) e.preventDefault();
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

    <StickyBox offsetTop={-37}>
     <Slide>
      <div
       className={styles["btnsWrapper"]}
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
      >
       {projects.map((project, i) => (
        <React.Fragment key={i}>
         <Link scroll={false} onClick={handleClick} href={project.link}>
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
