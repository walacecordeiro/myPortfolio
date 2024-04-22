import styles from "./page.module.scss";

import Slide from "./components/Slide";
import Section from "./components/Section";
import VideoFixed from "./components/videoFixed";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
 return (
  <main className={styles["main"]}>
   <section className={styles["myInfo"]}>
    <div className={styles["text"]}>
     <h1>Olá, bem-vindo&#40;a&#41;</h1>
     <p>
      Meu nome é <strong>Walace Cordeiro</strong> e esse é meu espaço digital. Sou{" "}
      <strong>desenvolvedor front-end</strong>, crio <strong>interfaces de usuário eficazes</strong>{" "}
      e <strong>aplicações web responsivas</strong>. Com um olhar atento para os detalhes e um
      compromisso com a qualidade, busco sempre soluções de front-end que são{" "}
      <strong>funcionais e agradáveis aos olhos</strong>.
     </p>
    </div>
    <VideoFixed />
   </section>

   <Section title="Projetos em destaque">
    <Slide>
     <Cards highlight wrap="nowrap" />
    </Slide>
   </Section>
   <Section title="Todos meus projetos">
    <Slide>
     <Cards wrap="nowrap" />
    </Slide>
   </Section>
   <Footer />
  </main>
 );
}
