import styles from "./page.module.scss";

import Slide from "./components/Slide";
import Section from "./components/Section";

export default function Home() {
 return (
   <main className={styles["main"]}>
    <section className={styles["myInfo"]}>
     <div className={styles["text"]}>
      <h1>Walace Cordeiro dos Santos</h1>
      <p>
       Bem-vindo ao meu incrível universo, sou um desenvolvedor front-end versátil e inovador que
       navega habilmente pelos domínios da programação, design de interfaces e experiência do
       usuário. Com uma atenção meticulosa aos detalhes e uma busca incessante pela excelência, eu
       desenvolvo interfaces de usuário intuitivas, aplicações web responsivas e soluções de
       front-end funcionais, mas esteticamente agradáveis.
      </p>
     </div>
    </section>

    <Section title="Projetos">
     <Slide />
    </Section>
   </main>
 );
}
