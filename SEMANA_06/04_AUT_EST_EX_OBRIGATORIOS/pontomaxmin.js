document.getElementById(button-eq).onclick = equa();

    function equa() {
        let a = Number(document.getElementById("x").value)
        let b = Number(document.getElementById("y").value)
        let c = Number(document.getElementById("z").value)
        let Xv = (-b)/(2*a)
        let Yv = -(b**2 - 4*a*c)/4*a
        console.log(a)
        console.log(b)
        console.log(c)
        if (Yv > 0) {
            eq.innerHTML += `<li> O ponto de máximo é (${Xv}, ${Yv}) </li>`
        } else if(Yv == 0) {
            eq.innerHTML += `<li> O valor é (${Xv}, 0) </li>`
        } else {
            eq.innerHTML += `<li> O ponto de mínimo é (${Xv}, ${Yv}) </li>`
        }
    }
