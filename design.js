let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".ul");
let bar = document.querySelector(".bar")
hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
    
})
