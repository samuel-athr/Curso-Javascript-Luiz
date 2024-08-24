// É possivel concatenar array usando o spread ou o método concat.
// com o spread tambem é possivel concatenar objetos
// rest -> ... ; spread -> ... 

//Concatenando Arrays:

const n1 = [1, 2, 3]
const n2 = [4, 5, 6]

//  const n3 = n1.concat(n2, "Cavalo", [7,8,9])
const n3 = [...n1, "Alexandre", ...n2, ...[7,8,9]]

console.log(n3);

// Concatenando Objetos:

const l1 = {nome: "samuel"}
const l2 = {idade: 19}
const l3 = {...l1,...l2}

console.log(l3);