import Link from "next/link";
import React from "react";
import { projects } from "@/app/(content)/projetos/projectsData";
import { permanentRedirect } from "next/navigation";

type paramsProjects = {
 params: {
  slug: string;
 };
};

export default function projetos({ params }: paramsProjects) {
 const project = projects.find(
  (project) => project.title.toLowerCase().replace(/\s/g, "-") === params.slug
 );

 if (project) {
  return (
   <React.Fragment>
    <Link href="/">Voltar para o início</Link>
    <div>{params.slug}</div>
   </React.Fragment>
  );
 } else {
  permanentRedirect("/not-found");
 }
}
