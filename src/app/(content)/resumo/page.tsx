import React from "react";
import style from "./page.module.scss";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import perfil from "../../../../public/perfil.webp";
import ImageModal from "@/app/components/ImageModal";
import { resumeData } from "./resumeData";
import Form from "@/app/components/Form";

export default function Sobre() {
 const justExperience = resumeData.filter((skill) => skill.justExperience);

 const noExperienceSkill = resumeData.filter((skill) => !skill.justExperience);

 return (
  <>
   <main className={style["main"]}>
    <section className={style["cols2"]}>
     <div className={style["col1"]}>
      <Image priority src={perfil} width={150} height={150} alt="Minha foto de perfil" />
      <h3>Walace Cordeiro dos Santos</h3>
      <h6>Desenvolvedor Front-End &#124; Gestor de tráfego</h6>
      <p>
       Minha rotina envolve a utilização de tecnologias fundamentais como{" "}
       <strong>HTML, CSS e JavaScript</strong>. Tenho uma forte inclinação para frameworks modernos,
       principalmente <strong>ReactJs e NextJs</strong>. Além disso, possuo conhecimento prático com{" "}
       <strong>Wordpress</strong> e gestão de campanhas de publicidade digital utilizando{" "}
       <strong>Google Ads</strong>.
      </p>

      <h4>Meus certificados</h4>
      <div className={style["wrappingContent"]}>
       <ImageModal src="/conectar-certificate.webp" />
       <ImageModal src="/devlinks-certificate-dark.webp" />
       <ImageModal src="/nlw-ia-certificate.webp" />
      </div>
      <div className={style["wrappingContent"]}>
       <ImageModal src="/conectar-certificate.webp" />
       <ImageModal src="/devlinks-certificate-dark.webp" />
       <ImageModal src="/nlw-ia-certificate.webp" />
      </div>
      <div className={style["wrappingContent"]}>
       <ImageModal src="/conectar-certificate.webp" />
       <ImageModal src="/devlinks-certificate-dark.webp" />
       <ImageModal src="/nlw-ia-certificate.webp" />
      </div>
     </div>

     <div className={style["col2"]}>
      <div className={style["skills"]}>
       {noExperienceSkill && (
        <>
         <h4>Minhas skills</h4>
         <div className={style["icons"]}>
          <div className={style["wrappingSkills"]}>
           {noExperienceSkill.map((data, i) => (
            <div className={style["skills"]} key={i}>
             <img src={data.icon} title={data.text} />
             <p>{data.text}</p>
            </div>
           ))}
          </div>
         </div>
        </>
       )}

       {justExperience && (
        <>
         <h4>Conhecimento em:</h4>
         <div className={style["icons"]}>
          <div className={style["wrappingSkills"]}>
           {justExperience.map((skill, i) => (
            <div className={style["skills"]} key={i}>
             <img src={skill.icon} title={skill.text} />
             <p>{skill.text}</p>
            </div>
           ))}
          </div>
         </div>
        </>
       )}
      </div>

      <Form />
     </div>
    </section>
   </main>
   <Footer />
  </>
 );
}
