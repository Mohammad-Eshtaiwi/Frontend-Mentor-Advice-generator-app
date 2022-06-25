"use strict";
const loader = document.querySelector(".loader");
const getAdviceButton = document.querySelector("#get-advice");
const adviceContainer = document.querySelector(".body");
const adviceIdSpan = document.querySelector("h1 span");

getAdviceButton.addEventListener("click", getAdvice);
// init 
getAdvice();

function getAdvice() {
    // disable getAdviceButton
    getAdviceButton.disabled = true;
    loader.classList.add("show");
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            loader.classList.remove("show");
            getAdviceButton.disabled = false;

            const advice = data.slip.advice;
            const adviceId = data.slip.id;
            adviceContainer.innerHTML = advice;
            adviceIdSpan.innerHTML = adviceId;
        });
}