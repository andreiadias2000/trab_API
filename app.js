//Ponto de entrada da aplicação e definição de rotas
// app.js

// const express = require('express');
// const { reservarSala, listarReservas } = require('./service/reservasService');

// const app = express();
// app.use(express.json());

// app.get('/reservas', (req, res) => {
//     res.json(listarReservas());
// });

// app.post('/reservas', (req, res) => {
//     const { nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim } = req.body;
//     try {
//         const mensagem = reservarSala(nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim);
//         res.status(201).send(mensagem);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// });

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000');
// });


// app.js

const express = require('express');
const { reservarSala, listarReservas, atualizarDadosReserva, deletarReservaPorId } = require('./service/reservasService');

const app = express();
app.use(express.json());

// GET - Listar todas as reservas
app.get('/reservas', (req, res) => {
    res.send("listar Reservas uhuuuu");
});

// POST - Criar nova reserva
app.post('/reservas', (req, res) => {
  res.send("Reserva ok etchaaaa");
    // const { id, nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim } = req.body;
    // try {
    //     const mensagem = reservarSala(id, nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim);
    //     res.status(201).send(mensagem);
    // } catch (error) {
    //     res.status(404).send(error.message);
    }
);

// PUT - Atualizar uma reserva existente
app.put('/reservas/:id', (req, res) => {
  res.send("Reserva ATUALIZADA RSRSRS");
    // const { id } = req.params;
    // const novosDados = req.body;
    // try {
    //     const mensagem = atualizarDadosReserva(parseInt(id), novosDados);
    //     res.status(200).send(mensagem);
    // } catch (error) {
    //     res.status(400).send(error.message);
    }
);

// DELETE - Deletar uma reserva
app.delete('/reservas/:id', (req, res) => {
  res.send("DELETADA A RESERVA")
    // const { id } = req.params;
    // try {
    //     const mensagem = deletarReservaPorId(parseInt(id));
    //     res.status(200).send(mensagem);
    // } catch (error) {
    //     res.status(400).send(error.message);
    }
);

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
