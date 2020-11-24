import React from 'react';
import { Link } from 'react-router-dom';
import ImgSucesso from '../../assets/ImgSucesso.png';
import Button from '../../components/Button';
import { Conteiner, Divimg, Divtext } from './styles';

const Sucesso = () => {
  return(
    <Conteiner>
      <Divtext>
        <h1>Processo concluído com sucesso!</h1>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </Divtext>
      <Divimg>
        <img src={ImgSucesso} alt="" />
      </Divimg>  
    </Conteiner>
    
  )
}

export default Sucesso;
