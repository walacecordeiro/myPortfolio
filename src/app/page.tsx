import styles from "./page.module.scss";

import Slide from "./components/Slide";
import Section from "./components/Section";
import VideoFixed from "./components/videoFixed";

export default function Home() {
 return (
  <main className={styles["main"]}>
   <section className={styles["myInfo"]}>
    <div className={styles["text"]}>
     <h1>Walace Cordeiro dos Santos</h1>
     <p>
      Bem-vindo ao meu incrível universo, sou um <strong>desenvolvedor front-end</strong> versátil e
      inovador que navega habilmente pelos domínios da programação, design de interfaces e
      experiência do usuário. Com uma atenção meticulosa aos detalhes e uma busca incessante pela
      excelência, eu
      <strong> desenvolvo interfaces de usuário intuitivas</strong>, aplicações web <strong>responsivas</strong> e
      soluções de front-end funcionais, mas esteticamente agradáveis.
     </p>
    </div>
    <VideoFixed />
   </section>

   <Section title="Projetos em destaque">
    <Slide highlight/>
   </Section>
   <Section title="Todos meus projetos">
    <Slide />
   </Section>
  </main>
 );
}
