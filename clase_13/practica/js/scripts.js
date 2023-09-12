let btn1 = document.getElementById('btn1');
let app = document.getElementById('app');

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
        <tr>
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