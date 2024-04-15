import React from "react";
import { projects } from "@/app/(content)/projetos/projectsData";
import { permanentRedirect } from "next/navigation";
import style from "./page.module.scss";
import { BoxInfo } from "@/app/components/BoxInfo";

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
    <div className={style["imgWrapping"]}>
     <img src={project.imgSRC} alt={project.alt} />
    </div>
    <BoxInfo
     img={details?.boxInfo1.img}
     title={project.title}
     text={details?.boxInfo1?.fullDescription}
     textBtn="Faça um teste agora"
     linkBtn={details?.boxInfo1.btnLink}
     direction="row"
    />
   </main>
  );
 } else {
  permanentRedirect("/not-found");
 }
}
