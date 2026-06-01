
var imagen =[
    "img/1.jpg",
    "img/2.png",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg"

]
var i =0

document.getElementById("Siguiente").addEventListener("click", () => {
if (i<4) {i++;}
document.getElementById("img").setAttribute("src",imagen[i])
} );

document.getElementById("Anterior").addEventListener("click", () => {
    if (i>0) {i--;}
    document.getElementById("img").setAttribute("src",imagen[i])
} );
