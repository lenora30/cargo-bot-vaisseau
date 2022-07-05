var close = document.getElementsByClassName("close");
var title = document.getElementsByClassName("title");
var regles = document.getElementById("regles");
var bouton = document.getElementById("problems");
console.log(bouton.nextSibling.nextSibling);

for (let i = 0; i < title.length; i++) {
    title[i].onclick = function () {
        this.parentElement.classList.toggle("close");
        this.parentElement.classList.toggle("open");
    };
}

bouton.onclick = function () {
    
    this.nextSibling.nextSibling.classList.toggle("close");
    this.nextSibling.nextSibling.classList.toggle("open");
}



// title_close.addEventListener('click', function(){
//     console.log("hello");
// });

