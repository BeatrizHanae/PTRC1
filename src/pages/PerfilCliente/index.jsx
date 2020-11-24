import React from 'react';
import { Container } from '../ProdutoCadastro/styles';
import Button from '../../components/Button';
import IconTreinamento from '../../assets/IconTreinamento.png';
import orcamento1 from '../../assets/orcamento1.png';
import IconManutencao from '../../assets/IconManutencao.png';
import { ButtonLink, DivBotao, DivTexto } from './styles';
import { Link } from 'react-router-dom';

const PerfilFuncionario = () =>{
 return(
   <Container>
      <DivTexto>
        <h2>
          Bem vindo!
        </h2>
        <p>Sempre estamos aqui para dar a melhor experiência para o seu negócio!</p>
        <p>Aqui você pode navegar pelos nossos serviços.</p>
        <p>Qualquer dúvida ou problema entre em contato conosco pela página de Contato.</p>            
      </DivTexto>  
        <DivBotao>
          <Button>
            <img src={orcamento1} alt= "orçamento" />
            <ButtonLink>
              <Link  to="/Orcamento">Orçamento</Link>
            </ButtonLink>
          </Button>
          <Button>
          <img src={IconManutencao} alt=" manutenção" />
            <ButtonLink>
              <Link  to="/SuporteManutencao">Manutenção</Link>
            </ButtonLink>
          </Button>
          <Button>
           <img src= {IconTreinamento} alt="Treinamento" />
           <ButtonLink>
              <Link  to="/SuporteTreinamento">Treinamento</Link>
            </ButtonLink> 
          </Button>     
        </DivBotao>
   </Container>
 
 )

}

export default PerfilFuncionario
