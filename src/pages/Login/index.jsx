import React from 'react'
import {Container, DivForm, DivImg} from './styles'
import ImgHomeLogin from '../../assets/imgHomeLogin.png'
import Button from '../../components/Button'

const Login = () => {

  return (
  <Container>
   
    <DivForm>
      <h1> 
        Bem vindo de volta!
      </h1>
      <form>
        <label>
          Usuário:
          <input type="text" />
        </label>
       
        <label >
          Senha:
          <input type="password"/>
        </label>
        
        <Button type>Login</Button>
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

export default Login
