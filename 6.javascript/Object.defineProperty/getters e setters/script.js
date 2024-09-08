// defineProperty -> Getter (obter e retornar o valor) e Setters (setar e mudar o valor)
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = 13
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquePrivado
        },
        set : function (valor) {
            valor = estoquePrivado
        }
    })
}

const p1 = new Produto("Calças", 13, 443)
console.log(p1.estoque);

//Factory Function
function criaProduto (nome) {
    return {
        get nome () {
            return nome 
        },
        set nome (valor) {
            valor = valor.replace('coisa.', '')
            nome = valor 
        }
    }
}
const p2 = criaProduto('camiseta')
p2.nome = 'Qualquer coisa.'
console.log(p2.nome);
