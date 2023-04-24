
const searchInput = document.querySelectorAll(".input-search")
const searchIcon = document.querySelector(".search-bar-icon")

// searchInput.addEventListener("input", search)

searchIcon.addEventListener("click", () => {
  searchIcon.classList.toggle('active')
  if(searchIcon.classList.contains('active')){
    searchInput.forEach((input) =>{
      input.focus()
    })
  }
})

// searchIcon.forEach((icon) => {
//   icon.addEventListener('click', () => {
//     searchIcon.classList.toggle('active')
//     if(searchIcon.classList.contains('active')){
//       searchInput.focus()
//     }
//   })
// })

searchInput.forEach((input) =>{
  input.addEventListener('input', search)
})


function search(){
  let query = '';
  searchInput.forEach((input) => {
    query += input.value.toLowerCase();
  });


  const pages = {
    'pão de queijo': '../pages/recipes/cheese-bread.html',
    'pao de queijo': '../pages/recipes/cheese-bread.html',
    'cheese bread': '../pages/recipes/cheese-bread.html',

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
  

// class Recipes{
//   constructor( name, id, path ){
//     this.name = name
//     this.id = id
//     this.path = path
//   }
// }

// const cheeseBread = new Recipes('Pão de queijo', 1, '../pages/recipes/cheese-bread.html')

// console.log(cheeseBread)



