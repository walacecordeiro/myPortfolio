"use client";

import React, { useRef, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
 const [isDown, setIsDown] = useState(false);
 const [startX, setStartX] = useState(0);
 const [scrollLeft, setScrollLeft] = useState(0);
 const [isMoved, setIsMoved] = useState(false);

 const slider = useRef<HTMLDivElement>(null);

 const handleMouseDown = (e: React.MouseEvent) => {
  e.preventDefault();
  if (!slider.current) return;
  setIsDown(true);
  setIsMoved(false);
  setStartX(e.pageX - slider.current.offsetLeft);
  setScrollLeft(slider.current.scrollLeft);
 };

 const handleMouseLeave = () => {
  setIsDown(false);
 };

 const handleMouseUp = (e: React.MouseEvent) => {
  setIsDown(false);
  if (isMoved) e.stopPropagation();
 };

 const handleMouseMove = (e: React.MouseEvent) => {
  if (!isDown || !slider.current) return;
  e.preventDefault();
  setIsMoved(true);
  const x = e.pageX - slider.current.offsetLeft;
  const walk = (x - startX) * 1; // scroll-fast
  slider.current.scrollLeft = scrollLeft - walk;
 };

 return (
  <main className={styles["main"]}>
   <section className={styles["myInfo"]}>
    <div className={styles["text"]}>
     <h1>Walace Cordeiro dos Santos</h1>
     <p>
      Desenvolvedor Web focado em programação e tecnologias de front-end, com experiência em HTML,
      CSS e JavaScript, juntamente com frameworks como React e Next.js. Além disso, trago
      conhecimentos em Wordpress, bem como na gestão de campanhas de publicidade digital, incluindo
      Google Ads e Facebook Ads.
     </p>
    </div>
   </section>

   <section className={styles["myProjects"]}>
    <h3>Projetos</h3>
    <div
     className={styles["cardsWrapper"]}
     ref={slider}
     onMouseDown={handleMouseDown}
     onMouseLeave={handleMouseLeave}
     onMouseUp={handleMouseUp}
     onMouseMove={handleMouseMove}
     onClick={(e) => { if (isMoved) e.preventDefault(); }}
    >
     <a href="#" className={styles["cards"]}>
      <img src="/designProject.png" alt="" />
      <div className={styles["description"]}>
       <h4>Design</h4>
       <p>Meu primeiro projeto</p>
      </div>
     </a>
     <a href="#" className={styles["cards"]}>
      <img src="/designProject.png" alt="" />
      <div className={styles["description"]}>
       <h4>Design</h4>
       <p>Meu primeiro projeto</p>
      </div>
     </a>
     <a href="#" className={styles["cards"]}>
      <img src="/designProject.png" alt="" />
      <div className={styles["description"]}>
       <h4>Design</h4>
       <p>Meu primeiro projeto</p>
      </div>
     </a>
    </div>
   </section>
  </main>
 );
}
