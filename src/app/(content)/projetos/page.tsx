import React from "react";
import { projects } from "./projectsData";
import Link from "next/link";
import styles from "./page.module.scss";
import Cards from "@/app/components/Cards";
import Section from "@/app/components/Section";
export default function Projetos() {
 return (
  <>
   <Section title="">
    <Cards wrap="wrap"/>
   </Section>
  </>
  //   <div className={styles["cardsWrapper"]}>
  //    {projects.map((project, i) => (
  //     <React.Fragment key={i}>
  //      <Link
  //       href={project.link}
  //       className={styles["cards"]}
  //      >
  //       <div className={styles["imgDiv"]} style={{ backgroundImage: `url(${project.imgSRC})` }}></div>
  //       <div className={styles["description"]}>
  //        <h6>{project.title}</h6>
  //        <p>{project.description}</p>
  //       </div>
  //      </Link>
  //     </React.Fragment>
  //    ))}
  //   </div>
 );
}
