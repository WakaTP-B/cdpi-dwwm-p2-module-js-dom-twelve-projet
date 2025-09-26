/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style
*/

// 1. Je recupere le bouton "Accepter les cookies"
const acceptBtnElem = document.querySelector(".btn-accept");

// 2. Je recupere la banniere de cookies
const banniereCookieElem = document.querySelector(".cookies");

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
acceptBtnElem.addEventListener("click", function () {
    banniereCookieElem.classList.add("hide")
    setTimeout(function () {
        banniereCookieElem.remove();
    }, 1000);
});
