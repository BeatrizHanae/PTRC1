import React from 'react';
import { Link } from 'react-router-dom';
import ImgFracasso from '../../assets/ImgFracasso.png';
import Button from '../../components/Button';
import { Conteiner, Divimg, Divtext, ButtonVolta } from './styles';

const Fracasso = () => {
  return(
    <Conteiner>
      <Divtext>
        <h1>Ops! Algo está errado.</h1>
        <p>Tente novamente.</p>
        <Link to ="/">
          <Button>Voltar</Button>
        </Link> 
      </Divtext>
      <Divimg>
        <img src={ImgFracasso} alt="" />
      </Divimg>  
    </Conteiner>

  )
}

export default Fracasso;
