/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';
import logoImagem from '../../assets/logoImagem.png';
import logoMarca from '../../assets/logoMarca.png';
import cartImage from '../../assets/cart.png';
import { Container } from './styles';
import { useAuth } from '../../hooks/useAuth';

const Menu = () => {
  const { data: token, signOut } = useAuth();
  return (
    <Container>
      <nav>
        <div>
          <img src={logoImagem} alt="Logo Imagem" />
          <img src={logoMarca} alt="Logo Marca" />
        </div>
        <ul>
          <li>
            <Link to="/Produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/Suporte">Suporte</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
          {!token && (
            <>
              <li>
                <Link to="/cadastro">Cadastro</Link>
              </li>
              <li>
                <a href="#">
                  <img src={cartImage} alt="Cart" />
                </a>
              </li>
              <li>
                <Link to="/login" className="login">
                  Login
                </Link>
              </li>
            </>
          )}
          {!!token && (
            <li>
              <button type="button" onClick={signOut}>
              <Link style={{background: "black"}} to="/" className="home">
                  Sair
                </Link>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Menu;
