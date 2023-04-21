export { notificationForm }

function notificationForm (){
  const notificationForm = document.getElementById("notification-form")
  const btnConfirmNotification = document.getElementById("confirm-notification-form")
  const sendForm = document.getElementById("send-form")

  sendForm.addEventListener("click", (ev) => {
    ev.preventDefault()
    notificationForm.classList.add("show-notification-form")
  })

  btnConfirmNotification.addEventListener("click", (ev) => {
    ev.preventDefault()
    notificationForm.classList.remove("show-notification-form")
  })
}