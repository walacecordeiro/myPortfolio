import { GithubUser } from "./GithubUser.js";

const menuToggle = document.querySelector('.button-toggle')
const nav = document.querySelector('nav')

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show')
})