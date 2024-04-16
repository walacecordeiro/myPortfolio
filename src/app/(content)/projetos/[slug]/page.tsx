import React from "react";
import { projects } from "@/app/(content)/projetos/projectsData";
import { permanentRedirect } from "next/navigation";
import style from "./page.module.scss";
import { BoxInfo } from "@/app/components/BoxInfo";
import { IoDesktopOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";



type paramsProjects = {
 params: {
  slug: string;
 };
};

export default function projetos({ params }: paramsProjects) {
 const project = projects.find(
  (project) => project.title.toLowerCase().replace(/\s/g, "-") === params.slug
 );

 const details = project?.details;

 if (project) {
  return (
   <main className={style["main"]}>
    <BoxInfo
     img={details?.boxInfo1.img}
     title={project.title}
     text={details?.boxInfo1?.fullDescription}
     textBtn="Teste este projeto"
     linkBtn={details?.boxInfo1.btnLink}
     direction="row"
    />
    {project.responsive && (
     <div className={style["responsiveSection"]}>
      <h5>Acessibilidade em múltiplos dispositivos</h5>
      <p>
       Com o aumento do uso de smartphones e tablets, este projeto responsivo garante que os
       usuários tenham uma boa experiência de navegação, independentemente do dispositivo que estão
       usando.
      </p>

      <div className={style["mokupWrapping"]}>
       <img src={details?.responsive?.imgDesk} alt={project.alt} />
       <div style={{ display: "flex", alignItems: "center", gap: 5, padding: 10 }}>
        <DiResponsive color="white" size={50} />
        <p>Diversos dispositivos</p>
       </div>

       <div className={style["mobileVersion"]}>
        <img src={details?.responsive?.imgMobile} alt="Imagens em sua versão desktop e mobile" />
       </div>
      </div>
     </div>
    )}
   </main>
  );
 } else {
  permanentRedirect("/not-found");
 }
}
