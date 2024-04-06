import VideoFixed from "@/app/components/videoFixed";
import styles from "./page.module.scss";

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <>
   <main className={styles["main"]}>
    <section className={styles["myInfo"]}>
     <div className={styles["text"]}>
      <h1>Meus projetos</h1>
      <p>
       Esta é a minha página de projetos! Como desenvolvedor web front-end, tenho o prazer de
       compartilhar com você uma variedade de projetos nos quais trabalhei. Cada projeto aqui
       representa uma parte da<strong> minha jornada de aprendizado</strong> e crescimento na área
       de desenvolvimento web. Eles abrangem diversas tecnologias, incluindo principalmente HTML,
       CSS, JavaScript, React.js e Next.js. Espero que você aprecie explorar esses projetos tanto
       quanto eu amei criá-los. Obrigado por visitar!
      </p>
     </div>
     <VideoFixed />
    </section>
    <div>{children}</div>
   </main>
  </>
 );
}
