
const searchInput = document.querySelectorAll(".input-search").forEach().addEventListener('input', search)

// searchInput


function search(){
  const query = searchInput.value.toLowerCase()

  const pages = {
    'pão de queijo': cheeseBread.path,
    'pao de queijo': cheeseBread.path,
    'cheese bread': cheeseBread.path,

    'file de peixe': '../pages/recipes/fish-fillet.html',
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
  

class Recipes{
  constructor( name, id, path ){
    this.name = name
    this.id = id
    this.path = path
  }
}

const cheeseBread = new Recipes('Pão de queijo', 1, '../pages/recipes/cheese-bread.html')

console.log(cheeseBread)



