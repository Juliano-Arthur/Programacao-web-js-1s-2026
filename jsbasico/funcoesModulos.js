const operacoes = require('./operacoes');

function executarOperacao(operacao, a, b){

    return operacao(a, b);
}


console.log(`3 + 5 =${executarOperacao(operacoes.somar, 3, 5)}`);
console.log(`3 - 5 =${executarOperacao(operacoes.subtrair, 3, 5)}`);
