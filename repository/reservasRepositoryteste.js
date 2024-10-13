const request = require('supertest'); // Bibliotecas necessárias para testes
const app = require('./app'); 

describe('Testando o CRUD de Reservas', () => {
  
  // Testando a rota GET para listar todas as reservas
  it('Deve listar todas as reservas', async () => {
    const res = await request(app).get('/reservas');
    expect(res.statusCode).toEqual(200); // Espera um código de resposta 200 (sucesso)
    expect(Array.isArray(res.body)).toBe(true); // Espera que a resposta seja um array
  });

  // Testando a rota POST para criar uma nova reserva
  it('Deve criar uma nova reserva', async () => {
    const novaReserva = {
      apartamento: '203',
      data: '2024-10-20',
      sala: 'churrasqueira 2'
    };

    const res = await request(app)
      .post('/reservas')
      .send(novaReserva);
    
    expect(res.statusCode).toEqual(201); // Espera um código de resposta 201 (Criado)
    expect(res.body).toHaveProperty('id'); // Espera que a resposta contenha o campo 'id'
    expect(res.body.apartamento).toBe(novaReserva.apartamento); // Verifica se o apartamento foi salvo corretamente
  });

  // Testando a rota PUT para atualizar uma reserva existente
  it('Deve atualizar uma reserva existente', async () => {
    const reservaAtualizada = {
      apartamento: '203',
      data: '2024-11-10',
      sala: 'salão de festas'
    };

    const res = await request(app)
      .put('/reservas/1') // Atualizando a reserva com ID 1
      .send(reservaAtualizada);
    
    expect(res.statusCode).toEqual(200); // Espera um código de resposta 200 (Sucesso)
    expect(res.body.sala).toBe(reservaAtualizada.sala); // Verifica se o campo 'sala' foi atualizado
  });

  // Testando a rota DELETE para remover uma reserva
  it('Deve remover uma reserva existente', async () => {
    const res = await request(app).delete('/reservas/1'); // Excluindo a reserva com ID 1
    expect(res.statusCode).toEqual(200); // Espera um código de resposta 200 (Sucesso)
    expect(res.body.message).toBe('Reserva removida com sucesso'); // Espera a mensagem de confirmação
  });
});
