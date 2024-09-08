/*
Objetos e arrays são variaveis relacionais ou seja apontam para um endereço na memória
ou seja, se outra variável for criado recebendo ele apontará para o mesmo endereço. E então
alterar a nova variável alterará o objeto original 
*/

const produto = { nome: 'Caneca', preço: 23.99}
const variavel = produto
const variavelSpread = {...produto, material: 'Alumínio'}
const variavelAssing = Object.assign({}, produto, {Marca: 'Stanley'})
const variavel2 = {nome: produto.nome, preço: produto.preço}

produto.preço = 12.99
// Aqui produto é alterado porém como variável está apontando para o mesmo endereço ela também se alterará.
console.log(produto, "Objeto Original");
console.log(variavel, "Usando variavel");

// Para copiar um objeto sem apontar para o mesmo endereço é possível utilizar o operador spread -> ...
console.log(variavelSpread, "Usando o spread");

//Outra maneira seria utilizar o Object.assign({objeto vazio}, objeto a ser copiado)
console.log(variavelAssing, "Usando o assing");

//Existe mais uma forma porém é a menos comum e útil
console.log(variavel2, "Criando outro objeto");

// O Object.getOwnPropertyDescriptor( nome-do-objeto , 'chave-do-objeto') obtem as propiedades do objeto
const Carro = {marca : 'chevrolet', km: 12}
const propiedades = Object.getOwnPropertyDescriptor(Carro, 'marca')
console.log(propiedades);

// Como verificar os valores no objeto
const pessoa = {nome : 'Allen Bridges', age : 86}
console.log(Object.keys(pessoa)); // Mostra somente as chaves (Array)
console.log(Object.values(pessoa)); // Mostra somentes os valores (Array)
console.log(Object.entries(pessoa)); // Mostra as chaves e os valores (Array dentro de array)


