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
      <div className={style["perfil"]}>
       <Image priority src={perfil} width={150} height={150} alt="Minha foto de perfil" />
       <div>
        <h3>Walace Cordeiro dos Santos</h3>
        <h6>Desenvolvedor Front-End &#124; Gestor de tráfego</h6>
       </div>
      </div>

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

      <h4>Objetivo de carreira</h4>
      <p>
       Meu objetivo é trabalhar em um ambiente que valorize a inovação e a colaboração, onde eu
       possa participar de projetos desafiadores e contribuir para o crescimento da empresa.
       Acredito que minha experiência prática e minha paixão pelo desenvolvimento web me permitem
       trazer uma perspectiva única e valiosa para qualquer equipe.
      </p>

      <p>
      Além disso, estou comprometido a me manter atualizado com as últimas tendências e tecnologias no campo do desenvolvimento web. Minha experiência com ReactJs, NextJs e Wordpress, juntamente com minha habilidade para gerenciar campanhas de publicidade digital utilizando Google Ads, me permite criar soluções eficazes que atendem às necessidades dos usuários e alcançam os objetivos de negócios.
      </p>

      <p>Em suma, minha meta é aplicar minha experiência e conhecimentos para desenvolver soluções web de alta qualidade que impulsionem o sucesso dos negócios. Além de contribuir para uma equipe dinâmica e ajudar a empresa a atingir seus objetivos estratégicos, estou igualmente focado em meu próprio crescimento profissional. Estou comprometido em aprender continuamente e me adaptar às últimas tendências e tecnologias, o que acredito que não apenas beneficiará minha carreira, mas também agregará valor significativo à equipe com a qual estarei trabalhando.</p>

      <p>Agradeço sua atenção e estou ansioso para explorar como posso contribuir para o sucesso da sua empresa, enquanto também busco oportunidades para expandir minhas habilidades e conhecimentos.</p>
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
