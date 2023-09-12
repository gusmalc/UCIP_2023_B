

let persona = {
    nombre: "Juan",
    edad: 25,
    viajes:  ['Roma','Mar Chiquita','Paris']
}

//console.log(persona.viajes);


let arr = [
    {nombre: 'Pedro',edad: 25},
    {nombre: 'Maria',edad: 25},
    {nombre: 'Jesus',edad: 25}
]

//console.log(arr[0].nombre);


arr.forEach((d, i) => {
    if(i != 1){
        console.log(d.nombre)
    }
  
});

