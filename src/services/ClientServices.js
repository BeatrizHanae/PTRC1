import axios from 'axios'

export const cadastro = newUser => {
  return axios
    .post('http://localhost:5000/api/apiClients/cadastro', {
      NOME: newUser.NOME,
      USERNAME: newUser.USERNAME,
      CPF: newUser.CPF,
      SENHA: newUser.SENHA
    })
    .then(response => {
      console.log('Cliente Cadastrado')
    })
}

export const login = client => {
  return axios
    .post('http://localhost:5000/api/apiClients/login', {
      USERNAME: client.USERNAME,
      SENHA: client.SENHA
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
