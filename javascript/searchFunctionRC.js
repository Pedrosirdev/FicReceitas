const searchInput = document.querySelector(".input-search")
const searchIcon = document.querySelector(".search-bar-icon")

function globalSearchFunctionRC(){

  searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle('active')
    if(searchIcon.classList.contains('active')){
      searchInput.focus()
    }
  })
  
  const pages = {
    'fitness': '../categories/fitness.html',
    'saudáveis': '../categories/healthy.html',
    'café da manhã': '../categories/breakfast.html',
    'massas': '../categories/pastas.html', 
    'pizzas': '../categories/pizzas.html', 
    'salgados': '../categories/savory.html',
    'doces': '../categories/candy.html',
    'carnes': '../categories/meat.html',
    'fáceis': '../categories/easy.html',
    'pães': '../categories/breads.html',  
    'caldos e Sopas': '../categories/broths-and-soups.html', 
    'sobremesas': '../categories/desserts.html',

    'panqueca fit com frutas': '../recipes/fitness-pancake-with-fruits.html',
    'panqueca fitness': '../recipes/fitness-pancake.html',
    'omelete no forno': '../recipes/omelette-in-oven.html',
    'salada com frango e abobrinha': '../recipes/salad-with-chicken-and-zucchini.html',
    'sopa de carne e legumes': '../recipes/meat-and-vegetable-soup.html',
    'pizza na frigideira': '../recipes/pan-pizza.html',
    'almôndegas em molho de tomate': '../recipes/meatballs-in-tomato-sauce.html',
    'macarrão com bacon': '../recipes/bacon-pasta.html',
    'macarrão penne com molho de tomate': '../recipes/penne-pasta-with-tomato-sauce.html',
    'macarrão com presunto e queijo': '../recipes/macaroni-with-ham-and-cheese.html',
    'pão de aveia': '../recipes/oat-bread.html',
    'pão doce': '../recipes/sweet-bread.html',
    'pão de alho': '../recipes/garlic-bread.html',
    'batatas fritas': '../recipes/french-fries.html',
    'bolinho de frango': '../recipes/chicken-cakes.html',
    'cheesecake de geleia com morangos': '../recipes/cheesecake-strawberry-jam.html',
    'torta de morango': '../recipes/strawberry-pie.html',
    'bolo de chocolate': '../recipes/chocolate-cake.html',
    'biscoitos de chocolate': '../recipes/chocolate-cookies.html',
    'linguiça na frigideira': '../recipes/sausage-in-the-frying-pan.html',
    'carne de porco assada com especiarias': '../recipes/pork-roasted-with-spices.html',
    'carne de porco assada com legumes': '../recipes/roast-pork-with-vegetables.html',
    'caldo de frango com batatas': '../recipes/chicken-broth-with-potatoes.html',
    'sopa de legumes': '../recipes/vegetables-soup.html',
    'pizza de chocolate': '../recipes/chocolate-pizza.html',
    'pizza de calabresa': '../recipes/pepperoni-pizza.html',

    'pão de queijo': '../recipes/cheese-bread.html',
  
    'filé de peixe': '../recipes/fish-fillet.html',
  }
  
  searchInput.addEventListener('input', search)
  searchInput.addEventListener('click', search)

  
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
      console.log('Receita/Categoria não encontrada!')
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

globalSearchFunctionRC()






