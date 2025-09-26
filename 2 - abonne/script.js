/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const smileyElem = document.querySelector("i");
//const smileyElem = document.querySelector("#emoji");

// 2. Je recupere le bouton ABONNER
const btnSubElem = document.querySelector(".btn-sub");

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let isAboBol = false;

// 4. J'ecoute le clique sur l'icone smiley
smileyElem.addEventListener("click", function () {
    smileyElem.classList.toggle("fa-smile-wink");
    smileyElem.classList.toggle("happy");
    smileyElem.classList.toggle("fa-face-meh");

})

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
btnSubElem.addEventListener("click", function () {
    if (isAboBol === false) {
        btnSubElem.classList.toggle("abonne");
        btnSubElem.innerText = "Abonné";
        isAboBol = true;
    }else{
        btnSubElem.classList.toggle("abonne");
        btnSubElem.innerText = "Abonnez-vous";
        isAboBol = false
    }
})