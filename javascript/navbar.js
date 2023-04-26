export {  searchBarIcon, navbar }

// const body = document.querySelector('body')
const hamburguer = document.querySelector('.hamburguer')

// const logo = document.querySelector('#logo')
const linksNavbar = document.querySelector('#links-navbar')

function navbar(){
  hamburguer.addEventListener('click',(ev) => {
    ev.preventDefault()
      hamburguer.classList.toggle('active-close')

      linksNavbar.classList.toggle('show-offcanvas')
      linksNavbar.classList.toggle('hidden-offcanvas')
  })

  // btnClose.addEventListener('click',(ev) => {
  //   ev.preventDefault()
  //   btnMenu.classList.remove('none')
  //   btnClose.classList.add('none')
  //   logo.classList.remove('none')
  //   linksNavbar.classList.remove('show-offcanvas')
  //   linksNavbar.classList.add('hidden-offcanvas')


  //   body.classList.remove('no-scroll')
  // })

  // window.addEventListener('resize', function() {
  //   const screen = window.innerWidth
  //   if(screen > 992){
  //     btnMenu.classList.remove('none')
  //     btnClose.classList.add('none')
  //     logo.classList.remove('none')
  //     linksNavbar.classList.remove('hidden-offcanvas')
  //     linksNavbar.classList.add('show-offcanvas')
  //   }

    
  // })


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

