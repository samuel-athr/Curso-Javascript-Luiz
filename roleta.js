function Roleta (ticket, aparicoes) {
    let porcentagemPadrao = 0;
    const porcentagemAtual = (aparicoes / 21) * 100;

    if (ticket == 1) porcentagemPadrao = 37.8;
    if (ticket == 2) porcentagemPadrao = 23.4;
    if (ticket == 5) porcentagemPadrao = 12.6;
    if (ticket == 10) porcentagemPadrao = 7.2;
    if (ticket == "CoinFlip") porcentagemPadrao = 7.2;
    if (ticket == "Pachinko") porcentagemPadrao = 3.6;
    if (ticket == "Cash-Hunt") porcentagemPadrao = 3.6;
    if (ticket == "Crazy-Time") porcentagemPadrao = 1.8;
    
    if (porcentagemAtual > porcentagemPadrao) {

        const diferença = porcentagemAtual - porcentagemPadrao

        console.log(`${ticket} tem porcentagem atual de ${porcentagemAtual.toFixed(1)}% e está acima ${diferença.toFixed(1)}%`);
    } else {
        
        const diferença = porcentagemPadrao - porcentagemAtual
        
        console.log(`${ticket} tem porcentagem atual de ${porcentagemAtual.toFixed(1)}% e está abaixo ${diferença.toFixed(1)}%`);
        
        guardaDiferencas.push(diferença.toFixed(1))
    } 
    
}

var guardaDiferencas = []

const ticket1 = new Roleta(1,25)
const ticket2 = new Roleta(2,11)
const ticket5 = new Roleta(5,4)
const ticket10 = new Roleta(10,1)
const ticketCoinFlip = new Roleta("CoinFlip",2)
const ticketPachinko = new Roleta("Pachinko",2)
const ticketCashHunt = new Roleta("Cash-Hunt",2)
const ticketCrazyTime = new Roleta("Crazy-Time",2)

console.log(guardaDiferencas);

function melhorAposta (guardaDiferencas) {
var maiorValor = guardaDiferencas[0]
    for (diff of guardaDiferencas){
        if (Number(diff) > Number(maiorValor)) maiorValor = diff
    }
    return `${maiorValor}% é a diferença mais alta`
}

console.log(melhorAposta(guardaDiferencas));

