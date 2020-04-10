// Your code goes here

// Event listener to make buttons spin on click and mouseleave 
const btnSpin = document.querySelectorAll(".btn");

btnSpin.forEach((btnEl) => {
    btnEl.addEventListener("click", (event) => {
        event.target.style.transform = "rotate(360deg)";
        event.target.style.transition = "1s";
    })

    btnEl.addEventListener("mouseleave", (event) => {
        event.target.style.transform = "rotate(-360deg)";
        event.target.style.transition = "1s";
    })
})


//Event listener to change the color of all nav links with the class of ".nav-link"
const navColor = document.querySelectorAll(".nav-link");

navColor.forEach((navEl) => {
            navEl.addEventListener("mouseover", (event) => {
                event.target.style.color = "green";

                navEl.addEventListener("mouseleave", (event) => {
                    event.target.style.color = "black";

                    navEl.addEventListener("click", (event) => {
                        preventDefault();
                    })
                })
            })
        })

            //Event listener to change color of text in the class of ".text-content"
            const textChange = document.querySelectorAll(".text-content");

            textChange.forEach((textEl) => {
                textEl.addEventListener("mousedown", (event) => {
                    event.stopPropagation();
                    event.target.style.color = "black";
                })

                textEl.addEventListener("mouseenter", (event) => {
                    event.stopPropagation();
                    event.target.style.color = "orange";
                })
            })

            //Event listener to change background color of the main body
            const bodyBgChange = document.querySelector("body");

            bodyBgChange.addEventListener("wheel", (event) => {
                bodyBgChange.style.backgroundColor = "grey";
            })


            //event handlers for that one Jurassic Park line.....
            const imgNoNo = document.querySelectorAll("img");

            imgNoNo.forEach((imgEl) => {
                imgEl.addEventListener("contextmenu", () => {
                    event.preventDefault();
                    alert("Ah, ah, ah, you didn't say the magic word!");
                })
            })
            //JP text Handlers
            const textNoNo = document.querySelectorAll("p");

            textNoNo.forEach((textEl) => {
                textEl.addEventListener("copy", () => {
                    event.preventDefault();
                    alert("Ah, ah, ah, you didn't say the magic word!");

                    textEl.addEventListener("cut", () => {
                        event.preventDefault();
                        alert("Ah, ah, ah, you didn't say the magic word!");

                        textEl.addEventListener("auxclick", () => {
                            event.preventDefault();
                            alert("Ah, ah, ah, you didn't say the magic word!");
                        })
                    })
                })
            })
        