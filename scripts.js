// Function Theme Button
// Ajoute la class .customtheme dans le body
function themeButton() {
    document.body.classList.toggle("customtheme");
}

// Lorsqu'on clique sur le button qui a la classe .button, lancer la fonction themeButton()
document.querySelector(".button").addEventListener("click", themeButton);