"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

type SlideProps = {
 children: React.ReactNode;
};

export default function Slide({ children }: SlideProps) {
 const [isDown, setIsDown] = useState(false);
 const [startX, setStartX] = useState(0);
 const [scrollLeft, setScrollLeft] = useState(0);
 const [preventClick, setPreventClick] = useState(false);
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
  if (isMoved) {
   e.stopPropagation();
   setPreventClick(true);
  }
 };

 const handleMouseMove = (e: React.MouseEvent) => {
  if (!isDown || !slider.current) return;
  e.preventDefault();
  setIsMoved(true);
  const x = e.pageX - slider.current.offsetLeft;
  const walk = (x - startX) * 1; // scroll-fast
  slider.current.scrollLeft = scrollLeft - walk;
 };

 const handleClick = (e: React.MouseEvent) => {
  if (preventClick) {
   e.preventDefault();
   e.stopPropagation();
   setPreventClick(false);
  }
 };

 return (
  <div
   className={styles["slideWrapper"]}
   ref={slider}
   onMouseDown={handleMouseDown}
   onMouseLeave={handleMouseLeave}
   onMouseUp={handleMouseUp}
   onMouseMove={handleMouseMove}
   onClick={handleClick}
  >
   {children}
  </div>
 );
}
