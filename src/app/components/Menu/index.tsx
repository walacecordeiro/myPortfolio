"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { menu } from "./menuData";

import style from "./style.module.scss";

export default function Menu() {
 const [hover, setHover] = useState(-1);

 const [active, setActive] = useState(() => {
  if (typeof window !== "undefined") {
   const sevedActive = localStorage.getItem("active");
   return sevedActive !== null ? Number(sevedActive) : 0;
  } else {
   return 0;
  }
 });

 useEffect(() => {
  if (typeof window !== "undefined") {
   localStorage.setItem("active", active.toString());
  }
 }, [active]);

 return (
  <nav className={style["nav"]}>
   <ul>
    <span className={`${style["light"]} ${style[`${menu[active].dis}`]}`}></span>

    <div className={`${style["dot"]} ${style[`${menu[active].dis}`]}`}></div>

    {menu.map((menu, i) => (
     <React.Fragment key={i}>
      <li
       key={i}
       className={`
      ${active === i ? `${style["activeLi"]}` : ""}
      ${hover === i ? `${style["hoverLi"]}` : ""}
      `}
      >
       {i < 4 ? (
        <Link href={menu.link} legacyBehavior>
         <a
          onClick={() => {
           if (i < 4) setActive(i);
          }}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(-1)}
         >
          <span
           className={`
        ${style["icon"]}
        ${active === i ? `${style["activeIcon"]}` : ""}
        `}
          >
           {menu.icon}
          </span>
          <span
           className={`
        ${style["menuName"]}
        ${active === i ? `${style["activeName"]}` : ""}
        ${hover === i ? `${style["hoverName"]}` : ""}
        `}
          >
           {menu.name}
          </span>
         </a>
        </Link>
       ) : (
        <a
         href={menu.link}
         target="_blank"
         onClick={() => {
          if (i < 4) setActive(i);
         }}
         onMouseEnter={() => setHover(i)}
         onMouseLeave={() => setHover(-1)}
        >
         <span
          className={`
        ${style["icon"]}
        ${active === i ? `${style["activeIcon"]}` : ""}
        `}
         >
          {menu.icon}
         </span>
         <span
          className={`
        ${style["menuName"]}
        ${active === i ? `${style["activeName"]}` : ""}
        ${hover === i ? `${style["hoverName"]}` : ""}
        `}
         >
          {menu.name}
         </span>
        </a>
       )}
      </li>
      {i === 3 && <div className={style["divider"]}></div>}
     </React.Fragment>
    ))}
   </ul>
  </nav>
 );
}
