// export { navbar, searchBarIcon }

// const body = document.querySelector('body')
// const btnMenu = document.querySelector('#btn-menu')
// const btnClose = document.querySelector('#btn-close')
// const logo = document.querySelector('#logo')
// const linksNavbar = document.querySelector('#links-navbar')

// function navbar(){
//   btnMenu.addEventListener('click',(ev) => {
//     ev.preventDefault()
//       btnMenu.classList.add('none')
//       btnClose.classList.remove('none')
//       body.classList.add('no-scroll')
//       linksNavbar.classList.remove('hidden-offcanvas')
//       linksNavbar.classList.add('show-offcanvas')
//   })

//   btnClose.addEventListener('click',(ev) => {
//     ev.preventDefault()
//     btnMenu.classList.remove('none')
//     btnClose.classList.add('none')
//     logo.classList.remove('none')
//     linksNavbar.classList.remove('show-offcanvas')
//     linksNavbar.classList.add('hidden-offcanvas')


//     body.classList.remove('no-scroll')
//   })

//   // categoryOffcanvas.addEventListener('click', (ev) => {
//   //   ev.preventDefault()
//   //   if(dropdownOffcanvas.classList.contains('none')){
//   //     dropdownOffcanvas.classList.remove('none')
//   //     dropdownOffcanvas.classList.add('dropdown-category-offcanvas')
//   //   } else{
//   //     dropdownOffcanvas.classList.add('none')
//   //     dropdownOffcanvas.classList.remove('dropdown-category-offcanvas')
//   //   }
//   // })

//   window.addEventListener('resize', function() {
//     const screen = window.innerWidth
//     if(screen > 992){
//       btnMenu.classList.remove('none')
//       btnClose.classList.add('none')
//       logo.classList.remove('none')
//       linksNavbar.classList.remove('hidden-offcanvas')
//       linksNavbar.classList.add('show-offcanvas')
//     }

    
//   })


// }

// function searchBarIcon(){
//   let searchBarIcon = document.querySelector('.search-bar-icon')
//   let searchContainer = document.querySelector('.search-container')

//   searchBarIcon.addEventListener('click', () => {
//   searchContainer.classList.toggle('active');
//   })
// }