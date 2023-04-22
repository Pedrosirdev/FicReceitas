function notificationForm (){
  const notificationForm = document.getElementById("notification-form")
  const btnConfirmNotification = document.getElementById("confirm-notification-form")
  const btnLoadMore = document.querySelector(".btn-carregar-mais")

  btnLoadMore.addEventListener("click", (ev) => {
    ev.preventDefault()
    notificationForm.classList.add("show-notification-form")
  })

  btnConfirmNotification.addEventListener("click", (ev) => {
    ev.preventDefault()
    notificationForm.classList.remove("show-notification-form")
  })

  return
}

notificationForm()

const teste = "nada"
console.log(teste)