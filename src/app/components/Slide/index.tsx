"use client";

import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { projects } from "../../(content)/projetos/projectsData";
import Link from "next/link";

type SlideProps = {
 highlight?: boolean;
};

export default function Slide({ highlight }: SlideProps) {
 const [isDown, setIsDown] = useState(false);
 const [startX, setStartX] = useState(0);
 const [scrollLeft, setScrollLeft] = useState(0);
 const [isMoved, setIsMoved] = useState(false);

 const highlightedProjects = projects.filter((project) => project.highlight);

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
  <div
   className={styles["cardsWrapper"]}
   ref={slider}
   onMouseDown={handleMouseDown}
   onMouseLeave={handleMouseLeave}
   onMouseUp={handleMouseUp}
   onMouseMove={handleMouseMove}
   onClick={(e) => {
    if (isMoved) e.preventDefault();
   }}
  >
   {highlight &&
    highlightedProjects.map((project, i) => (
     <React.Fragment key={i}>
      <Link href={project.link} className={styles["cards"]}>
       <div
        className={styles["imgDiv"]}
        style={{ backgroundImage: `url(${project.imgSRC})` }}
       ></div>
       <div className={styles["description"]}>
        <h6>{project.title}</h6>
        <p>{project.description}</p>
       </div>
      </Link>
     </React.Fragment>
    ))}

   {!highlight &&
    projects.map((project, i) => (
     <React.Fragment key={i}>
      <Link href={project.link} className={styles["cards"]}>
       <div
        className={styles["imgDiv"]}
        style={{ backgroundImage: `url(${project.imgSRC})` }}
       ></div>
       <div className={styles["description"]}>
        <h6>{project.title}</h6>
        <p>{project.description}</p>
       </div>
      </Link>
     </React.Fragment>
    ))}
  </div>
 );
}
