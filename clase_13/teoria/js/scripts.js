let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let pelota = document.getElementById('pelota');


btn1.addEventListener('click', ()=>{
    setTimeout(function(){
        alert('ok');
    },2000);
})

btn2.addEventListener('click', ()=>{
    let n = 0;
    let inter = setInterval(function(){    
    
        pelota.style.cssText = `transform: translateX(${n}px)`
   
    n++;
    if(n>500){
        clearInterval(inter);
        n = 0;
    }
}, 10);
})




