import React, { useState } from 'react';
import search from '../../assets/search.png';
import Button from '../../components/Button';
import { Container, Div1, Div2, DivBusca, DivPrimeira } from './styles';
import {todosProdutos} from '../../services/ClientServices'
import { useEffect } from 'react';


const Produtos = () => {
  const [busca, setBusca] = useState('');
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    todosProdutos().then(prods => setProdutos (prods))
  },[])
  
  return (
  <Container>
    <DivPrimeira>
    <h1>Produtos</h1>
    <DivBusca>
          <img src={search} alt="pesquisa" />
          <input
            type="text"
            id="txtBusca"
            onChange={e => setBusca(e.target.value)}
            placeholder="...Buscar produto"
          />
        </DivBusca>
    </DivPrimeira>
  
    <Div1>
      {produtos 
      .filter(produto => produto.NOME.toLowerCase().includes(busca.toLowerCase()),)
      .map(produto => (
        <Div2>
          <img src={produto.IMAGEM} style={{maxWidth:"100%"}} alt="foto do produto" />
          <p>{produto.NOME}</p>
          <p>{produto.VALOR}</p>
          <Button>Comprar</Button>
        </Div2>
      ))}
    </Div1>
    <h2>A jornada inteligente na automação comercial!</h2>
  </Container>
    
  );
};
export default Produtos;
