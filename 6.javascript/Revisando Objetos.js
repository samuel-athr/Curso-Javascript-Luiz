// Também é possivel criar objetos com apartir de construtores
const pessoa1 = new Object()
pessoa1.nome = "Lou"
pessoa1.sobrenome = "Swanson" 

// console.log(pessoa1);

//Existem casos que se pode preferir um ao outro, porém são bastante similares
const pessoa2 = {
    nome : "Lou",
    sobrenome : "Swanson" 
}

// console.log(pessoa2);

//Além da notação de ponto também é possível utilizar os [], bem uteis quando não se sabe qual é o nome
//da chave a ser acessada

// console.log(pessoa2.nome);
// console.log(pessoa2['nome']);
const chave = 'nome'
// console.log(pessoa2[chave]);

const pessoa3 = new Object
pessoa3.nome = "Alvin"
pessoa3.sobrenome = "Cooper"
pessoa3.idade = "19"
pessoa3.falaNome = function () {
    return `${this.nome} está falando seu nome.`
}
pessoa3.getFullYear = function () {
    const data = new Date()
    return data.getFullYear() - this.idade
}

// console.log(pessoa3.getFullYear());

for (let chave in pessoa3){
    // console.log(pessoa3[chave]);
    
}

// ==================== Factory Functions ==================== 

function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('samuel','arthur')
console.log(p1.nomeCompleto());

// ==================== Constructor functions ====================

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Object.freeze(this) // É possivel colocar este método na função tornado impossível altera-la depois de sua execução. 
}
// new cria um novo objeto vazio e atrela o this a essa função
// sendo this.nome dentro da função Pessoa e Pessoa.nome sendo 
// a mesma coisa

const p2 =  new Pessoa ('samuel', 'arthur')

// p2 = "outra coisa" // Aqui é alterado o objeto em si ou seja o valor do endereço na memória mudou, (ERRO pois é impossivel mudar o endereço da memória de uma constante)

// Object.freeze(p2) // com o método Object.freeze(objeto) é possivel fazer com que o objeto nao seja alterado

p2.nome = "Outra coisa" // Aqui é alterado somente o valor DENTRO do objeto, nao mundando o endereço da memoria do objeto e sim do valor dentro do objeto

delete p2.nome // com o freeze também é impossível deletar atributos do objeto
console.log(p2.nome);



