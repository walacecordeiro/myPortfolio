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
    <div>{params.slug}</div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vero! In ipsum delectus aspernatur voluptates magni explicabo exercitationem ipsa reiciendis, ipsam voluptatem nihil incidunt, deserunt consequuntur sunt fugiat minus accusantium.</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vero! In ipsum delectus aspernatur voluptates magni explicabo exercitationem ipsa reiciendis, ipsam voluptatem nihil incidunt, deserunt consequuntur sunt fugiat minus accusantium.</h1>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vero! In ipsum delectus aspernatur voluptates magni explicabo exercitationem ipsa reiciendis, ipsam voluptatem nihil incidunt, deserunt consequuntur sunt fugiat minus accusantium.</h1>
   </React.Fragment>
  );
 } else {
  permanentRedirect("/not-found");
 }
}
