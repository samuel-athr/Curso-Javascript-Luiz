// Closure é a habilidade de acessar o escopo lexico da função

function falaNome (name) {
    return function () {
        return name
    }
}

const funcao1 = falaNome('Samuel')
const funcao2 = falaNome('Arthur')

console.log(funcao1(), funcao2());

//Ou seja, sempre que chamado a funcao1 o valor do nome será Samuel.