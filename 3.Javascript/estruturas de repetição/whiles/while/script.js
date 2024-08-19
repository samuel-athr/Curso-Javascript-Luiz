//No While é preciso declarar a variavel antes de utiliza-lá

// let i = 0

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//===============================================================

// const nome = "Lucas"

// while (i < nome.length) {
//     console.log(nome[i])
//     i++
// }

// ===============================================================

function random (max, min) {
    const r = Math.random() * (max - min) + (min);
    return Math.round(r) 
}

const min = 0
const max = 10

let rand = random()

while (rand != 10) {
    rand = random(min, max)
    console.log(rand)
}

