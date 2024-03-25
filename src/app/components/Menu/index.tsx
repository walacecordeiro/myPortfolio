"use client";

import React, { useState } from "react";
import Link from "next/link";

import { AiFillHome } from "react-icons/ai";
import { FaUserAstronaut, FaPencilRuler, FaLinkedin } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

import style from "./style.module.scss";

export default function Menu() {
 const menu = [
  {
   name: "Início",
   link: "/",
   icon: <AiFillHome className="icons" />,
   dis: "distance0",
  },
  {
   name: "Sobre",
   link: "/sobre",
   icon: <FaUserAstronaut className="icons" />,
   dis: "distance1",
  },
  {
   name: "Projetos",
   link: "/projetos",
   icon: <FaPencilRuler className="icons" />,
   dis: "distance2",
  },
  {
   name: "Contato",
   link: "/contato",
   icon: <MdContactMail className="icons" />,
   dis: "distance3",
  },
  {
   name: "Meu Linkedin",
   link: "https://www.linkedin.com/in/walace-cordeiro-dos-santos/",
   icon: <FaLinkedin className="icons" />,
   dis: "distance4",
  },
 ];

 const [active, setActive] = useState(0);
 const [hover, setHover] = useState(-1);

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
