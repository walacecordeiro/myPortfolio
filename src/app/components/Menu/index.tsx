"use client";

import React, { useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { FaUserAstronaut, FaPencilRuler } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Menu() {
 const menu = [
  {
   name: "Início",
   icon: <AiFillHome className="icons" />,
   dis: "translate-y-0",
   act: "bg-red-500",
  },
  {
   name: "Sobre",
   icon: <FaUserAstronaut className="icons" />,
   dis: "translate-y-16",
   act: "bg-red-500",
  },
  {
   name: "Projetos",
   icon: <FaPencilRuler className="icons" />,
   dis: "translate-y-32",
   act: "bg-red-500",
  },
  {
   name: "Contato",
   icon: <MdMarkEmailUnread className="icons" />,
   dis: "translate-y-48",
   act: "bg-red-500",
  },
 ];

 const [active, setActive] = useState(0);
 const [hover, setHover] = useState(-1);

 return (
  <div
   className={`
           bg-gradient-to-b from-gray-800 to-gray-900
           max-w-fit rounded-full py-1 px-1
           shadow-lg shadow-black backdrop-blur-md
        `}
  >
   <ul className={`flex flex-col items-center relative gap-y-2`}>
    <span
     id="light"
     className={`
            bg-gray-600 duration-500 w-14 h-14 rounded-full blur-md
            absolute -z-10 ${menu[active].dis}
          `}
    ></span>
    {menu.map((menu, i) => (
     <li
      key={i}
      className={`
                flex justify-center items-center 
                w-14 h-14 rounded-full
                transition duration-500

                ${active === i ? "bg-transparent cursor-default" : ""}
                ${hover === i ? `bg-gray-700` : ""}
               
            `}
     >
      <a
       className={`flex items-center`}
       onClick={() => setActive(i)}
       onMouseEnter={() => setHover(i)}
       onMouseLeave={() => setHover(-1)}
      >
       <span
        className={`
                    cursor-pointer flex flex-col items-center text-gray-400 gap-1
                    ${active === i ? "text-gray-100 duration-700 cursor-default" : ""}
                `}
       >
        {menu.icon}
       </span>
       <span
        className={`
                    absolute pointer-events-none
                ${active === i ? "translate-x-12 duration-500 opacity-100" : ""}

                ${
                 hover === i
                  ? "translate-x-14 duration-500 opacity-100"
                  : "opacity-0 translate-x-20"
                }
              `}
       >
        {menu.name}
       </span>
      </a>
     </li>
    ))}
   </ul>
  </div>
 );
}
