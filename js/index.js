import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/about.html")
router.add("/resumo", "/pages/resume.html")
router.add("/projetos", "/pages/projects.html")
router.add("/certificados", "/pages/certificates.html")
router.add("/contato", "/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()