let btn1 = document.getElementById('btn1');
let app = document.getElementById('app');

btn1.addEventListener('click',()=>{
    fetch(`alert.txt`)
    .then(res=> res.text() )
    .then(contenido =>{
        app.innerHTML = contenido;
    })
    .catch(err=>{
        console.log(err.message);
    });
})