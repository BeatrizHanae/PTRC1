/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';
import logoImagem from '../../assets/logoImagem.png';
import logoMarca from '../../assets/logoMarca.png';
import cartImage from '../../assets/cart.png';
import { Container } from './styles';
import { useAuth } from '../../hooks/useAuth';

const Menu = () => {
  const { data, signOut } = useAuth();
  console.log(data)
  return (
    <Container>
      <nav>
        <div>
          <img src={logoImagem} alt="Logo Imagem" />
          <img src={logoMarca} alt="Logo Marca" />
        </div>
        <ul>      
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Produtos">Produtos</Link>
          </li>
          {!data && (
            <>
              <li>
              <Link to="/Suporte">Suporte</Link>
              </li>
              <li>
               <Link to="/Contato">Contato</Link>
              </li>
              <li>
                <Link to="/Cadastro">Cadastro</Link>
              </li>
              <li>
                <a href="/Orcamento">
                  <img src={cartImage} alt="Cart" />
                </a>
              </li>
              <li>
                <Link to="/Login" className="login">
                  Login
                </Link>
              </li>
            </>
          )}
          {data && data.token &&!data.ADMIN &&(
            <>
            <li>
              <Link to="/Suporte">Suporte</Link>
            </li>
            <li>
               <Link to="/Contato">Contato</Link>
            </li>
            <li>
                <Link to="/Orcamento" >Orçamento</Link>
            </li>
            <li>
                <Link to="/SuporteManutencao">
                  Manutenção
                </Link>
              </li>
              <li>
                <Link to="/SuporteTreinamento" >
                  Treinamento
                </Link>
              </li>
              <li>
                <Link to="/PerfilCliente" >
                  PerfilC
                </Link>
              </li>
              <button type="button" onClick={signOut}>
              <Link style={{background: "black"}} to="/" className="home">
                  Sair
                </Link>
              </button>
            </>
          )}
          {!!data && data.token && data.ADMIN &&(
              <>
              <li>
                <Link to="/ProdutoCadastro" >
                  Cadastrar
                </Link>
              </li>
              <li>
               <Link to="/PerfilFuncionario" >
                PerfilF
                </Link>
              </li>
              <li>
                <button type="button" onClick={signOut}>
                 <Link style={{background: "black"}} to="/" className="home">
                  Sair
                 </Link>
                </button>
              </li>
            </>
          )} 
        </ul>
      </nav>
    </Container>
  );
};

export default Menu;
