// Your code goes here
const btnSpin = document.querySelectorAll(".btn");

btnSpin.forEach((btnEl) => {
    btnEl.addEventListener("click", (event) => {
        event.target.style.transform = "rotate(360deg)";
        event.target.style.transition = "1s"
    })
})

btnSpin.forEach((btnEl) => {
    btnEl.addEventListener("mouseleave", (event) => {
        event.target.style.transform = "rotate(-360deg)";
        event.target.style.transition = "1s"
    })
})

const navColor = document.querySelectorAll(".nav-link");

navColor.forEach((navEl) => {
    navEl.addEventListener("mouseover")
})
