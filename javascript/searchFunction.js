
const searchInput = document.querySelectorAll(".input-search")
  
  searchInput.forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if(event.keyCode === 13){
        const searchValue = event.target.value
        alert(searchValue)
      }
    })
  })
  

