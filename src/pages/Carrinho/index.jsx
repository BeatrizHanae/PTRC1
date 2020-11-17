import React, { useCallback } from 'react';
import { Container, Div1, DivImg, DivOrcamento, DivProd, DivTitulo } from './styles';
import prod7 from '../../assets/prod7.png';
import prod3 from '../../assets/prod3.png';
import Button from '../../components/Button';

const Carrinho = () => {
  return(
    
    <Container>
      <DivProd>
        <Div1>
          <h2>Produto</h2>
          <h2>Quantidade</h2>
          <h2>Preço</h2>
        </Div1>
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
          <p>
            <h4>
              Preço: 
            </h4>
            R$ 156.00
          </p>
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
          <p>
          <h4>
              Preço: 
            </h4>
            R$ 5732.00</p>
        </div>
      </DivProd>
     
      <DivOrcamento>
        <form>
          <label>
            Subtotal:
            <input type="number"/>
          </label>
        </form>
        <form>
        <label>
            Total:
            <input type="number"/>
          </label>
        </form>
        <Button>
          escolher+produtos
        </Button>
        <Button>
          cadastrar
        </Button>
      </DivOrcamento>
    
    </Container>
  

  )
}
export default Carrinho;
