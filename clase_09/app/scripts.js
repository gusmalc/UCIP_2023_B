let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btn_sumar = document.getElementById("btn_sumar");
let btn_borrar = document.getElementById("btn_borrar");
let resultado = document.getElementById("resultado");


btn_sumar.addEventListener("click", function(e){
    e.preventDefault();
    let a = parseFloat(num1.value) ;
    let b = parseFloat(num2.value) ;
    if(isNaN(a) || isNaN(b)){
        resultado.innerHTML = "Ingresar solo números";
    }else{
        let c = a + b ;
        resultado.innerHTML = c;
    }    
})

btn_borrar.addEventListener("click", function(e){
    e.preventDefault();
    resultado.innerHTML = 0;
    num1.value = 0;
    num2.value = 0;
});

//btn_borrar.onclick = function(e){}

window.onload = function(){
    resultado.innerHTML = 0;
    num1.value = 0;
    num2.value = 0;
}