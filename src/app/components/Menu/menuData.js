import { AiFillHome } from "react-icons/ai";
import { FaUserAstronaut, FaPencilRuler, FaLinkedin } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export const menu = [
    {
     name: "Início",
     link: "/",
     icon: <AiFillHome className="icons" />,
     dis: "distance0",
    },
    {
     name: "Sobre",
     link: "/sobre",
     icon: <FaUserAstronaut className="icons" />,
     dis: "distance1",
    },
    {
     name: "Projetos",
     link: "/projetos",
     icon: <FaPencilRuler className="icons" />,
     dis: "distance2",
    },
    {
     name: "Contato",
     link: "/contato",
     icon: <MdContactMail className="icons" />,
     dis: "distance3",
    },
    {
     name: "Meu Linkedin",
     link: "https://www.linkedin.com/in/walace-cordeiro-dos-santos/",
     icon: <FaLinkedin className="icons" />,
     dis: "distance4",
    },
   ];