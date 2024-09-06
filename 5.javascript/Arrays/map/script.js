// Map

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobraNum = numeros.map( el => `${el} x 2 = ${el * 2}` )

// console.log(dobraNum);


const pessoas = [
    { nome: "Luiz", idade: 62},
    { nome: "Maria", idade: 23},
    { nome: "Eduardo", idade: 55},
    { nome: "Letícia", idade: 19},
    { nome: "Rosana", idade: 32},
    { nome: "Wallace", idade: 47}
];
// Para cada elemento:

// ================== Retorne apenas uma string com o nome da pessoa ==================

const nome = pessoas.map ( obj => obj.nome)
// console.log(nome);

// ================== Remova apenas a chave "nome" do objeto ==================

// Duas maneiras de fazer 

//Não altera o objeto
const idade = pessoas.map( el => ({idade: el.idade}) )

//Altera o objeto
// const idade = pessoas.map( el => { 
//     delete el.nome 
//     return el })

//nota: quando é preciso retornar um objeto, se faz necessário o uso do return e as chaves {}
// OU colocar parenteses em volta

// console.log(idade);

// ================== Adicione uma chave id em cada objeto ==================

const id = pessoas.map( el => {
    const newObject = {...el}
    newObject.id = (Math.random() * (1000 - 1) - 1).toFixed(0) 
    return newObject })
//Nota: torna-se necessario o uso de uma nova variavel (newObject), uma vez que se modifica-lo o objeto original será modificado também 

console.log(pessoas);
console.log(id);

    
    