const star = document.querySelectorAll('.star')
const clickStar = document.querySelector('.click-star')
const divAvaliation  = document.querySelector('.div-avaliation')
const divMessage = document.querySelector('.message-avaliation')
const okButton = document.querySelector('.ok-avaliation')

  clickStar.addEventListener('click',() => {
    setTimeout(() => {
      divAvaliation.classList.remove('none')
    }, 500);
  })

  star.forEach( function (st){
    st.addEventListener('click', () => {
      setTimeout(() => {
        divMessage.classList.remove('none')
        divAvaliation.classList.add('none')
      }, 1000);
    })
  })

  okButton.addEventListener('click', () => {
    divMessage.classList.add('none')
  })

const star1 = document.querySelector('.star1')
const star2 = document.querySelector('.star2')
const star3 = document.querySelector('.star3')
const star4 = document.querySelector('.star4')
const star5 = document.querySelector('.star5')


star1.addEventListener('mouseover', function () {
  star1.classList.remove('bi-star')
  star1.classList.add('bi-star-fill')

  star2.classList.remove('bi-star-fill')
  star3.classList.remove('bi-star-fill')
  star4.classList.remove('bi-star-fill')
  star5.classList.remove('bi-star-fill')
  star2.classList.add('bi-star')
  star3.classList.add('bi-star')
  star4.classList.add('bi-star')
  star5.classList.add('bi-star')
})

star2.addEventListener('mouseover', function () {

  star2.classList.add('bi-star-fill')
  star2.classList.remove('bi-star')

  star3.classList.remove('bi-star-fill')
  star4.classList.remove('bi-star-fill')
  star5.classList.remove('bi-star-fill')
  star3.classList.add('bi-star')
  star4.classList.add('bi-star')
  star5.classList.add('bi-star')

})

star3.addEventListener('mouseover', function () {

  star3.classList.add('bi-star-fill')
  star3.classList.remove('bi-star')

  star1.classList.add('bi-star-fill')
  star2.classList.add('bi-star-fill')

  star1.classList.remove('bi-star')
  star2.classList.remove('bi-star')
  star4.classList.remove('bi-star-fill')
  star5.classList.remove('bi-star-fill')
  star4.classList.add('bi-star')
  star5.classList.add('bi-star')
})

star4.addEventListener('mouseover', function () {

  star3.classList.add('bi-star-fill')
  star3.classList.remove('bi-star')

  star1.classList.add('bi-star-fill')
  star2.classList.add('bi-star-fill')
  star3.classList.add('bi-star-fill')
  star4.classList.add('bi-star-fill')
  star5.classList.add('bi-star')

  star1.classList.remove('bi-star')
  star2.classList.remove('bi-star')

  star1.classList.remove('bi-star')
  star2.classList.remove('bi-star')
  star3.classList.remove('bi-star')
  star4.classList.remove('bi-star')
  star5.classList.remove('bi-star-fill')
})

star5.addEventListener('mouseover', function () {

  star3.classList.add('bi-star-fill')
  star3.classList.remove('bi-star')

  star1.classList.add('bi-star-fill')
  star2.classList.add('bi-star-fill')
  star3.classList.add('bi-star-fill')
  star4.classList.add('bi-star-fill')
  star5.classList.add('bi-star-fill')

  star1.classList.remove('bi-star')
  star2.classList.remove('bi-star')

  star1.classList.remove('bi-star')
  star2.classList.remove('bi-star')
  star3.classList.remove('bi-star')
  star4.classList.remove('bi-star')
  star5.classList.remove('bi-star')
})

