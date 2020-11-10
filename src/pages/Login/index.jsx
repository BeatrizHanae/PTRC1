import React, {Component} from 'react'
import {Container, DivForm, DivImg} from './styles'
import ImgHomeLogin from '../../assets/imgHomeLogin.png'
//import Button from '../../components/Button'
import { login } from '../../services/ClientServices'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      USERNAME: '',
      SENHA: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      USERNAME: this.state.USERNAME,
      SENHA: this.state.SENHA
    }

    login(user).then( response => {
      if(response) {
        this.props.history.push('/')
      }
    })
  }


  render(){
    return (
    <Container>
   
    <DivForm>
      <h1> 
        Bem vindo de volta!
      </h1>
      <form noValidate onSubmit={this.onSubmit}>
        <label htmlFor="username">
          Usuário:
          <input 
          type="text"
          name="USERNAME"
          value={this.state.USERNAME}
          onChange={this.onChange}
          />
        </label>
       
        <label htmlFor="password">
          Senha:
          <input type="password" 
          name="SENHA"
          value={this.state.SENHA}
           onChange={this.onChange}
          />
        </label>
        
        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block">Login</button>
        <h3>
          Cadastre aqui!
        </h3>
      </form>  
    </DivForm>
    <DivImg>
      <img src={ImgHomeLogin} alt="Imagen ilustrativa" />
    </DivImg>

  </Container>
  )
}

}
export default Login;
