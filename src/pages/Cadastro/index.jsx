/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Container,
  DivFormCad,
  DivImgCad,
  DivTitulo,
} from './styles';
import IconCadastro from '../../assets/IconCadastro.png';
import Button from '../../components/Button'

const Cadastro = () => {
  return (
    <Container>
      <DivTitulo>
        <h1>Bem vindo!</h1>
        <h2>Cadastro</h2>
      </DivTitulo>
      <DivFormCad>
        <form>
          <label>
            Nome Completo:
            <input type="text" />
          </label>

          <label>
            Username:
            <input type="text" />
          </label>

          <label>
            CPF/CNPJ:
            <input type="text" />
          </label>

          <label>
            Senha:
            <input type="password" />
          </label>
          <Button>
            Finalizar
          </Button>
        </form>

      </DivFormCad>

      <DivImgCad>
        <img src={IconCadastro} alt="Icone do cadastro" />
      </DivImgCad>

      <h2>Oferecemos a maior linha de produtos para a sua empresa.</h2>
    </Container>
  );
};

export default Cadastro;
