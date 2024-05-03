"use client";

import React, { Suspense, useState } from "react";
import Loading from "./loading";
import style from "./style.module.scss";
import Link from "next/link";
import svg from "@/../../public/icons/whatsApp.svg";
import Image from "next/image";
import StickyBox from "react-sticky-box";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

export default function Form() {
 const [isErrorModalOpen, setErrorModalOpen] = useState(false);
 const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
 const [isSending, setSending] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 function openRequestModal() {
  setErrorModalOpen(true);
 }

 function closeRequestModal() {
  setErrorModalOpen(false);
 }

 function openConfirmModal() {
  setConfirmModalOpen(true);
 }

 function closeConfirmModal() {
  setConfirmModalOpen(false);
 }

 function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (name === "" || email === "" || message === "") {
   openRequestModal();
   return;
  } else {
   setSending(true);

   const templateParams = {
    from_name: name,
    email: email,
    message: message,
   };

   emailjs.send("service_va3czvz", "template_mbnlzb3", templateParams, "YKPKbHpb5Is_YTqTW").then(
    () => {
     openConfirmModal();
     setName("");
     setEmail("");
     setMessage("");
     setSending(false);
    },
    (err) => {
     console.log("ERRO: ", err);
     setSending(false);
    }
   );
  }
 }

 return (
  <>
   <Modal
    className={style["modal"]}
    style={{
     overlay: {
      backgroundColor: "rgba(0, 0, 0, 80%)",
     },
     content: {
      WebkitOverflowScrolling: "touch",
     },
    }}
    closeTimeoutMS={200}
    isOpen={isErrorModalOpen}
   >
    <div className={style["modalContent"]} style={{ border: "1px solid #FA8072" }}>
     <p>Por favor, preencha todos os campos!</p>
     <button onClick={closeRequestModal}>Ok, entendi</button>
    </div>
   </Modal>

   <Modal
    className={style["modal"]}
    style={{
     overlay: {
      backgroundColor: "rgba(0, 0, 0, 80%)",
     },
     content: {
      WebkitOverflowScrolling: "touch",
     },
    }}
    closeTimeoutMS={200}
    isOpen={isConfirmModalOpen}
   >
    <div className={style["modalContent"]} style={{ border: "1px solid #8fbc8f" }}>
     <p>Sua mensagem foi enviada com sucesso! Entrarei em contado em breve.</p>
     <button onClick={closeConfirmModal}>Ok, entendi</button>
    </div>
   </Modal>

   <StickyBox style={{ zIndex: 1 }} offsetTop={30}>
    <div>
     <form className={style["form"]} onSubmit={sendEmail}>
      <h4>Contato</h4>
      <input
       type="text"
       placeholder="Digite seu nome"
       onChange={(e) => setName(e.target.value)}
       value={name}
       autoComplete="name"
      />

      <input
       type="text"
       placeholder="Digite seu email"
       onChange={(e) => setEmail(e.target.value)}
       value={email}
       autoComplete="email"
      />

      <textarea
       placeholder="Digite sua mensagem..."
       onChange={(e) => setMessage(e.target.value)}
       value={message}
      />

      {isSending ? <Loading /> : <button type="submit">Enviar menssagem</button>}

      <h6>Ou</h6>

      <Link href="https://contate.me/whatsapp-walace" target="_blank">
       <Image src={svg} alt="icone do whatsApp" width={25} height={25} />
       <p>conversar no whatsApp</p>
      </Link>
     </form>
    </div>
   </StickyBox>
  </>
 );
}
