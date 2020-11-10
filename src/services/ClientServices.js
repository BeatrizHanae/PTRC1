/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import api from './ApiService';

export const cadastro = newUser => {
  return api
    .post('/apiClients/cadastro', {
      NOME: newUser.NOME,
      USERNAME: newUser.USERNAME,
      CPF: newUser.CPF,
      SENHA: newUser.SENHA,
    })
    .then(_response => {
      console.log('Cliente Cadastrado');
    });
};

export const login = async client => {
  const response = await api.post('/apiClients/login', {
    USERNAME: client.USERNAME,
    SENHA: client.SENHA,
  });

  localStorage.setItem('usertoken', response.data);
  return response.data;
};
