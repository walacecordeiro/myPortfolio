import { AiFillHome } from "react-icons/ai";
import { FaUserAstronaut, FaPencilRuler, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const menu = [
 {
  name: "Início",
  link: "/",
  icon: <AiFillHome />,
  dis: "distance0",
 },
 {
  name: "Projetos",
  link: "/projetos/temporizador-de-foco",
  icon: <FaPencilRuler />,
  dis: "distance1",
 },
 {
  name: "Resumo / Contato",
  link: "/resumo",
  icon: <FaUserAstronaut />,
  dis: "distance2",
 },
 {
  name: "Meu Linkedin",
  link: "https://www.linkedin.com/in/walace-cordeiro-dos-santos/",
  icon: <FaLinkedin />,
  dis: "",
 },
 {
  name: "Meu GitHub",
  link: "https://github.com/walacecordeiro",
  icon: <FaGithubSquare />,
  dis: "",
 },
];
