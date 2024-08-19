const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Continue -> Quando usado pula para proxima iteração
// Break -> Quando usado acaba com a iteração

//Usando for of
// for (let numero of numeros) {
//     if (numero % 2 === 0){
//         continue
//     }

//     console.log(numero);

//     if ( numero  === 9) {
//         console.log("Número 9 encontrado");
//         break
//     }
// }

//============================================================

//Usando for in
// for (let i in numeros) {
//     let numero = numeros[i]
//     if (numero % 2 === 0){
//         continue
//     }

//     console.log(numero);

//     if ( numero  === 9) {
//         console.log("Número 9 encontrado");
//         break
//     }
// }

//============================================================

//Usando While
// let i = 0
// while (i <= numeros.length) {
//     let numero = numeros[i]
//     if (numero % 2 === 0){
//         i++
//         continue
//     }

//     console.log(numero);

//     if ( numero  === 9) {
//         console.log("Número 9 encontrado");
//         i++
//         break
//     }

//     i++
// }

//============================================================

//Usando Do While
// let i = 0
// do {
//     let numero = numeros[i]
//     if (numero % 2 === 0){
//         i++
//         continue
//     }

//     console.log(numero);

//     if ( numero  === 9) {
//         console.log("Número 9 encontrado");
//         i++
//         break
//     }

//     i++
// } while (i <= numeros.length)
