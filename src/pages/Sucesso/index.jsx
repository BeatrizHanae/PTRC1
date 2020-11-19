import React, { useCallback } from 'react';
import ImgSucesso from '../../assets/ImgSucesso.png';
import Button from '../../components/Button';
import { Conteiner, Divimg, Divtext } from './styles';

const Sucesso = () => {
  return(
    <Conteiner>
      <Divtext>
        <h1>Processo concluído com sucesso!</h1>
        <Button>Voltar</Button>
      </Divtext>
      <Divimg>
        <img src={ImgSucesso} alt="" />
      </Divimg>  
    </Conteiner>
    
  )
}

export default Sucesso;
