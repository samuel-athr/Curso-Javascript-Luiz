//Removendo itens do array
//Pop (O método pop remove o ULTIMO item do array)

const num = [0, 1, 2, 3]
num.pop()
console.log(num);

//shift (O método pop remove o PRIMEIRO item do array)

const num2 = [0, 1, 2, 3]
num2.shift()
console.log(num2);

//________________________________________________
//Adicionando itens no array
//push (O método push adiciona um item na ultima posição do array)

const num3 = [0, 1, 2, 3]
num3.push(4)
console.log(num3);

//Adicionando itens no array
//unshift (O método push adiciona um item na primeira posição do array)

const num4 = [0, 1, 2, 3]
num4.unshift(-1)
console.log(num4);

//___________________________________
//Método split()
//O split separa uma string em pedaços de um array, de acordo com o parametro
const string = "Um pequeno jabuti xereta viu dez cegonhas felizes"
const palavras = string.split(" ")
console.log(palavras);

//Método join 
//O split une uma array em uma string, de acordo com o parametro (reverso do split())

const array = ["Uma", "Bela", "Flor"]
const frase =  array.join("-")
console.log(frase);







