// forEach itera (somente em arrays!)


const a1 = [10, 20, 30]
let total = 0
a1.forEach( (valor, indice, array) => total += valor)

console.log(total);

// Quando usar cada iterador?
// While e doWhile -> quando nao souber quantas iterações irá ocorrer
// forEach -> quando quiser iterar sobre um array
// for in ; for of ; for -> quando quiser iterar 
