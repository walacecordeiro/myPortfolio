import React from "react";
import style from "./page.module.scss";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import perfil from "../../../../public/perfil.webp";
import { FaLinkedin } from "react-icons/fa";

export default function Sobre() {
 return (
  <main className={style["main"]}>
   <Image src={perfil} width={150} height={150} alt="Minha foto de perfil" />
   <section className={style["cols2"]}>
    <div className={style["col1"]}>
     <h3>Walace Cordeiro dos Santos</h3>
     <h6>Desenvolvedor Front-End</h6>
     <p>
     Minha rotina envolve a utilização de tecnologias fundamentais como <strong>HTML, CSS e JavaScript</strong>. Tenho uma forte inclinação para frameworks modernos, principalmente <strong>ReactJs e NextJs</strong>. Além disso, possuo conhecimento prático com <strong>Wordpress</strong> e gestão de campanhas de publicidade digital utilizando <strong>Google Ads</strong>.
     </p>
    </div>
    <div className={style["col2"]}>
     <p>walacecordeirodossantos@gmail.com</p>
     <p>+55 21 98877-8644</p>
     <p>Rio de Janeiro, Campo Grande</p>
     <div className={style["icons"]}>
      <a href="https://www.linkedin.com/in/walace-cordeiro-dos-santos/" target="_blanck">
       <FaLinkedin className="icons" />
      </a>
     </div>
    </div>
   </section>
   <Footer />
  </main>
 );
}
