document.addEventListener("DOMContentLoaded"),()=> {});


const cardAdj = [{name: "perro", img: "images/c.png"}, {name: "cpp", img: "images/cpp.png"}, 
{name: "css", img: "images/css.png"}, {name: "fortran", img: "images/fortran.png"},
{name: "html", img: "images/html.png"}, {name: "python", img: "images/python.png"},
{name: "c", img: "images/c.png"}, {name: "csharp", img: "images/csharp.png"}, 
{name: "css", img: "images/css.png"}, {name: "fortran", img: "images/fortran.png"},
{name: "html", img: "images/html.png"}, {name: "python", img: "images/python.png"}];

const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasEscogidas = [];
var cartasEscogidasId = [];
var cartasGanadas = [];

function creartablero()¨{
  for(let i=0; i< cardAdj.length; i++) ´{
    var carta=document.createElement("img");


 carta.setAttribute("src","images/reverso.png");
 carta.setAttribute("data-id", i);
 carta.addEventListener("click",voltearCarta);
 cuadricula.appendChild(carta);
 
}

