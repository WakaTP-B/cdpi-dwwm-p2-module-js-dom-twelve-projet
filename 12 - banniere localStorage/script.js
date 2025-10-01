/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */

// 1. Je recupere le bouton "Accepter les cookies"
const acceptBtnElem = document.querySelector(".btn-accept");

// 2. Je recupere la banniere de cookies
const banniereCookieElem = document.querySelector(".cookies");

// Vérification présence cookie User ------ SI présence => remove
const checkCookie = localStorage.getItem("cookie");

if (checkCookie) {
    banniereCookieElem.remove();
}

// J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
acceptBtnElem.addEventListener("click", function () {
    banniereCookieElem.style.opacity = 0;

    // Enregistrement du cookie
    localStorage.setItem("cookie", "accept");

    setTimeout(function () {
        banniereCookieElem.remove();
    }, 1000);
});