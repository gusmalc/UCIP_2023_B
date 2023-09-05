let padre = document.getElementById("padre");
let respuesta = document.getElementById("respuesta");
let hh = document.querySelector("#respuesta>h1");
let caja_padre = document.getElementById("caja_padre");
let caja_hijo = document.getElementById("caja_hijo");

padre.addEventListener("click", function(e) {
    //let ii = e.target.id;
    let cc = e.target.dataset.color;
    let tt = e.target.dataset.texto;

    respuesta.style.backgroundColor = cc;
    respuesta.style.color = tt;
    hh.innerHTML = cc;
    if(cc == '#f00'){
        caja_padre.classList.add("fondo_amarillo");
        caja_hijo.style.cssText = "background: #00f; width: 300px";
    }
    if(cc == "#0f0"){
        caja_padre.classList.remove("fondo_amarillo");
        caja_hijo.style.cssText = "background: #ccc";
    }
    if(cc == "#00f"){
        caja_padre.classList.toggle("fondo_amarillo");
        caja_hijo.style.cssText = "background: #fff";
    }
})

//el.style.cssText = "background-color: black; color: white;";
