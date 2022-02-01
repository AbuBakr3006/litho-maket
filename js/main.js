// let elopenbtn = document.querySelector('.header__btn')
let elSearchBtn = document.getElementsByClassName('header__btn');
let elModal = document.getElementById('modal');
let elClose = document.getElementById('closeBtn');
let headerBtn = document.getElementById('btnHeader')



headerBtn.addEventListener('click', function () {
  elModal.classList.add('show');
})
elClose.addEventListener('click', function () {
  elModal.classList.remove('show');
})
