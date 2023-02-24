import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/about.html")
router.add("/resume", "/pages/resume.html")
router.add("/projects", "/pages/projects.html")
router.add("/certificates", "/pages/certificates.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()