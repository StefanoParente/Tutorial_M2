//P1: LANÇAMENTO VERTICAL
    //Função que calcula o tempo total em segundos
    function segundos(p1){
        const tempo = p1/10;
        return tempo;
    }
        //Função que calcula a altura maxima em metros
    function alturaMax(p1){
        const hmax = (p1 * p1)/20;
        return hmax;
    }
        //Botão
    try{
        b1.onclick = function(){
            document.getElementById("output1").innerHTML = `Tempo total em segundos = ${segundos(parseInt(document.getElementById("p1").value))} segundos`;
            document.getElementById("output2").innerHTML = `Altura máxima alcançada = ${alturaMax(parseInt(document.getElementById("p1").value))} metros`;
        }
    }catch(error){
        console.log(error);
    }
    
    //P2: PONTOS MAXIMO E MINIMO
        //Função para o Xv
    function xv(a, b){
        const x = (-1 * b)/(2 * a);
        return x;
    }
        //Função para o Yv
    function yv(a, b, c){
        const y = ((b * b - (4 * a * c)) * -1) / (4 * a);
        return y;
    }
        //Botão
    try{
        b2.onclick = function(){
            let a = document.getElementById("a").value;
            let b = document.getElementById("b").value;
            let c = document.getElementById("c").value;
            document.getElementById("output1").innerHTML = `Xv = ${xv(parseInt(a), parseInt(b))}`;
            document.getElementById("output2").innerHTML = `Yv = ${yv(parseInt(a), parseInt(b), parseInt(c))}`;
        }
    }catch(error){
        console.log(error);
    }
    
    //P3 - TEMPERATURA
        //Farenheit --> Celcius
    function FtoC(graus){
        const celcius = (graus - 32) / (1.8);
        return celcius;
    }
        //Celcius --> Farenheit
    function CtoF(graus){
        const farenheit = (graus * 1.8) + 32;
        return farenheit;
    }
        //Botões
    try{
        farToCel.onclick = function(){
            document.getElementById("output").innerHTML = `${FtoC(parseInt(document.getElementById("graus").value))} Celcius`;
        }
        celToFar.onclick = function(){
            document.getElementById("output").innerHTML = `${CtoF(parseInt(document.getElementById("graus").value))} Farenheit`;
        }
    }catch(error){
        console.log(error);
    }
    
    //P4 - CONSUMO DE ENERGIA
    function consumo(qtd, unidade){
        let value = qtd * unidade;
        if(qtd > 100 && qtd <= 200){
            value = value * 1.25;
        }else if(qtd > 200){
            value = value * 1.50;
        }
        return value;
    }
        //Botões
    try{
        b4.onclick = function(){
            let qtd = parseInt(document.getElementById("qtd").value);
            let unidade = parseInt(document.getElementById("unidade").value);
            document.getElementById("output").innerHTML = `Consumo = ${consumo(parseInt(qtd), parseInt(unidade))}`;
        }
    }catch(error){
        console.log(error);
    }
    
    //Botão para voltar, presente em toda tela
    try{
        voltar.onclick = function(){
            window.location.href = "index.html";
        }
    }catch(error){
        console.log('index');
    }