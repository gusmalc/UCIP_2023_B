let btn1 = document.getElementById('btn1');
let app = document.getElementById('app');
let titulo = document.getElementById('titulo');

btn1.addEventListener('click',carga_lista);

// let carga_lista = ()=>{
//     app.innerHTML = "<h1>Todo OK</h1>";
// }

function carga_lista(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json() )
    .then(lista_usuarios =>{
        crear_tabla(lista_usuarios)
    })
    .catch(err=>{
        console.log(err.message);
    });


}


function crear_tabla(uu){
titulo.innerHTML = "<h1>Lista Usuarios</h1>";
    let tabla = `
    <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">EMAIL</th>  
      <th scope="col">NOMBRE USUARIO</th>    
    </tr>
  </thead>
  <tbody>    
    `

    uu.forEach(u => {
        tabla += `
        <tr onclick="carga_datos_usuario(${u.id})">
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.username}</td>
        </tr>
        `
    });

    tabla += `
    </tbody>
        </table>
    `

    app.innerHTML = tabla;

}


function carga_datos_usuario(id){
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=> res.json() )
    .then(datos_usuario =>{
        mostar_datos(datos_usuario)
    })
    .catch(err=>{
        console.log(err.message);
    });
}

function mostar_datos(datos){
    //titulo.innerHTML = "<h2 style='color: #0f0'>Datos Usuario</h2>";
    titulo.innerHTML = "<h2 class='color_rojo'>Datos Usuario</h2>";
    let d = `
    <div class="datos">
    <h1>NOMBRE: ${datos.name}</h1>
    <h2>TELEFONO: ${datos.phone}</h2>
    <h2>${datos.email}</h2>
    <h2>${datos.company.name}</h2>
    </div>
    `
    app.innerHTML = d;
}