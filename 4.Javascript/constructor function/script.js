// Função construtora -> cria objetos
// Função fabrica -> cria objetos
// Construtora -> Sempre a primeira letra maiuscula = Pessoa (new)

function Pessoa (nome, sobrenome) {
    // Variavel privada (só pode ser utilizada e dentro da função Pessoa)
    const id = 1321731
    // Função privada (só pode ser utilizada e dentro da função Pessoa)
    function funcao () {

    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo =  () => {
        return `${this.nome} está falando sobre javascript. Id:${id}`
    }
}
p1 = new Pessoa ('Samuel', 'Silva')
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.metodo());
p2 = new Pessoa ("Arthur", 'Alencastro')
console.log(p2.nome);
console.log(p2.sobrenome);
