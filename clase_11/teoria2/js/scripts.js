let resultado = document.getElementById("resultado");
let btn_frase = document.getElementById("btn_frase");

let inputs = document.querySelectorAll(".miinput");


btn_frase.addEventListener("click", () => {
    let f = "";
    inputs.forEach(el => {
        let v = el.value;
        //f = f + v + " ";
        //f += v + " ";
        f += `${v} -- ${v} --`;
    });

    resultado.innerHTML = f;
})