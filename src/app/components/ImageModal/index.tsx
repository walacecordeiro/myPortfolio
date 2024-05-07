"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import style from "./style.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

Modal.setAppElement("#root");

type propsImageModal = {
 src: string;
 link: string;
};

export default function ImageModal({ src, link }: propsImageModal) {
 const [isOpen, setIsOpen] = useState(false);

 function openModal() {
  setIsOpen(true);
 }

 function closeModal() {
  setIsOpen(false);
 }

 return (
  <>
   <img className={style["img"]} src={src} onClick={openModal} style={{ cursor: "pointer" }} />
   <Modal
    closeTimeoutMS={200}
    className={style["modal"]}
    style={{
     overlay: {
      backgroundColor: "rgba(0, 0, 0, 80%)",
     },
     content: {
      WebkitOverflowScrolling: "touch",
     },
    }}
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Imagem Modal"
   >
    <div className={style["modalContent"]}>
     <a href={link} target="_blank" title="Clique para confirmar a validação do certificado">
      <img src={src} />
     </a>
     <button onClick={closeModal}>
      <IoMdCloseCircle />
     </button>
    </div>
   </Modal>
  </>
 );
}
