const operacoes = require('../utils/operacoes');

function somar(req, res) {
    const { num1, num2 } = req.query;

    const soma = operacoes.somar(num1, num2);

    res.json({
        soma
    });
}

function subtrair(req, res) {
    const { num1, num2 } = req.query;

    const subtracao = operacoes.subtrair(num1, num2);

    res.json({
        subtracao
    });
}

function somarPost(req, res) {
    const { num1, num2 } = req.body;

    const resultadoSoma = operacoes.somar(num1, num2);
    res.json({
        resultado: resultadoSoma
    });
}

module.exports = {
    somar,
    subtrair,
    somarPost
}