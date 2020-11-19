import React from 'react';
import { Container } from '../ProdutoCadastro/styles';
import Button from '../../components/Button';
import cliente1 from '../../assets/cliente1.png';
import image1 from '../../assets/image1.png';
import orcamento1 from '../../assets/orcamento1.png';
import { DivBotao, DivTexto, ButtonLink } from './styles';
import { Link } from 'react-router-dom';


const PerfilFuncionario = () =>{
 return(
   <Container>
      <DivTexto>
        <h2>
          Perfil Funcionário
        </h2>
        <p>
          <h5>“Todo crescimento depende de atividade. Não há desenvolvimento físico ou intelectual sem esforço, e esforço significa trabalho. ”</h5>
        
                               
        </p>
       <p>
       Aqui você terá tudo necessário para colaborar com nosso site!
       </p>
      </DivTexto>  
      <DivBotao>
          <Button>
            <img src={image1} alt= "cadastrar produto" />
            <ButtonLink>
              <Link  to="/ProdutoCadastro">Cadastrar Produtos</Link>
            </ButtonLink>
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

export default PerfilFuncionario
