/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import api from './ApiService';

export const cadastro = newUser => {
  return api
    .post('/apiUsers/cadastro', {
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
  const response = await api.post('/apiUsers/login', {
    USERNAME: client.USERNAME,
    SENHA: client.SENHA,
  });

  localStorage.setItem('usertoken', response.data.token);
  const { data } = response;
  return data;
};

export const contato = async newContato => {
  return api
    .post('/apiContatos/contato', {
      NOME: newContato.NOME,
      EMAIL: newContato.EMAIL,
      MENSAGEM: newContato.MENSAGEM,
      TELEFONE: newContato.TELEFONE,
    })
    .then(_response => {
      console.log('Mensagem enviada');
    });
};
