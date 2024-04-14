import React from "react";
import style from "./style.module.scss";

type propsBoxInfo = {
 img?: string;
 alt?: string;
 title?: string;
 text?: React.ReactNode;
 textBtn?: string;
 linkBtn?: string;
 direction?: "row" | "row-reverse" | "column" | "column-reverse";
};

export function BoxInfo({ img, alt, title, text, textBtn, linkBtn, direction }: propsBoxInfo) {
 return (
  <React.Fragment>
   <div className={style["boxInfoWrapping"]} style={direction && { flexDirection: `${direction}` }}>
    <img src={img} alt={alt} />
    <div className={style["infoWrapping"]}>
     <h5>{title}</h5>
     <p>{text}</p>
     {textBtn && (
      <a target="_blanck" href={linkBtn}>
       {textBtn}
      </a>
     )}
    </div>
   </div>
  </React.Fragment>
 );
}
