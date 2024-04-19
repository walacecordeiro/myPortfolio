import React, { Suspense } from "react";
import { projects } from "@/app/(content)/projetos/projectsData";
import { permanentRedirect } from "next/navigation";
import style from "./page.module.scss";
import { BoxInfo } from "@/app/components/BoxInfo";
import Footer from "@/app/components/Footer";
import Loading from "@/app/loading";

type paramsProjects = {
 params: {
  slug: string;
 };
};

export default function projetos({ params }: paramsProjects) {
 const project = projects.find((project) => project.slug === params.slug);

 const details = project?.details;

 if (project) {
  return (
   <Suspense fallback={<Loading />}>
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
        <img src={details?.responsive?.img} alt={project.alt} />
       </div>
      </div>
     )}

     <BoxInfo
      img={details?.boxInfo2?.img}
      title="Se você é Desenvolvedor(a) ou Recrutador(a)"
      text="Este projeto está hospedado no GitHub, onde desenvolvedores podem explorar o código, entender a estrutura do projeto e usar o código como referência para seus próprios projetos. Para recrutadores, este projeto demonstra minha capacidade de escrever código limpo, eficiente e bem documentado. Convido todos a explorarem este projeto no repositório do projeto."
      textBtn="Acesse o Repositório no GitHub"
      linkBtn={details?.boxInfo2?.btnLink}
      direction="row-reverse"
     />

     <div className={style["footer"]}>
      <h6>Habilidades desenvolvidas durante o projeto</h6>
      <p>{details?.resume?.p1}</p>
      {details?.resume?.p2 && <p>{details?.resume?.p2}</p>}
     </div>
     <Footer />
    </main>
   </Suspense>
  );
 } else {
  permanentRedirect("/not-found");
 }
}
