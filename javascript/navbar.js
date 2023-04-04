export { navbar, searchBarIcon }

const btnMenu = document.querySelector('#btn-menu')
const btnClose = document.querySelector('#btn-close')
const navbarOffcanvas = document.querySelector('#navbar-offcanvas')
const logo = document.querySelector('#logo')
const categoryOffcanvas = document.querySelector('#category-offcanvas')
const dropdownOffcanvas = document.querySelector('#dropdown-category-offcanvas')

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

    dropdownOffcanvas.classList.add('none')
    dropdownOffcanvas.classList.remove('dropdown-category-offcanvas')
  })

  categoryOffcanvas.addEventListener('click', (ev) => {
    ev.preventDefault()
    if(dropdownOffcanvas.classList.contains('none')){
      dropdownOffcanvas.classList.remove('none')
      dropdownOffcanvas.classList.add('dropdown-category-offcanvas')
    } else{
      dropdownOffcanvas.classList.add('none')
      dropdownOffcanvas.classList.remove('dropdown-category-offcanvas')
    }
  })

  window.addEventListener('resize', function() {
    const screen = window.innerWidth
    if(screen > 992){
      btnMenu.classList.remove('none')
      btnClose.classList.add('none')
      navbarOffcanvas.classList.add('hidden-offcanvas')
      navbarOffcanvas.classList.remove('show-offcanvas')
      logo.classList.remove('none')

      dropdownOffcanvas.classList.add('none')
      dropdownOffcanvas.classList.remove('dropdown-category-offcanvas')
    }

    
  })


}

function searchBarIcon(){
  let searchBarIcon = document.querySelector('#search-bar-icon')
  let searchContainer = document.querySelector('.search-container')

  searchBarIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  })
}