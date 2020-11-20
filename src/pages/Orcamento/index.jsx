import React, { useCallback } from 'react';
import Button from '../../components/Button';
import ImgOrcamento from '../../assets/ImgOrcamento.png';
import {Container, DivAgrupa, DivUm} from './styles';
const Orcamento = () => {
  return(

    <Container>
      <h1>Orçamento</h1>
      <DivAgrupa>
        <DivUm>
          <fomr>
            Insira aqui o nome dos produtos que deseja:
            <input type="text"/>
            Insira aqui o método de pagamento:
            <input type="text"/>
            Insira seu telefone ou seu e-mail:
            <input type="text"/>
          </fomr>
          <Button>Enviar</Button>
        </DivUm>
        <div>
          <img src={ImgOrcamento} alt="ilustração orçamento"/>
        </div>
        
      </DivAgrupa>
      
    </Container>

  )
}

export default Orcamento;
