import React, { ReactElement, ReactNode } from "react";
import styles from "./style.module.scss";

type SectionProps = {
 title?: string;
 children: ReactNode;
};

export default function Section({
 title = "Use a prop 'title' para escolher o título",
 children,
}: SectionProps) {
 return (
  <section className={styles["section"]}>
   <h3>{title}</h3>
   {children}
  </section>
 );
}
