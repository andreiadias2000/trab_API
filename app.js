// app.js

const express = require('express');
const { reservarSala, listarReservas } = require('./service/reservasService');

const app = express();
app.use(express.json());

app.get('/reservas', (req, res) => {
    res.json(listarReservas());
});

app.post('/reservas', (req, res) => {
    const { nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim } = req.body;
    try {
        const mensagem = reservarSala(nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim);
        res.status(201).send(mensagem);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
