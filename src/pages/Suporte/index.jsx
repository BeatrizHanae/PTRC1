/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IconAssistenciaTecnica from '../../assets/IconAssistenciaTecnica.png';
import IconManutencao from '../../assets/IconManutencao.png';
import IconTreinamento from '../../assets/IconTreinamento.png';
import { Container, DivAssistencia, DivManutencao } from './styles';

const Suporte = () => {
  return (
    <Container>
      <DivManutencao>
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

        <h1>Treinamento</h1>
        <p>
          -> Ou clique aqui!
        </p>
      </DivManutencao>

      <DivAssistencia>
        <h1>Assistência técnica </h1>
        <p>
          Caso precise de assistência técnica,
          entre em contato para resolver seu problema:
          (61) 3877-2496
        </p>
      </DivAssistencia>

    </Container>




  );
};

export default Suporte;
