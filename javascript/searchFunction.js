// const searchInput = document.querySelector(".input-search")
// const searchIcon = document.querySelector(".search-bar-icon")
// // searchInput.addEventListener("input", search)

// searchIcon.addEventListener("click", () => {
//   searchIcon.classList.toggle('active')
//   if(searchIcon.classList.contains('active')){
//     searchInput.forEach((input) =>{
//       input.focus()
//     })
//   }
// })

// // searchIcon.forEach((icon) => {
// //   icon.addEventListener('click', () => {
// //     searchIcon.classList.toggle('active')
// //     if(searchIcon.classList.contains('active')){
// //       searchInput.focus()
// //     }
// //   })
// // })
// const pages = {
//   'pão de queijo': '../pages/recipes/cheese-bread.html',
//   'pao de queijo': '../pages/recipes/cheese-bread.html',
//   'cheese bread': '../pages/recipes/cheese-bread.html',

//   'file de peixe': '../pages/recipes/fish-fillet.html',
//   'fish fillet': '../pages/recipes/fish-fillet.html'
// }

// searchInput.forEach((input) =>{
//   input.addEventListener('input', search)
// })


// function search(){
//   let query = '';
//   searchInput.forEach((input) => {
//     query += input.value.toLowerCase();
//   });



//   const url = pages[query]

//   if(url){
//     window.location.href = url
//   } else{
//     console.log('nao existe')
//   }
// }
  
//   // searchInput.forEach((element) => {
//   //   element.addEventListener("keydown", (event) => {
//   //     if(event.keyCode === 13){
//   //       const searchValue = event.target.value
//   //       alert(searchValue)
//   //     }
//   //   })
//   // })
  

// // class Recipes{
// //   constructor( name, id, path ){
// //     this.name = name
// //     this.id = id
// //     this.path = path
// //   }
// // }

// // const cheeseBread = new Recipes('Pão de queijo', 1, '../pages/recipes/cheese-bread.html')

// // console.log(cheeseBread)


// // const divSuggestions = document.querySelector('.div-suggestions')

// // searchInput.forEach((input) =>{
// //   input.addEventListener('input', showSuggestions )
// // })

// // function showSuggestions(){
// //   divSuggestions.classList.remove('d-none')
// //   divSuggestions.classList.remove('hidden')

// //   const span1 = document.createElement('span')
// //   span1.textContent = 'abacate'

// //   if(searchInput){

// //   divSuggestions.appendChild(span1)
// //   }

// //   // let query = '';
// //   // searchInput.forEach((input) => {
// //   //   query += input.value.toLowerCase();
// //   // });
// //   // const filterRecipes = pages.filter(page => page.name.toLowerCase().includes(query))

// // }
// function autocomplete(input, array) {
//   let currentFocus;

//   input.addEventListener('input', () => {
//     let divSuggestions, b, i, val = input.value

//     closeAllLists();
//     if(!val){ return false; }
//     currentFocus = -1;
//     divSuggestions = document.createElement('div');
//     divSuggestions.setAttribute('class', this.classList + "autocomplete-list autocomplete-items");
//     this.parentNode.appendChild(divSuggestions);

//     for(i = 0; i < array.length; i++){
//       if(array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()){
//         b = document.createElement('div');
//         b.innerHTML = "<strong>" + array[i].substr(0, val.length) + "</strong>";
//         b.innerHTML += array[i].substr(val.length);
//         b.innerHTML += "<input type='hidden' value='" + array[i] + "'>";
//         b.addEventListener('click', (ev) => {
//           input.value = this.getElementsByTagName('input')[0].value;
//           closeAllLists();
//         });
//         divSuggestions.appendChild(b);
//       }
//     }
//   });

//   input.addEventListener('keydown', (ev) => {
//     let x = document.getElementsByClassName(this.classList + 'autocomplete-list');
//     if(x) x = x.getElementsByTagName('div');
//     if(ev.keyCode == 40){
//       currentFocus++;
//       addActive(x);
//     } else if(ev.keyCode == 38){
//       currentFocus--;
//       addActive(x);
//     } else if(ev.keyCode == 13){
//       ev.preventDefault();
//       if(currentFocus > -1){
//         if(x) x[currentFocus].click()
//       }
//     }
//   });

//   function addActive(x){
//     if(!x) return false;
//     removeActive(x);
//     if(currentFocus >= x.length) currentFocus = 0;
//     if(currentFocus < 0) currentFocus = (x.length - 1);
//     x[currentFocus].classList.add('autocomplete-active');
//   }
//   function removeActive(x) {
//     for(let i = 0; i < x.length; i++) {
//       x[i].classList.remove('autocomplete-active');
//     }
//   }
//   function closeAllLists(element) {
//     let x = document.getElementsByClassName('autocomplete-items');
//     for (let i = 0; i < x.length; i++) {
//       if(element != x[i] && element != input){
//         x[i].parentNode.removeChild(x[i]);
//       }
//     }
//   }

//   document.addEventListener('click', (ev)=> {
//     closeAllLists(ev.target);
//   });
// }


// let recipes = [
//   'Pao de queijo', 'Filé de peixe', 'Pizza de chocolate' 
// ]

// autocomplete(searchInput[0], searchInput[1], recipes);



