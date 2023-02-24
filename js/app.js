const routes = {
    'about': `<div>
    <span>chef</span>
    <h1>Web Development</h1>
    <h3>Design & Development</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
      id odit ab praesentium deserunt nostrum et fugit dolorem,
      repudiandae iste, atque eaque veritatis officiis asperiores
      perferendis animi placeat temporibus.
    </p>
  </div>`,


    'resume': '<h1>Resumo</h1><p>Essa é a página que fala um pouco sobre mim.</p>',
    'projects': '<h1>Projetos</h1><p>Veja meus projetos.</p>',
    'certificates': '<h1>Certificados</h1><p>Veja todos meus certificados</p>',
    'contact': '<h1>Contato</h1><p>Entre em contato conosco pelo telefone (11) 1234-5678.</p>',
  }
  
  function render(route) {
    const wrapperContent = document.querySelector('.wrapperContent')
    wrapperContent.innerHTML = routes[route]
  }
  
  function handleRouteClick(event) {
    event.preventDefault();
    const route = event.target.dataset.route
    render(route)
  }
  
  function init() {
    const navLinks = document.querySelectorAll('nav a')
    navLinks.forEach(link => {
      link.addEventListener('click', handleRouteClick)
    })
    render('about')
  }
  
  init()
  