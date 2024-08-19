// For in -> Retorna os indices do array/vetor e as chaves do objeto

const frutas = ["Banana", "Pêra", "Uva"]

for ( i in frutas) {
    console.log(frutas[i], i);
}    

//====================================================================

const pessoa = { Nome: "Daniel", Sobrenome: "Luiz", Idade: 30}

for ( chave in pessoa) {
    console.log(chave, pessoa[chave]);
}    

