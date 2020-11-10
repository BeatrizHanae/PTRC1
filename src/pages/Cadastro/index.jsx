/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {Component} from 'react';
import {
  Container,
  DivFormCad,
  DivImgCad,
  DivTitulo,
} from './styles';
import IconCadastro from '../../assets/IconCadastro.png';
import {cadastro} from '../../services/ClientServices'

class Cadastro extends Component {
  constructor() {
    super()
    this.state = {
      NOME: '',
      USERNAME: '',
      CPF: '',
      SENHA: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      NOME: this.state.NOME,
      USERNAME: this.state.USERNAME,
      CPF: this.state.CPF,
      SENHA: this.state.SENHA
    }

    cadastro(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }


render(){
  return (
    <Container>
      <DivTitulo>
        <h1>Bem vindo!</h1>
        <h2>Cadastro</h2>
      </DivTitulo>
      <DivFormCad>
        <form noValidate onSubmit={this.onSubmit}>
          <label>
            Nome Completo:
            <input type="text" 
            name = "NOME"
            value={this.state.NOME}
            onChange={this.onChange}/>
          </label>

          <label>
            Username:
            <input type="text"
            name = "USERNAME"
            value={this.state.USERNAME}
            onChange={this.onChange} />
          </label>

          <label>
            CPF/CNPJ:
            <input type="text"
            name = "CPF"
            value={this.state.CPF}
            onChange={this.onChange} />
          </label>

          <label>
            Senha:
            <input type="password"
            name = "SENHA"
            value={this.state.SENHA}
            onChange={this.onChange} />
          </label>
          <button className="btn btn-lg btn-primary btn-block">
            Finalizar
          </button>
        </form>

      </DivFormCad>

      <DivImgCad>
        <img src={IconCadastro} alt="Icone do cadastro" />
      </DivImgCad>

      <h2>Oferecemos a maior linha de produtos para a sua empresa.</h2>
    </Container>
    ) 
  }
}

export default Cadastro