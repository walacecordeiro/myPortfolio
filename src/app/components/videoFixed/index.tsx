import style from "./style.module.scss"

export default function VideoFixed() {
 return (
  <div className={style["videoWrapper"]}>
   <video
    controls
    disablePictureInPicture
    controlsList="nodownload"
    autoPlay={true}
    src="/videoTemp.mp4"
    title="vídeo sobre algo"
    className="video"
   ></video>
   <p>Lorem ipsum dolor sit amet.</p>
  </div>
 );
}
