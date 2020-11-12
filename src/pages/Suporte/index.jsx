/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IconAssistenciaTecnica from '../../assets/IconAssistenciaTecnica.png';
import IconManutencao from '../../assets/IconManutencao.png';
import IconTreinamento from '../../assets/IconTreinamento.png';
import { Container, DivAgrupa, DivAssistencia, DivBotao, DivManutencao } from './styles';
import Button from '../../components/Button';

const Suporte = () => {
  return (
    <Container>
      <DivBotao>
        <h1>
          Suporte
        </h1>
        <h2>
          Dúvidas frenquetes
        </h2>
        <Button>Como posso comprar algum produto? </Button>
        <Button>Quais são as formar de pagamento? </Button>
        <Button>Qual é o prazo para entrega do produto? </Button>
        <Button>O que fazer se o produto estiver com um defeito? </Button>
      </DivBotao>

      <DivAgrupa>
        <DivManutencao>
          <img src={IconManutencao} alt ="Icone da manutenção"/>
          <h1>Manutenção</h1>
          <p>Para realizar a manutenção dos
          produtos baixe os nossos manuais:
          </p>
          <p>
            -> Entre em contato contato@nihon.com
          </p>
          <p>
            -> Ou clique aqui!
          </p>
          <img src={IconTreinamento} alt ="Icone de treinamento"/>
          <h1>Treinamento</h1>
          <p>
            -> Ou clique aqui!
          </p>
        </DivManutencao>

        <DivAssistencia>
        <img src={IconAssistenciaTecnica} alt ="Icone da Assistencia"/>
          <h1>Assistência técnica </h1>
          <p>
            Caso precise de assistência técnica,
          </p>
          <p>
            entre em contato para resolver seu problema:
          </p>
          <p>
          (61) 3877-2496
          </p>
        </DivAssistencia>
      </DivAgrupa>
      <h1>A jornada inteligente na automação comercial!</h1>
      
    </Container>




  );
};

export default Suporte;
