//Splice
//O método splice consegue recortar uma parte do array (primeiro elemento, ultimo elemento (o ultimo nao aparece))
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"]
// nomes.splice(indice, delete, elem1, elem2, elem3)
const removidos = nomes.splice(1, 0, "Samuel")
console.log(nomes);
console.log(removidos);

