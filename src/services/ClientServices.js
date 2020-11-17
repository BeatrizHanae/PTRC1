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

export const cadastroProduto = async newProduto => {
  return api
  .post('/apiProducts/register', {
    NOME: newProduto.NOME,
    ID_PRODUCT: newProduto.ID_PRODUCT,
    VALOR: newProduto.VALOR,
    QUANTIDADE: newProduto.QUANTIDADE,
    IMAGEM: newProduto.IMAGEM,
  })
  .then(_response => {
    console.log('Produto cadastrado.');
  });
}

export const suporteManutencao = async newManutencao => {
  return api
  .post('/apiSuporte/suportemanutencao',{
    DATA: newManutencao.DATA,
    HORA: newManutencao.HORA,
    NOME_CLIENTE: newManutencao.NOME_CLIENTE,
    NOME_EMPRESA: newManutencao.NOME_EMPRESA,
    CPF: newManutencao.CPF,
    DESCRICAO: newManutencao.DESCRICAO,
  })
  .then(_response => {
    console.log('Suporte de manutenção cadastrado.');
  });
}

export const suporteTreinamento = async newTreinamento => {
  return api
  .post('/apiSuporte/suportetreinamento',{
    DATA: newTreinamento.DATA,
    HORA: newTreinamento.HORA,
    NOME_CLIENTE: newTreinamento.NOME_CLIENTE,
    NOME_EMPRESA: newTreinamento.NOME_EMPRESA,
    CPF: newTreinamento.CPF,
    DESCRICAO: newTreinamento.DESCRICAO,
  })
  .then(_response => {
    console.log('Suporte de treinamento cadastrado.');
  });
}