export { globalSearchFunction }

const searchInput = document.querySelector(".input-search")
const searchIcon = document.querySelector(".search-bar-icon")

function globalSearchFunction(){

  searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle('active')
    if(searchIcon.classList.contains('active')){
      searchInput.focus()
    }
  })
  
  const pages = {
    'fitness': '../pages/categories/fitness.html',



    'pão de queijo': '../pages/recipes/cheese-bread.html',
    'cheese bread': '../pages/recipes/cheese-bread.html',
  
    'filé de peixe': '../pages/recipes/fish-fillet.html',
    'fish fillet': '../pages/recipes/fish-fillet.html'
  }
  
  searchInput.addEventListener('input', search)
  
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      search();
    }
  });
  
  function search(){
    let query = searchInput.value.toLowerCase();
  
    const url = pages[query]
  
    if(url){
      window.location.href = url
      searchInput.value = ""
    } else{
      console.log('nao existe')
    }
  }
  
  function autocomplete(inp, recipesList) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      closeAllLists();
      if(!val){ return false; }
      currentFocus = -1;
      a = document.createElement('DIV');
      a.setAttribute('id', this.id + "autocomplete-list");
      a.setAttribute('class', "autocomplete-items");
      this.parentNode.appendChild(a);
  
      for(i = 0; i < recipesList.length; i++){
        if(recipesList[i].substr(0, val.length).toUpperCase() == val.toUpperCase()){
          b = document.createElement('DIV');
          b.innerHTML = "<strong>" + recipesList[i].substr(0, val.length) + "</strong>";
          b.innerHTML += recipesList[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + recipesList[i] + "'>";
          b.addEventListener('click', function (ev) {
            inp.value = this.getElementsByTagName('input')[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
  
    inp.addEventListener('keydown', function (ev) {
      let x = document.getElementById(this.id + "autocomplete-list");
      if(x) x = x.getElementsByTagName('div');
      if(ev.keyCode == 40){
        currentFocus++;
        addActive(x);
      } else if(ev.keyCode == 38){
        currentFocus--;
        addActive(x);
      } else if(ev.keyCode == 13){
        ev.preventDefault();
        if(currentFocus > -1){
          if(x) x[currentFocus].click()
        }
      }
    });
  
    function addActive(x){
      if(!x) return false;
      removeActive(x);
      if(currentFocus >= x.length) currentFocus = 0;
      if(currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add('autocomplete-active');
    }
    function removeActive(x) {
      for(var i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active');
      }
    }
    function closeAllLists(element) {
      let x = document.getElementsByClassName('autocomplete-items');
      for (let i = 0; i < x.length; i++) {
        if(element != x[i] && element != inp){
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  
    document.addEventListener('click', function (ev) {
      closeAllLists(ev.target);
    });
  }
  
  let recipes = [
    'Pão de queijo', 'Cheese bread', 'Filé de peixe', 'Pizza de chocolate', 'Pizza de calabresa',

    'Fit', 'Fitness',
    'Saudáveis', 'Healthy',
    'Café da manhã', 'Breakfast',
    'Massas', 'Pastas',
    'Pizzas', 'Pizzas',
    'Salgados', 'Savory',
    'Fáceis', 'Easy',
    'Pães',  'Breads',
    'Caldos e Sopas', 'Broths and Soups',
    'Carnes', 'Meat',
    'Doces', 'Candy',
    'Sobremesas', 'Desserts'
  ]

  autocomplete(searchInput, recipes);
}





