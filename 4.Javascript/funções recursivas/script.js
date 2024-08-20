// A função recursiva chama ela mesma, continuando um ciclo 
// Atenção em definir uma parada se nao continuara infinita ou até
// o StackFlow dar error


function recursiva (max) {
    max++
    if (max > 10) return
    console.log(max);
    recursiva(max) 
}

recursiva(0)
