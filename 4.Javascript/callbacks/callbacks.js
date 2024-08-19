// As funções callbacks são usadas para chamar outra função quando a execução de uma acabar


//Função que retorna um número aleatório para ser usado no timeout
function rand (min = 1000, max = 3000) {
    const num = Math.random() * (max - min) - min;
    return num
}

//função recebe um parâmetro depois verifica se existe um parâmetro (uma função)
//o parametro é executado (por ser uma função) que repete o ciclo
function f1 (callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) return callback()
    }, rand())
}

function f2 (callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) return callback()
    }, rand())
}

function f3 (callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) return callback()
    }, rand())
}

f1(function (){
    f2(function (){
        f3(function (){
            console.log('acabou!');
        })
    })
})
