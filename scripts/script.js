// document.getElementById('main-action-button').onclick = function () {
//   document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
// }

document.getElementById('main-action-button').onclick = function () {
  window.scrollTo({
    top: document.getElementById('products').offsetTop,
    behavior: 'smooth',
  })
}
