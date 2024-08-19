//Arguments coloca todos os paramentros em um objeto
//Somando todo os parâmetros da função
//Arguments não funciona em arrow function
function funcao () {
    // console.log(arguments);
    let total = 0
    for (let argument of arguments ) {
        total += argument
    }   
    console.log(total); 
}
// funcao(1, 2, 3, 4, 5, 6, 7)

// Como enviar um parâmetro nulo em uma função de
// forma certa -> null

function funcao2 (a, b, c) {
    console.log(a + b + c); 
}

// funcao2(1, null , 3)

// Objeto como parâmetro

function funcao3 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

// funcao3({nome: 'Samuel', sobrenome: 'Arthur', idade : 18})

// Array como parâmetro 

function funcao3 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao3(['samuel', 'arthur', 18])

// Rest operator 

function funcao4 (...numeros) {
    console.log(numeros);
}

funcao4(1,2,3,4,5,6)