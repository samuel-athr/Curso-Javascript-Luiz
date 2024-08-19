//Aqui o while nao verifica a primeira interação e depois começa a verificar

function random (max, min) {
    const r = Math.random() * (max - min) + (min);
    return Math.round(r) 
}

const min = 0
const max = 10

let rand = 10

do {  
    rand = random(min, max)
    console.log(rand)
} while (rand != 10)
