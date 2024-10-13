// Responsável por armazenar e gerenciar os dados das reservas

// // repository/reservasRepository.js

// const reservas = [];

// const salas = {
//     A: 'Salão de Festas',
//     B: 'Churrasqueira 1',
//     C: 'Churrasqueira 2',
//     D: 'Churrasqueira 3',
//     E: 'Churrasqueira 4'
// };

// const apartamentosValidos = [
//     101, 102, 103, 104, 201, 202, 203, 204,
//     301, 302, 303, 304, 401, 402, 403, 404,
//     501, 502, 503, 504
// ];

// const blocoApartamentos = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// module.exports = {
//     reservas,
//     salas,
//     apartamentosValidos,
//     blocoApartamentos
// };


// repository/reservasRepository.js

let reservas = [];

const salas = {
    A: 'Salão de Festas',
    B: 'Churrasqueira 1',
    C: 'Churrasqueira 2',
    D: 'Churrasqueira 3',
    E: 'Churrasqueira 4'
};

const apartamentosValidos = [
    101, 102, 103, 104, 201, 202, 203, 204,
    301, 302, 303, 304, 401, 402, 403, 404,
    501, 502, 503, 504
];

const blocoApartamentos = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const adicionarReserva = (reserva) => {
    reservas.push(reserva);
};

const buscarReservaPorId = (id) => {
    return reservas.find(reserva => reserva.id === id);
};

const atualizarReserva = (id, novosDados) => {
    const index = reservas.findIndex(reserva => reserva.id === id);
    if (index !== -1) {
        reservas[index] = { ...reservas[index], ...novosDados };
        return reservas[index];
    }
    return null;
};

const deletarReserva = (id) => {
    reservas = reservas.filter(reserva => reserva.id !== id);
};

module.exports = {
    reservas,
    salas,
    apartamentosValidos,
    blocoApartamentos,
    adicionarReserva,
    buscarReservaPorId,
    atualizarReserva,
    deletarReserva
};
