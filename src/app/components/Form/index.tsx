"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import svg from "@/../../public/icons/whatsApp.svg";
import Image from "next/image";
import StickyBox from "react-sticky-box";

export default function Form() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (name === "" || email === "" || message === "") {
   alert("Preencha todos os campos");
   alert("Teste");
  }
 }
 return (
  <StickyBox style={{ zIndex: 1 }} offsetTop={0}>
   <div>
    <form className={style["form"]}>
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

     <button type="submit">Enviar menssagem</button>

     <h6>Ou</h6>

     <Link href="https://contate.me/whatsapp-walace" target="_blank">
      <p>conversar no whatsApp</p> <Image src={svg} alt="teste" width={20} height={20} />
     </Link>
    </form>
   </div>
  </StickyBox>
 );
}
