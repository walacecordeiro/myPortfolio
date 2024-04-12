"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { menu } from "./menuData";

import { usePathname } from "next/navigation";

import style from "./style.module.scss";

export default function Menu() {
 const [hover, setHover] = useState(-1);
 const [active, setActive] = useState(0);
 const [isInitialized, setIsInitialized] = useState(false);

 const pathName = usePathname();

 useEffect(() => {
  if (!isInitialized) {
   const savedActive = localStorage.getItem("active");
   if (savedActive !== null) {
    setActive(Number(savedActive));
   }
   setIsInitialized(true);
  } else {
   localStorage.setItem("active", active.toString());
  }
 }, [active, isInitialized]);

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
        <Link scroll href={menu.link} legacyBehavior>
         <a
          onClick={() => {
           if (i < 4) setActive(i);
          }}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(-1)}
         >
          <span
           className={`${style["icon"]} ${
            pathName === `${menu.link}` ? `${style["activeIcon"]}` : ""
           }`}
          >
           {menu.icon}
          </span>
          <span
           className={`
        ${style["menuName"]}
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
         //  onClick={() => {
         //   if (i < 4) setActive(i);
         //  }}
         onMouseEnter={() => setHover(i)}
         onMouseLeave={() => setHover(-1)}
        >
         <span className={`${style["icon"]}`}>{menu.icon}</span>
         <span className={`${style["menuName"]} ${hover === i ? `${style["hoverName"]}` : ""}`}>
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
