import style from "./style.module.scss";

export default function VideoFixed() {
 return (
  <div className={style["videoWrapper"]}>
   <video
    controls
    disablePictureInPicture
    controlsList="nodownload"
    autoPlay={true}
    muted
    src="/videoTemp2.mp4"
    title="vídeo sobre algo"
    className="video"
   ></video>
   <p>
    <em>&quot;Nosso futuro é moldado pelo avanço constante&quot;</em>
   </p>
  </div>
 );
}
