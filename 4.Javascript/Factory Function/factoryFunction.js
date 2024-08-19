// Factory function (Função Fábrica)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura,
        peso,

        fala(assunto = "falando sobre nada"){
            return `${this.nome} está ${assunto}`
        },

        // Getter
        get imc(){
            const resultado = this.peso / (this.altura * this.altura);
            return resultado.toFixed(2)
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`            
        },

        // Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            console.log(valor);
            this.nome = valor.shift()
            this.sobrenome = valor.join()
        }
    }
}
const p1 = criaPessoa("Samuel", "Arthur", 1.94, 74)
p1.nomeCompleto = "Lucas Marques"
console.log(p1.nome); 
console.log(p1.sobrenome);
console.log(p1.nomeCompleto); 
console.log(p1.imc); 
console.log(p1.fala());


//Notas:
// O getter pega as informações disponíveis (parâmetros ou pelo "this") e os calcula
// sendo impossível altera-lo, porém sem o getter é possivel substituilo por qualquer outra coisa
// Sobre o setter : Ao atribuir um valor à propriedade p1.nomeCompleto, o setter é chamado com o valor atribuído como argumento/parametro. No código o exemplo é "Lucas Marques"

// Constructor function (Função construtora)