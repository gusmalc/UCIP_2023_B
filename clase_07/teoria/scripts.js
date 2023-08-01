// alert("HOLA MUNDO");
// console.log(2+1);
const x="aaa";

let nombre;

let estudia = true;

nombre = "Pedro";

let apellido = "Rossi";

let edad = 25;

let a = 11;
let b = "20";

let c = a + b;

nombre = "juan";

//console.log(typeof estudia);

function saludo(){
    alert("HOLA");
}

// saludo();

function suma(x,y){
    alert(x+y);

}

//suma(4,10);

let dias = ['Lunes','Martes','Miercoles'];

console.log(dias[1]);

let persona = {
    nombre: "Maria",
    edad: 20,
    saluda: function(){
        alert("Hola soy Maria");
    }
}

//console.log(persona.edad);

// persona.saluda();


let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    let a = parseFloat(n1.value);
    let b = parseFloat(n2.value);
    alert(a+b);
})