import React from "react";
import style from "./page.module.scss";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import perfil from "/public/perfil.webp";
import ImageModal from "@/app/components/ImageModal";
import { dataBase } from "./database/dataBase";
import Form from "@/app/components/Form";

export default function Sobre() {
 const designSkill = dataBase.skills.filter((skill) => skill.designSkill);

 const noExperienceSkill = dataBase.skills.filter((skill) => !skill.designSkill);

 return (
  <>
   <main className={style["main"]}>
    <section className={style["cols2"]}>
     <div className={style["col1"]}>
      <div className={style["perfil"]}>
       <Image priority src={perfil} width={150} height={150} alt="Minha foto de perfil" />
       <div>
        <h3>Walace Cordeiro dos Santos</h3>
        <h6>UX/UI Designer &#124; Front-End Developer</h6>
       </div>
      </div>

      <p>
       Anos me dedicando a aprender algumas tecnologias front-end como <strong>React</strong> e{" "}
       <strong>Next.js</strong>, percebi que o que realmente me atrai e desperta boas emoções é a
       experiência visual da construção das interfaces: cores, tipografias, pixels… <br />
       <br />
       Com base nessa percepção pessoal, decidi mudar minha trajetória e me especializar em <strong>UX/UI
       Design</strong>. <br />
       <br />
       Acredito que combinar meus conhecimentos em <strong>prototipagem e desenvolvimento</strong> pode me tornar um
       profissional capaz de harmonizar minha equipe de designers com a equipe de desenvolvedores nos
       projetos em questão, uma abordagem híbrida que pode fazer a diferença.
      </p>

      <h4>Meus certificados</h4>
      <div className={style["wrappingContent"]}>
       {dataBase.certificates.map((data, i) => (
        <ImageModal key={i} src={data.src} link={data.link} />
       ))}
      </div>
     </div>

     <div className={style["col2"]}>
      <div className={style["skills"]}>
       {noExperienceSkill && (
        <>
         <h4>Skills Developer</h4>
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

       {designSkill && (
        <>
         <h4>Skills Designer</h4>
         <div className={style["icons"]}>
          <div className={style["wrappingSkills"]}>
           {designSkill.map((skill, i) => (
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
