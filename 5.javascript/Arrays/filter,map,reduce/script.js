// Retorne a soma do dobro de todos os partes
// -> Filtrar pares
// -> Dobrar o valores
// -> Reduzir (somar tudo)

const numeros = [63, 79, 92, 58, 100, 99, 22, 58]
const total = numeros.filter( e => e % 2 == 0).map( e => e * 2).reduce( (acc, el) => acc + el)





console.log(total);