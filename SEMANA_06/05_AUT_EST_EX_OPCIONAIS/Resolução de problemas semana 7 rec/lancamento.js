const g = 10;

function calcula_tempo(x){
    let op = "/";
    let resultado;
    if (op == "/") {
        resultado = x/g;
    };
    document.getElementById("saida").innerHTML = `${x} ${op} ${g} = ${resultado}`;
    }

let btn = document.getElementById("btn");
btn.onclick = function(){
    let x = document.getElementById("x").value;
    calcula_tempo(parseInt(x));
    calcula_altura(parseInt(x));
}
function calcula_altura(x){
    let y = Math.pow(x, 2);
    let op = "/";
    let resultado;
    if (op == "/") {
        resultado = y/g*2;
    }
    document.getElementById("saida2").innerHTML = `${y} ${op} ${g*2} = ${resultado}`;
}