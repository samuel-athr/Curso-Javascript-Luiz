// Reduce é utilizado para reduzir o array a só um elemento

// ======================== Some todos os números (reduce) ========================

//Nota: quando o valor nao está definido depois da função callback, o primeiro valor do acumulador será o mesmo do primeiro indice

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce( (acumulador, valor, indice, array) => {
    acumulador += valor
    return acumulador
}, )

// console.log(total);
// ======================== Retorne um array com pares  (Filter) ========================

const numPares = numeros.reduce( (acumulador, valor, indice, array) => {
    if (valor % 2 === 0 ) acumulador.push(valor)
    return acumulador
}, [])

// console.log(numPares);
// ======================== Retorne um array com o dobro dos valores (Map) ========================

const numEmDobro = numeros.reduce( (acumulador, valor, indice, array) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])

// console.log(numEmDobro);

// ======================== Retorne a pessoa mais velha ========================

const pessoas = [
    { nome: "Myra Atkins", idade: 28},
    { nome: "Nora CainEffie Alvarado", idade: 51},
    { nome: "Catherine Simpson", idade: 535},
    { nome: "Virginia Morrison", idade: 67},
    { nome: "Frances Rivera", idade: 12},
    { nome: "Eleanor Rogers", idade: 9}
];

const maisVelho = pessoas.reduce( (acumulador, valor, indice, array) => {
    if ( acumulador.idade > valor.idade) return acumulador
    return valor
},)

console.log(maisVelho);

