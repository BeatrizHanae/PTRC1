import React from 'react';
import { Container } from '../ProdutoCadastro/styles';
import Button from '../../components/Button';
import cliente1 from '../../assets/cliente1.png';
import image1 from '../../assets/image1.png';
import orcamento1 from '../../assets/orcamento1.png';
import { DivBotao, DivTexto } from './styles';
const LoginFuncionario = () =>{
 return(
   <Container>
      <DivTexto>
        <h2>
          Título
        </h2>
        <p>
            Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, 
           als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ustrie.
           Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein un
        </p>
       
      </DivTexto>  
      <DivBotao>
          <Button>
            <img src={image1} alt= "cadastrar produto" />
            Cadastrar Produto
          </Button>
          <Button>
            <img src={orcamento1} alt=" orçamento" />
            Orçamento e negociações
          </Button>
          <Button>
           <img src= {cliente1} alt="cliente" />
           Clientes
          </Button>     
      </DivBotao>
   </Container>
 
 )

}

export default LoginFuncionario
