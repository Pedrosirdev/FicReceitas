export {  searchBarIcon, navbar }

const body = document.querySelector('body')
const hamburguer = document.querySelector('.hamburguer')
const linksNavbar = document.querySelector('#links-navbar')

function navbar(){
  hamburguer.addEventListener('click',(ev) => {
    ev.preventDefault()
      hamburguer.classList.toggle('active-close')

      let searchContainer = document.querySelector('.search-container')
      searchContainer.classList.add('active');

      linksNavbar.classList.toggle('show-offcanvas')
      linksNavbar.classList.toggle('hidden-offcanvas')
      body.classList.toggle('no-scroll')
  })

  window.addEventListener('resize', function() {
    const screen = window.innerWidth
    if(screen > 992){
      linksNavbar.classList.add('hidden-offcanvas')
      linksNavbar.classList.remove('show-offcanvas')
      hamburguer.classList.remove('active-close')
    }
  })
}

function searchBarIcon(){
  let searchBarIcon = document.querySelector('.search-bar-icon')
  let searchContainer = document.querySelector('.search-container')

  searchBarIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
  })

  window.addEventListener('resize', function() {
    const screen = window.innerWidth
    if(screen < 992){
      let searchContainer = document.querySelector('.search-container')
        searchContainer.classList.add('active');
    } else{
      searchContainer.classList.remove('active');
    }
  })
}




