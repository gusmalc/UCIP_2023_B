// let caja1 = document.getElementById("caja1");
// let caja1 = document.querySelector("#caja1");
let caja1 = document.querySelector(".cajas");

let cajas = document.querySelectorAll(".cajas");

let btn_tema = document.querySelector("#btn_tema");
let estilos = document.querySelector("#estilos");



// btn_tema.onclick = function () {};

let tema = "claro";

btn_tema.addEventListener("click", () => {
    if(tema == "claro"){
        poner_oscuro();
    }else{
        poner_claro();
    }
})
function poner_scuro(){
    estilos.href = "css/estilos_b.css";
    tema = "oscuro";
    btn_tema.innerHTML = "TEMA CLARO";
}

function poner_claro(){
    estilos.href = "css/estilos.css";
    tema = "claro";
    btn_tema.innerHTML = "TEMA OSCURO";
}
