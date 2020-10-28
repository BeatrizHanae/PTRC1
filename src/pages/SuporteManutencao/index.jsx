import React from 'react';
import { DivFormT ,
        Container,
        DivImgT
        } from './styles';
import ImgTreinamento from '../../assets/ImgTreinamento.png';
import Button from '../../components/Button';

const SuporteTreinamento = () => {
  return( 
    <Container>

    <DivImgT>
      <h2>
        Manutenção
      </h2>
      <div>
      <h3> 
        Agendar manutenção:
      </h3>
        <input type="date"/>
        <input type="time"/>
        <img src={ImgTreinamento} alt="" />
      </div>
    </DivImgT>
    
    <DivFormT>
      <form>
        <label>
          Cliente:
          <input type="text"/>
        </label>
        <label>
          Nome Fantasia/ da Empresa :
          <input type="text"/>
        </label>
        <label>
          CPF/CNPJ :
          <input type="text"/>
        </label>
        <label>
           Descrição/ Qual equipamento :
          <input type="text"/>
        </label>
      </form>
      
    </DivFormT>
    <Button>
        Contratar
      </Button>
    </Container>
   
    
  );
};
export default SuporteTreinamento;
