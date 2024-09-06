// Filter -> Sempre retornar o array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const maiorQue10 = numeros.filter( (el) => el > 10 )

// console.log(maiorQue10);

// Retorne as pessoas que tem o nome com 5 letras ou mais

const pessoas = [
    { nome: "Luiz", idade: 62},
    { nome: "MariA", idade: 23},
    { nome: "Eduardo", idade: 55},
    { nome: "Letícia", idade: 19},
    { nome: "Rosana", idade: 32},
    { nome: "Wallace", idade: 47}
];

// Retorne as pessoas com mais de 50 anos

// const pessoasComNomeGrande = pessoas.filter( el => el.nome.length >= 7 )
// console.log(pessoasComNomeGrande);

const pessoasComMaisDe50 = pessoas.filter( el => el.idade > 50)
// console.log(pessoasComMaisDe50);

// Retorne as pessoas cujo nome termina com a

const nomesQueTerminamComALetraA = pessoas.filter( el => el.nome.toLowerCase().endsWith("a"))
console.log(nomesQueTerminamComALetraA);
