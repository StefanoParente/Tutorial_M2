document.getElementById('button-e').onclick = energy;

    function energy() {
        let consumo = Number(document.getElementById("consumido").value)
        let valor = Number(document.getElementById("preco").value)
        console.log(consumo)
        console.log(valor)

        if (consumo < 100) {
            valor1 = (consumo*valor)
            document.getElementById("conta").innerHTML += `<li>Sua conta de luz é de ${consumo} Kw consumidos, com um valor total de R$ ${valor1}</li>`
        } else if (consumo >= 100 && consumo < 200) {
            let novoP = (valor * 1.25)
            valor1 = (consumo*novoP)
            document.getElementById("conta").innerHTML += `<li>Sua conta de luz é de ${consumo} Kw consumidos, com um valor total de R$ ${valor1}</li>`
        } else {
            let novoP2 = (valor * 1.5)
            valor1 = (consumo*novoP2)
            document.getElementById("conta").innerHTML += `<li>Sua conta de luz é de ${consumo} Kw consumidos, com um valor total de R$ ${valor1}</li>`
        }
    }