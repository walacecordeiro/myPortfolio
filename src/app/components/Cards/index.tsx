"use client";

import { projects } from "@/app/(content)/projetos/projectsData";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

type CardProps = {
 highlight?: boolean;
 wrap: "wrap" | "nowrap" | "wrap-reverse";
};

export default function Cards({ highlight, wrap }: CardProps) {
 const highlightedProjects = projects.filter((project) => project.highlight);

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
  <div
   className={styles["cardsWrapper"]}
   style={{ flexWrap: `${wrap}` }}
   onMouseDown={handleMouseDown}
   onMouseMove={handleMouseMove}
  >
   {highlight &&
    highlightedProjects.map((project, i) => (
     <React.Fragment>
      <Link href={project.link} className={styles["cards"]}>
       <div
        className={styles["imgDiv"]}
        style={{ backgroundImage: `url(${project.imgSRC})` }}
        onClick={handleClick}
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
        onClick={handleClick}
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
