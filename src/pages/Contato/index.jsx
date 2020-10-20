import React from 'react';
import {
  Container,
  DivFormCTT,
  DivIcon,
  DivImgCTT,
  Divmapa,
} from './styles';
import IconEmail from '../../assets/IconEmail.png';
import IconFacebook from '../../assets/IconFacebook.png';
import IconInstagram from '../../assets/IconInstagram.png';
import IconLocalizacao from '../../assets/IconLocalizacao.png';
import IconTelefone from '../../assets/IconTelefone.png';
import IconWhatsapp from '../../assets/IconWhatsapp.png';
import ImgMapa from '../../assets/ImgMapa.png';
import Button from '../../components/Button';
import LinhasImg from '../../components/LinhasImg';

const contatos = [
  {
    img: IconWhatsapp,
    meio: "(61) 98130-0873"
  },
  {
    img: IconEmail,
    meio: "contato@nihon.com"
  },
  {
    img: IconTelefone,
    meio: "(61) 3877-2496"
  },
  {
    img: IconFacebook,
    meio: "@nihon"
  },
  {
    img: IconInstagram,
    meio: "@nihon"
  },

]

const Contato = () => {

  return (
    <Container>
      <DivFormCTT>
        <form>
          <label>
            Nome e Sobrenome:
                <input type="text" />
          </label>

          <label>
            Email:
            <input type="text" />
          </label>

          <label>
            Sua mensagem:
                <input type="text" />
          </label>

          <label>
            Telefone:
                <input type="text" />
          </label>
        </form>
        <Button>
          Enviar
        </Button>
      </DivFormCTT>

      <DivImgCTT>
        {contatos.map(contato => (
          <DivIcon>
            <img src={contato.img} alt="Icone" />
            <p>  {contato.meio} </p>
          </DivIcon>))}
        <DivIcon>
          <img src={IconLocalizacao} alt="Icone localização" />
          <Divmapa>
            <img src={ImgMapa} alt="Icone" />
          </Divmapa>
        </DivIcon>
        <p>
          Endereço: SCRN 712/713
          <p>
           Bloco C, Loja 52
            </p> 
            <p>
              Brasília - DF
            </p> 
        </p>
      </DivImgCTT>

    </Container>
  );
};

export default Contato;
