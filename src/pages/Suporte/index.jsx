/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import IconAssistenciaTecnica from '../../assets/IconAssistenciaTecnica.png';
import IconManutencao from '../../assets/IconManutencao.png';
import IconTreinamento from '../../assets/IconTreinamento.png';
import {
  Container,
  DivAgrupa,
  DivAssistencia,
  DivBotao,
  DivManutencao,
} from './styles';
import Button from '../../components/Button';

const Suporte = () => {
  return (
    <Container>
      <DivBotao>
        <h1>Suporte</h1>
        <h2>Dúvidas frequentes</h2>
        <h3> Como posso comprar algum produto? </h3>
        <p>
          {' '}
          Para comprar um produto clique em "Produtos". Ao escolher o produto
          que deseja, clique em "Comprar". Para efetuar uma compra, você deverá
          estar logado como cliente. Para fazer login clique em "Login". Caso
          você ainda não possua cadastro em nosso site, clique em "Cadastro" e
          depois efetue login.{' '}
        </p>
        <h3>Quais são as formas de pagamento? </h3>
        <p>
          {' '}
          Você poderá adquirir os nossos produtos com: <br />
          <strong>Cartão de crédito:</strong> Ao finalizar a compra, nós iremos
          requisitar os seus dados de cartão.
          <br />
          <strong>Boleto bancário:</strong> Ao finalizar a compra, iremos gerar
          um boleto correspondente à sua compra. <br />
        </p>
        <h3>Qual é o prazo para entrega do produto? </h3>
        <p>
          {' '}
          O prazo de entrega do produto tem relação direta com o serviço de
          entrega escolhido na hora da compra. Ao efetuar a compra, você terá
          duas opções de entrega:
          <br /> <strong>Correios:</strong> receba em até 10 dias. <br />
          <strong>Entrega expressa: </strong> receba em até 3 dias{' '}
        </p>
        <h3>O que fazer se o produto estiver com um defeito? </h3>
        <p>
          {' '}
          Entre em contato direto conosco através do telefone disponibilizado
          logo abaixo em "Assistencia Técnica". Você deverá ter em mãos a nota
          fiscal. <br />
        </p>
      </DivBotao>

      <DivAgrupa>
        <DivManutencao>
          <img src={IconManutencao} alt="Icone da manutenção" />
          <h1>Manutenção</h1>
          <p>
            Para realizar a manutenção dos produtos baixe os nossos manuais.
          </p>
          <ul>
            <li> Peça o manual em contato@nihon.com</li>
            <a href="/Contato">
            <li>Ou clique aqui!</li>
            </a>
          </ul>

          <img src={IconTreinamento} alt="Icone de treinamento" />
          <h1>Treinamento</h1>
          <p>Solicite o treinamento em contato@nihon.com </p>
        </DivManutencao>

        <DivAssistencia>
          <img src={IconAssistenciaTecnica} alt="Icone da Assistencia" />
          <h1>Assistência técnica </h1>
          <p>Caso precise de assistência técnica,</p>
          <p>entre em contato para resolver seu problema:</p>
          <p>(61) 3877-2496</p>
        </DivAssistencia>
      </DivAgrupa>
      <h1> A jornada inteligente começa aqui!</h1>
    </Container>
  );
};

export default Suporte;
