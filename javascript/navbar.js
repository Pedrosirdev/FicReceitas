export {navbar}

const btnMenu = document.querySelector('#btn-menu')
const btnClose = document.querySelector('#btn-close')
const navbarOffcanvas = document.querySelector('#navbar-offcanvas')
const logo = document.querySelector('#logo')

function navbar(){
  btnMenu.addEventListener('click',(ev) => {
    ev.preventDefault()
      btnMenu.classList.add('none')
      btnClose.classList.remove('none')
      navbarOffcanvas.classList.remove('hidden-offcanvas')
      navbarOffcanvas.classList.add('show-offcanvas')
      logo.classList.add('none')
  })

  btnClose.addEventListener('click',(ev) => {
    ev.preventDefault()
    btnMenu.classList.remove('none')
    btnClose.classList.add('none')
    navbarOffcanvas.classList.add('hidden-offcanvas')
    navbarOffcanvas.classList.remove('show-offcanvas')
    logo.classList.remove('none')

  })


}