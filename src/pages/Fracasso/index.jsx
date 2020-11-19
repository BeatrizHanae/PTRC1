import React, { useCallback } from 'react';
import ImgFracasso from '../../assets/ImgFracasso.png';
import Button from '../../components/Button';
import { Conteiner, Divimg, Divtext } from './styles';

const Fracasso = () => {
  return(
    <Conteiner>
      <Divtext>
        <h1>Ops! Algo está errado.</h1>
        <p>Tente novamente.</p>
        <Button>Voltar</Button>
      </Divtext>
      <Divimg>
        <img src={ImgFracasso} alt="" />
      </Divimg>  
    </Conteiner>

  )
}

export default Fracasso;
