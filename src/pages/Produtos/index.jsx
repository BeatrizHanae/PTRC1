import React, { useState } from 'react';
import prod1 from '../../assets/prod1.png';
import prod2 from '../../assets/prod2.png';
import prod3 from '../../assets/prod3.png';
import prod4 from '../../assets/prod4.png';
import prod5 from '../../assets/prod5.png';
import prod6 from '../../assets/prod6.png';
import prod7 from '../../assets/prod7.png';
import prod8 from '../../assets/prod8.png';
import prod9 from '../../assets/prod9.png';
import Button from '../../components/Button';
import { Div1, Div2 } from './styles';

const Produtos = () => {
  const [produtos,setProdutos] = useState([
    {
      name:'Leitor de Código de Barras Elgin Flash',
      preco:'R$ 500,00',
      img: prod7
    },
    {
      name:'Impressora de Etiquetas Zebra ZT230',
      preco:'R$ 5.752',
      img: prod3
    },
    {
      name:'Impressora de Etiquetas ',
      preco:'R$ 1.445',
      img: prod4
    },
    {
      name:'Impressora Fiscal Bematech ',
      preco:'R$ 2.044,32',
      img: prod5
    },
    {
      name:'Impressora Fiscal Daruma',
      preco:'R$ 2.732,00',
      img: prod6
    },
    {
      name:'Leitor de Código de Barras',
      preco:'R$ 1.732,00',
      img: prod8
    },
    {
      name:'Leitor de Código de Barras ',
      preco:'R$ 156',
      img: prod2
    },
    {
      name:'Bateria para Impressora',
      preco:'R$ 579.00',
      img: prod1
    },
    {
      name:'Leitor de Código de Barras ',
      preco:'R$ 1.364',
      img: prod9
    },
  ])
  return (

    <Div1>
      {
        produtos.map(produto =>(
          <Div2>
            <img src={produto.img} alt="foto do produto"/>
            <p>{produto.name}</p>
            <p>{produto.preco}</p>
            <Button>Comprar</Button>
          </Div2>
        ) ) 
      }
    </Div1>
  )
}
export default Produtos;
