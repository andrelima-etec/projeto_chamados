require('dotenv').config();

const express = require('express');

const operacaoRouter = require('./routes/operacaoRoute');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log('Chegou a requisição.');

    const name = request.query.nome || 'visitante';

    response.send(`Olá, ${name}!`);
});

app.use(operacaoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});