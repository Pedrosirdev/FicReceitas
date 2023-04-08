export { globalFunctionCarousel }


const radio1 = document.querySelector('#radio1')
const autoBtn1 = document.querySelector('.auto-btn1')
const radio2 = document.querySelector('#radio2')
const autoBtn2 = document.querySelector('.auto-btn2')
const radio3 = document.querySelector('#radio3')
const autoBtn3 = document.querySelector('.auto-btn3')
const radio4 = document.querySelector('#radio4')
const autoBtn4 = document.querySelector('.auto-btn4')

  function globalFunctionCarousel() {
    function check(){
      radio1.addEventListener('click', () => {
        autoBtn1.classList.add('background-btn-auto')
        autoBtn2.classList.remove('background-btn-auto')
        autoBtn3.classList.remove('background-btn-auto')
        autoBtn4.classList.remove('background-btn-auto')
      })
      radio2.addEventListener('click', () => {
        autoBtn2.classList.add('background-btn-auto')
        autoBtn1.classList.remove('background-btn-auto')
        autoBtn3.classList.remove('background-btn-auto')
        autoBtn4.classList.remove('background-btn-auto')
      })
      radio3.addEventListener('click', () => {
        autoBtn3.classList.add('background-btn-auto')
        autoBtn2.classList.remove('background-btn-auto')
        autoBtn1.classList.remove('background-btn-auto')
        autoBtn4.classList.remove('background-btn-auto')
      })
      radio4.addEventListener('click', () => {
        autoBtn4.classList.add('background-btn-auto')
        autoBtn2.classList.remove('background-btn-auto')
        autoBtn3.classList.remove('background-btn-auto')
        autoBtn1.classList.remove('background-btn-auto')
      })
    }

    check()

    let count = 1
    radio1.checked = true

    setInterval(() => {
      nextImage()
    }, 5000);

    function nextImage() {
      count++
      if(count>4){
        count = 1
      }
      document.getElementById("radio"+count).checked = true
      
      
    }

    nextImage()
  }
