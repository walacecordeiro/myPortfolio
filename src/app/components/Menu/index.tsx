"use client";

import React, { useState } from "react";
import Link from "next/link";
import { menu } from "./menuData";

import { usePathname } from "next/navigation";

import style from "./style.module.scss";

export default function Menu() {
 const [hover, setHover] = useState(-1);

 const pathName = usePathname();
 const pathSegments = pathName.split("/");
 const lastSegment = pathSegments[pathSegments.length - 1];
 const activeIndex = menu.findIndex((obj) => pathName === obj.link);
 const isPathInMenu = menu.some((obj) => obj.link === pathName);

 const lightAndDot = `${isPathInMenu ? style[menu[activeIndex].dis] : ""} ${
  pathName.includes(`/projetos/${lastSegment}`) ? style[menu[1].dis] : ""
 }`;

 return (
  <nav className={style["nav"]}>
   <ul>
    <span className={`${style["light"]} ${lightAndDot}`}></span>
    <div className={`${style["dot"]} ${lightAndDot}`}></div>

    {menu.map((menu, i) => (
     <React.Fragment key={i}>
      <li
       key={i}
       className={`
      ${
       pathName === menu.link || (i === 1 && pathName.startsWith("/projetos"))
        ? style["activeLi"]
        : ""
      }
      ${hover === i ? style["hoverLi"] : ""}
      `}
      >
       {i < 3 ? (
        <Link scroll href={menu.link} legacyBehavior>
         <a onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}>
          <span
           className={`${style["icon"]} ${
            pathName === menu.link || (i === 1 && pathName.startsWith("/projetos"))
             ? style["activeIcon"]
             : ""
           }`}
          >
           {menu.icon}
          </span>
          <span
           className={`
        ${style["menuName"]}
        ${hover === i ? style["hoverName"] : ""}
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
         onMouseEnter={() => setHover(i)}
         onMouseLeave={() => setHover(-1)}
        >
         <span className={style["icon"]}>{menu.icon}</span>
         <span className={`${style["menuName"]} ${hover === i ? style["hoverName"] : ""}`}>
          {menu.name}
         </span>
        </a>
       )}
      </li>
      {i === 2 && <div className={style["divider"]}></div>}
     </React.Fragment>
    ))}
   </ul>
  </nav>
 );
}
