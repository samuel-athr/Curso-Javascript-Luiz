//Função geradoras permitem que o código da função possa ser "pausado", e se chamado
//novamente retornara o proximo valor

function* geradora1 () {
    // Código....
    yield "Valor número : 1"
    // Código....
    yield "Valor número : 2"
    // Código....
    yield "Valor número : 3"
}

const g1 = geradora1()
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());

//Função geradora INFINITA 
function* geradora2 () {
    let i = 0

    while (true) {
        yield i
        i++
    }
}

const g2 = geradora2()
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next());
// console.log(g2.next());

function* geradora3 (){
    yield 1
    yield 2
    yield 3
}

// Continua apartir dos yields da função geradora3
function* geradora4 () {
    yield* geradora3()
    yield 4
    yield 5
    yield 6
}

const g4 = geradora4()
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next().value);
// console.log(g4.next());


//Usando o return é impedido que qualquer yield após ele seja executado.
function* geradora5 () {
    
    yield function (){
        console.log("vim do yield 1");
    };

    return function (){
        console.log("vim do yield 2");
    };

    yield function (){
        console.log("vim do yield 3");
        
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value
func1()
func2()
func3()

