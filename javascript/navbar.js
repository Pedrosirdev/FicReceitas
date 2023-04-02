export {navbar}

const btnMenu = document.querySelector('#btn-menu')

function navbar(){
  btnMenu.addEventListener('click',(ev) => {
    ev.preventDefault()
    alert('aaaaaaaaa')
  })
}