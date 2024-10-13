// Responsável por validações e operações principais de reservas

// // service/reservasService.js

// const { reservas, salas, apartamentosValidos, blocoApartamentos } = require('../repository/reservasRepository');

// const validarData = (dataStr) => {
//     const data = new Date(dataStr);
//     const hoje = new Date();
//     if (data < hoje) {
//         throw new Error('A data não pode ser retroativa.');
//     }
//     return data;
// };

// const validarEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// };

// const validarTelefone = (telefone) => {
//     const regex = /^\d{11}$/;
//     return regex.test(telefone);
// };

// const reservarSala = (nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim) => {
//     if (!apartamentosValidos.includes(apartamento) || !blocoApartamentos.includes(bloco)) {
//         throw new Error('Número de apartamento ou bloco inválido.');
//     }

//     if (!validarEmail(email)) {
//         throw new Error('Email inválido.');
//     }

//     if (!validarTelefone(telefone)) {
//         throw new Error('Telefone inválido. Deve conter 11 dígitos.');
//     }

//     const reservaData = validarData(data);

//     reservas.push({
//         nome,
//         apartamento,
//         bloco,
//         email,
//         telefone,
//         sala: salas[salaEscolhida],
//         data: reservaData,
//         horarioInicio,
//         horarioFim
//     });

//     return 'Reserva confirmada com sucesso!';
// };

// const listarReservas = () => {
//     return reservas.map(reserva => ({
//         sala: reserva.sala,
//         data: reserva.data.toISOString().slice(0, 10),
//         horarioInicio: reserva.horarioInicio,
//         horarioFim: reserva.horarioFim,
//         nome: reserva.nome,
//         apartamento: reserva.apartamento,
//         bloco: reserva.bloco
//     }));
// };

// module.exports = {
//     reservarSala,
//     listarReservas
// };



// service/reservasService.js

const { reservas, salas, apartamentosValidos, blocoApartamentos, adicionarReserva, buscarReservaPorId, atualizarReserva, deletarReserva } = require('../repository/reservasRepository');

const validarData = (dataStr) => {
    const data = new Date(dataStr);
    const hoje = new Date();
    if (data < hoje) {
        throw new Error('A data não pode ser retroativa.');
    }
    return data;
};

const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validarTelefone = (telefone) => {
    const regex = /^\d{11}$/;
    return regex.test(telefone);
};

const reservarSala = (id, nome, apartamento, bloco, email, telefone, salaEscolhida, data, horarioInicio, horarioFim) => {
    if (!apartamentosValidos.includes(apartamento) || !blocoApartamentos.includes(bloco)) {
        throw new Error('Número de apartamento ou bloco inválido.');
    }

    if (!validarEmail(email)) {
        throw new Error('Email inválido.');
    }

    if (!validarTelefone(telefone)) {
        throw new Error('Telefone inválido. Deve conter 11 dígitos.');
    }

    const reservaData = validarData(data);

    const novaReserva = {
        id,
        nome,
        apartamento,
        bloco,
        email,
        telefone,
        sala: salas[salaEscolhida],
        data: reservaData,
        horarioInicio,
        horarioFim
    };

    adicionarReserva(novaReserva);
    return 'Reserva confirmada com sucesso!';
};

const listarReservas = () => {
    return reservas.map(reserva => ({
        id: reserva.id,
        sala: reserva.sala,
        data: reserva.data.toISOString().slice(0, 10),
        horarioInicio: reserva.horarioInicio,
        horarioFim: reserva.horarioFim,
        nome: reserva.nome,
        apartamento: reserva.apartamento,
        bloco: reserva.bloco
    }));
};

const atualizarDadosReserva = (id, novosDados) => {
    const reservaAtualizada = atualizarReserva(id, novosDados);
    if (!reservaAtualizada) {
        throw new Error('Reserva não encontrada.');
    }
    return 'Reserva atualizada com sucesso!';
};

const deletarReservaPorId = (id) => {
    deletarReserva(id);
    return 'Reserva deletada com sucesso!';
};

module.exports = {
    reservarSala,
    listarReservas,
    atualizarDadosReserva,
    deletarReservaPorId
};
