import React from 'react';
import { Container } from '../ProdutoCadastro/styles';
import Button from '../../components/Button';
import IconTreinamento from '../../assets/IconTreinamento.png';
import orcamento1 from '../../assets/orcamento1.png';
import IconManutencao from '../../assets/IconManutencao.png';
import { DivAgrupa, DivBotao, DivTexto, DivTextos } from './styles';


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
            Orçamento
          </Button>
          <Button>
            <img src={IconManutencao} alt=" manutenção" />
            Manutenção
          </Button>
          <Button>
           <img src= {IconTreinamento} alt="Treinamento" />
           Treinamento 
          </Button>     
        </DivBotao>
   </Container>
 
 )

}

export default PerfilFuncionario
