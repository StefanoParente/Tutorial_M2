document.getElementById('converter').onclick = tempConverter;
document.getElementById('clear').onclick = clearForm;

function tempConverter(){
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = document.getElementById('fahrenheit').value;

    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert("valor inválido!");
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) *  1.8) + 32;
    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}
function clearForm(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}