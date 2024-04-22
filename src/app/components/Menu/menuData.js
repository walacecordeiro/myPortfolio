import { AiFillHome } from "react-icons/ai";
import { FaUserAstronaut, FaPencilRuler, FaLinkedin } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export const menu = [
    {
     name: "Início",
     link: "/",
     icon: <AiFillHome />,
     dis: "distance0",
    },
    {
     name: "Resumo",
     link: "/resumo",
     icon: <FaUserAstronaut />,
     dis: "distance1",
    },
    {
     name: "Projetos",
     link: "/projetos/temporizador-de-foco",
     icon: <FaPencilRuler />,
     dis: "distance2",
    },
    {
     name: "Contato",
     link: "/contato",
     icon: <MdContactMail />,
     dis: "distance3",
    },
    {
     name: "Meu Linkedin",
     link: "https://www.linkedin.com/in/walace-cordeiro-dos-santos/",
     icon: <FaLinkedin />,
     dis: "distance4",
    },
   ];