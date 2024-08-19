// Criando uma função que retorna outra função

function escolheMultiplicador (n) {
   
    function  escolheNúmero (x) {
        return n * x 
    }

    return escolheNúmero
}

const escolheNúmero = escolheMultiplicador(5)
console.log(escolheNúmero);
console.log(escolheNúmero(13));

// Ou

function criaMultiplicador (n){
    return function(x){
        return n * x
    }
}