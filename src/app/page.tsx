import styles from "./page.module.scss";

import Slide from "./components/Slide";
import Section from "./components/Section";
import VideoFixed from "./components/videoFixed";
import Cards from "./components/Cards";

export default function Home() {
 return (
  <main className={styles["main"]}>
   <section className={styles["myInfo"]}>
    <div className={styles["text"]}>
     <h1>Walace Cordeiro dos Santos</h1>
     <p>
      Olá, bem-vindo&#40;a&#41; ao meu espaço digital. Sou um{" "}
      <strong>desenvolvedor front-end</strong>, criando interfaces de usuário eficazes e{" "}
      <strong>aplicações web responsivas</strong>. Com um olhar atento para os detalhes e um
      compromisso com a qualidade, eu crio soluções de front-end que são{" "}
      <strong>funcionais e agradáveis</strong> aos olhos.
     </p>
    </div>
    <VideoFixed />
   </section>

   <Section title="Projetos em destaque">
    <Slide>
     <Cards highlight wrap="nowrap"/>
    </Slide>
   </Section>
   <Section title="Todos meus projetos">
    <Slide>
     <Cards wrap="nowrap"/>
    </Slide>
   </Section>
  </main>
 );
}
