import React, { useCallback } from 'react';
import { Container, DivImg, DivTitulo } from './styles';
import prod7 from '../../assets/prod7.png';
import prod3 from '../../assets/prod3.png';
import Button from '../../components/Button';

const Carrinho = () => {
  return(
    <Container>
      <h1>orçamento</h1>
      <DivTitulo>
        <h1>Descrição</h1>
        <h1>Quantidade</h1>
        <h1>Preço</h1>
      </DivTitulo>
     
      <div>
        <DivImg>
          <img src={prod7} alt=""/>
          <p>Leitor de Código de Barras Elgin Flash</p>
        </DivImg>
        <form>
          <label>
            Quantidade:
            <input type="number" />
          </label>
        </form>
        <p>R$ 156.00</p>
      </div>
      <div>
       <DivImg>
          <img src={prod3} alt=""/>
          <p>Impressora de Etiquetas Zebra ZT230</p>
        </DivImg>
        <form>
          <label>
            Quantidade:
            <input type="number" />
          </label>
        </form>
        <p>R$ 5732.00</p>
      </div>
      <form>
        <label>
          Subtotal
          <input type="number"/>
        </label>
      </form>
      <form>
      <label>
          Total
          <input type="number"/>
        </label>
      </form>
      <Button>
        escolher+produtos
      </Button>
      <Button>
        cadastrar
      </Button>
    </Container>
  

  )
}
export default Carrinho;
