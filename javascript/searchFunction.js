
const searchInput = document.querySelector(".input-search")

searchInput.addEventListener('input', search)

function search(){
  const query = searchInput.value.toLowerCase()

  const pages = {
    'Pão de queijo': '../pages/recipes/cheese-bread.html',
    'cheese bread': '../pages/recipes/cheese-bread.html',

    'filé de peixe': '../pages/recipes/fish-fillet.html',
    'fish fillet': '../pages/recipes/fish-fillet.html'
  }
  const url = pages[query]

  if(url){
    window.location.href = url
  } else{
    console.log('nao existe')
  }
}
  
  // searchInput.forEach((element) => {
  //   element.addEventListener("keydown", (event) => {
  //     if(event.keyCode === 13){
  //       const searchValue = event.target.value
  //       alert(searchValue)
  //     }
  //   })
  // })
  



