const footerYearEr = document.querySelector('.footer__year');
let todey = new Date();
let year = todey.getFullYear();
footerYearEr.textContent = year;

const faEl = document.querySelector('.fa-bars'); 
const navEl = document.querySelector('.nav');
const crossEl = document.querySelector('.fa-xmark');
faEl.addEventListener('click', function (e) {
  navEl.style.left = 0;

});
  crossEl.addEventListener('click', function (e) {
    navEl.style.left = '-100%';

});
const btnUp = {
el: document.querySelector('.btn-up'),
show() {
this.el.classList.remove('btn-up_hide');
},
hide() {
this.el.classList.add('btn-up_hide');
},
addEventListener() {
window.addEventListener('scroll', () => {
const scrollY = window.scrollY || document.documentElement.scrollTop;
scrollY > 400 ? this.show() : this.hide();
});
document.querySelector('.btn-up').onclick = () => {
window.scrollTo({
top: 0,
left: 0,
behavior: 'smooth'
});
}
}
}

btnUp.addEventListener();