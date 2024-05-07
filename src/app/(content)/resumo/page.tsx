import React from "react";
import style from "./page.module.scss";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import perfil from "../../../../public/perfil.webp";
import ImageModal from "@/app/components/ImageModal";
import { resumeData } from "./resumeData";
import Form from "@/app/components/Form";

export default function Sobre() {
 const justExperience = resumeData.skills.filter((skill) => skill.justExperience);

 const noExperienceSkill = resumeData.skills.filter((skill) => !skill.justExperience);

 return (
  <>
   <main className={style["main"]}>
    <section className={style["cols2"]}>
     <div className={style["col1"]}>
      <div className={style["perfil"]}>
       <Image priority src={perfil} width={150} height={150} alt="Minha foto de perfil" />
       <div>
        <h3>Walace Cordeiro dos Santos</h3>
        <h6>Desenvolvedor Front-End &#124; Gestor de tráfego</h6>
       </div>
      </div>

      <p>
       Minha rotina basicamente é usar tecnologias fundamentais como{" "}
       <strong>HTML, CSS e JavaScript</strong>. Tenho um forte interesse em frameworks modernos, uso
       principalmente <strong>ReactJs e NextJs</strong>. Além disso, tenho experiência com{" "}
       <strong>Wordpress</strong> e gestão de campanhas de publicidade digital usando principalmente
       o <strong>Google Ads</strong>.
      </p>

      <h4>Meus certificados</h4>
      <div className={style["wrappingContent"]}>
       {resumeData.certificates.map((data, i) => (
        <ImageModal key={i} src={data.src} link={data.link}/>
       ))}
      </div>

      <h4>Objetivo de carreira</h4>
      <p>
       Meu objetivo é trabalhar em um ambiente focado na inovação, onde eu possa aprimorar minhas
       habilidades participando de projetos em equipe e consequentemente contribuir para o
       crescimento da empresa. Acredito que atualmente o conhecimento que tenho em desenvolvimento
       web me permite sim somar nos resultados das empresas.
      </p>

      <p>
       Além disso, estou comprometido a me manter atualizado com as últimas tendências e tecnologias
       no campo do desenvolvimento web. Minha experiência com ReactJs, NextJs e Wordpress, junto com
       minha habilidade em gerenciar campanhas de publicidade digital usando o Google Ads, me
       permite criar soluções eficazes que atendem às necessidades dos usuários e alcançam os
       objetivos de negócios.
      </p>

      <p>
       Para resumir, minha meta é usar minha experiência prática e conhecimento para avançar na
       carreira profissional nesta área. Consequentemente, junto com a empresa em que eu trabalhar,
       irei focar em atingir nossos objetivos de negócios. Então acredito que minha meta não apenas
       irá beneficiar minha carreira, mas também pode beneficiar todos com quem estarei trabalhando.
      </p>

      <p>
       Se você leu até aqui, agradeço sua atenção, e fico ansioso para entender como posso
       contribuir para os resultados da sua empresa, enquanto também busco oportunidades para
       expandir minhas habilidades e conhecimentos.
      </p>
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
    <Footer />
   </main>
  </>
 );
}
