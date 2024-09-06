// defineProperty (singular) - defineProperties (plural)
function Produto (nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    
    Object.defineProperty(this, 'estoque',{
        enumerable : true, // Visível?
        value : estoque, // Valor 
        writable : false, // Alteravel? 
        configurable : false,   // Configurável? Se sim pode ser apagado, e reconfrigurado com outro Objet.defineProperty  
    })
    // Properties permite configurar varias chaves do objeto.
    Object.defineProperties(this, {
        nome:{
            enumerable : false, 
            value : estoque, 
            writable : false, 
            configurable : false,
        preço:{
            enumerable : true, 
            value : estoque, 
            writable : false, 
            configurable : false,},
        estoque:{
            enumerable : true, 
            value : estoque, 
            writable : false, 
            configurable : false,},
    }
    })
} 
const p1 = new Produto ('Camiseta', 23, 32)
// p1.estoque = 5000000
// delete p1.estoque
console.log(p1);
for (let chave in p1){
    console.log(chave);
}
console.log(Object.keys(p1));
