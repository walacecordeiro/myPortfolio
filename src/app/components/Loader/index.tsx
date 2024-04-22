import style from "./styles.module.scss";

type propsLoader = {
 text?: string;
};

export default function Loader({ text }: propsLoader) {
 return (
  <div className={style["wrapper"]}>
   <div className={style["loader"]}></div>
   {text && <p>{text}</p>}
  </div>
 );
}
