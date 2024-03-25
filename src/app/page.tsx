import styles from "./page.module.scss";

export default function Home() {
 return (
  <main className={styles["main"]}>
   <section className={styles["myInfo"]}>
    <div className={styles["text"]}>
     <h1>Walace Cordeiro</h1>
     <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, aspernatur aut distinctio
      expedita cumque ratione sed a numquam autem! Officia hic impedit temporibus! Cumque id qui
      ratione ut cupiditate dolorem!
     </p>
    </div>
   </section>

   <section className={styles["myProjects"]}>
    <h3>Projects</h3>
    <div className={styles["cards"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quia animi expedita, ad illum voluptas placeat excepturi laudantium ab cumque! Minima facere sit consequatur odit accusantium mollitia natus officia.</div>
    <div className={styles["cards"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quia animi expedita, ad illum voluptas placeat excepturi laudantium ab cumque! Minima facere sit consequatur odit accusantium mollitia natus officia.</div>
    <div className={styles["cards"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quia animi expedita, ad illum voluptas placeat excepturi laudantium ab cumque! Minima facere sit consequatur odit accusantium mollitia natus officia.</div>
   </section>
  </main>
 );
}
