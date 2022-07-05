var close = document.getElementsByClassName("close");
var title = document.getElementsByClassName("title");
var regles = document.getElementById("regles");
var bouton = document.getElementById("problems");

bouton.onclick = function () {
    
    this.nextSibling.nextSibling.classList.toggle("close");
    this.nextSibling.nextSibling.classList.toggle("open");
}

