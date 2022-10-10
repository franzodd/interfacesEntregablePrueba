"use strict"

let porcentaje = document.getElementById("porcentaje");


function carga1(){
    let num = Math.floor(Math.random() * (10 - 1) + 1);
    porcentaje.innerHTML = num + "%";
}
function carga2(){
    let num = Math.floor(Math.random() * (35 - 20) + 20);
    porcentaje.innerHTML = num + "%";
}
function carga3(){
    let num = Math.floor(Math.random() * (70 - 50) + 50);
    porcentaje.innerHTML = num + "%";
}
function carga4(){
    let num = Math.floor(Math.random() * (90 - 80) + 80);
    porcentaje.innerHTML = num + "%";
}
function carga5(){
    let num = 100;
    porcentaje.innerHTML = num + "%";
}
function enviar(){
    let a = document.createElement("a");
    a.setAttribute("href", "index.html");
    document.body.appendChild(a);
    a.click();
}
setTimeout(carga1, 1000);
setTimeout(carga2, 2000);
setTimeout(carga3, 3000);
setTimeout(carga4, 4000);
setTimeout(carga5, 5000);
setTimeout(enviar, 6000);