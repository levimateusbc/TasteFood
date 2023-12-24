const navBtn = document.querySelector('.btn-mobile-nav') 
const headernv = document.querySelector(".header")
navBtn.addEventListener('click',function(){
    headernv.classList.toggle("nav-open")
})