/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logoImagem from '../../assets/logoImagem.png';
import logoMarca from '../../assets/logoMarca.png';
import cartImage from '../../assets/cart.png';
import { Container } from './styles';

const Menu = () => (
  <Container>
    <nav>
      <div>
        <img src={logoImagem} alt="Logo Imagem" />
        <img src={logoMarca} alt="Logo Marca" />
      </div>

      <ul>
        <li>
          <a href="#">
            Produtos
          </a>
        </li>
        <li>
          <a href="#">
            Suporte
          </a>
        </li>
        <li>
          <a href="#">
            Contato
          </a>
        </li>
        <li>
          <a href="#">
            <img src={cartImage} alt="Cart" />
          </a>
        </li>
        <li>
          <a href="#" className="login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Menu;
