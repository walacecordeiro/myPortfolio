import { Suspense } from "react";
import style from "./style.module.scss";

export default function VideoFixed() {
 return (
  <div className={style["videoWrapper"]}>
   <Suspense fallback={<p>Carregando vídeo</p>}>
    <video
     controls
     disablePictureInPicture
     controlsList="nodownload"
     autoPlay={true}
     muted
     src="/videoTemp2.mp4"
     title="vídeo sobre algo"
     className="video"
    />
   </Suspense>

   <p>
    <em>&quot;Nosso futuro é moldado pelo avanço constante&quot;</em>
   </p>
  </div>
 );
}
