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
    'saudáveis': '../pages/categories/healthy.html',
    'café da manhã': '../pages/categories/breakfast.html',
    'massas': '../pages/categories/pastas.html', 
    'pizzas': '../pages/categories/pizzas.html', 
    'salgados': '../pages/categories/savory.html',
    'doces': '../pages/categories/candy.html',
    'carnes': '../pages/categories/meat.html',
    'fáceis': '../pages/categories/easy.html',
    'pães': '../pages/categories/breads.html',  
    'caldos e Sopas': '../pages/categories/broths-and-soups.html', 
    'sobremesas': '../pages/categories/desserts.html',

    'panqueca fit com frutas': '../pages/recipes/fitness-pancake-with-fruits.html',
    'panqueca fitness': '../pages/recipes/fitness-pancake.html',
    'omelete no forno': '../pages/recipes/omelette-in-oven.html',
    'salada com frango e abobrinha': '../pages/recipes/salad-with-chicken-and-zucchini.html',
    'sopa de carne e legumes': '../pages/recipes/meat-and-vegetable-soup.html',
    'pizza na frigideira': '../pages/recipes/pan-pizza.html',
    'almôndegas em molho de tomate': '../pages/recipes/meatballs-in-tomato-sauce.html',
    'macarrão com bacon': '../pages/recipes/bacon-pasta.html',
    'macarrão penne com molho de tomate': '../pages/recipes/penne-pasta-with-tomato-sauce.html',
    'macarrão com presunto e queijo': '../pages/recipes/macaroni-with-ham-and-cheese.html',
    'pão de aveia': '../pages/recipes/oat-bread.html',
    'pão doce': '../pages/recipes/sweet-bread.html',
    'pão de alho': '../pages/recipes/garlic-bread.html',
    'batatas fritas': '../pages/recipes/french-fries.html',
    'bolinho de frango': '../pages/recipes/chicken-cakes.html',
    'cheesecake de geleia com morangos': '../pages/recipes/cheesecake-strawberry-jam.html',
    'torta de morango': '../pages/recipes/strawberry-pie.html',
    'bolo de chocolate': '../pages/recipes/chocolate-cake.html',
    'biscoitos de chocolate': '../pages/recipes/chocolate-cookies.html',
    'linguiça na frigideira': '../pages/recipes/sausage-in-the-frying-pan.html',
    'carne de porco assada com especiarias': '../pages/recipes/pork-roasted-with-spices.html',
    'carne de porco assada com legumes': '../pages/recipes/roast-pork-with-vegetables.html',
    'caldo de frango com batatas': '../pages/recipes/chicken-broth-with-potatoes.html',
    'sopa de legumes': '../pages/recipes/vegetables-soup.html',
    'pizza de chocolate': '../pages/recipes/chocolate-pizza.html',
    'pizza de calabresa': '../pages/recipes/pepperoni-pizza.html',

    'pão de queijo': '../pages/recipes/cheese-bread.html',
  
    'filé de peixe': '../pages/recipes/fish-fillet.html',
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
    'Panqueca fit com frutas',
    'Panqueca fitness',
    'Omelete no forno',
    'Salada com frango e abobrinha',
    'Sopa de carne e legumes',
    'Pizza na frigideira',
    'Almôndegas em molho de tomate',
    'Macarrão com bacon',
    'Macarrão penne com molho de tomate',
    'Macarrão com presunto e queijo',
    'Pão de aveia',
    'Pão doce',
    'Pão de alho',
    'Batatas fritas',
    'Bolinho de frango',
    'Cheesecake de geleia com morangos',
    'Torta de morango',
    'Bolo de chocolate',
    'Biscoitos de chocolate',
    'Linguiça na frigideira',
    'Carne de porco assada com especiarias',
    'Carne de porco assada com legumes',
    'Caldo de frango com batatas',
    'Sopa de legumes',
    'Pão de queijo',
    'Filé de peixe',
    'Pizza de chocolate',
    'Pizza de calabresa',

    'Fitness',
    'Saudáveis',
    'Café da manhã',
    'Massas', 
    'Pizzas', 
    'Salgados',
    'Doces',
    'Carnes',
    'Fáceis',
    'Pães',  
    'Caldos e Sopas', 
    'Sobremesas',
  ]

  autocomplete(searchInput, recipes);
}





