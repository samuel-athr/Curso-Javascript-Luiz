// Declaração de funções (Function hoisting)
// todas as funções sao declaradas primeiro independente
// da posição no codigo

falaOi()

function falaOi () {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)

const souUmDado = function () {
    console.log("Eu sou um dado");
}

souUmDado()

// Arrow function

const funcaoArrow = () => {
    console.log("Sou uma Arrow Function");
}

funcaoArrow()

// Dentro de um objeto

const objeto = {
    fala() {
        console.log("Sou um objeto");
    }
}

objeto.fala()