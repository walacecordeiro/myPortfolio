"use client";

import React, { useRef, useState } from "react";
import styles from "./style.module.scss";

export default function Slide() {
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
 );
}
