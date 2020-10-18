import React, { useState } from 'react';
import { FiCpu, FiSettings } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Menu from '../../components/Menu';
import { QuemSomos, SectionOne, Produtos, Jornada } from './styles';
import Button from '../../components/Button';
import imgBermatec from './../../assets/bematech.png';
import imgDaruma from './../../assets/daruma.png';
import imgBelgin from './../../assets/elgin.png';
import imgZebra from './../../assets/zebra.png';
import Footer from '../../components/Footer';


const Home = () => {
  const [products] = useState([
    {
      titulo: 'Produtos',
      icon: FiCpu,
      description: 'Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um',
      link: '#',
    },
    {
      titulo: 'Serviços',
      icon: FiSettings,
      description: 'Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um',
      link: '#',
    },
    {
      titulo: 'Contato',
      icon: FaWhatsapp,
      description: 'Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um',
      link: '#',
    },
  ]);

  return (
    <>
      <Menu />
      <SectionOne>
        <div className="content">
          Oferecemos a maior linha de
          equipamentos
          para a sua empresa
        </div>
        <div className="flex" />
      </SectionOne>

      <QuemSomos>
        <h1> QUEM SOMOS NÓS</h1>
        <p>
          Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500,
          als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese
          durcheinander warf um ustrie.
          Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500,
          als ein unbekannter Schriftsteller ei
        </p>
      </QuemSomos>
      <Produtos>
        {products.map((product) => (
          <div key={product.titulo}>
            <product.icon size={40} />
            <h2>
              {product.titulo}
            </h2>
            <p>
              {product.description}
            </p>
            <Button>Saiba Mais</Button>
          </div>
        ))}
      </Produtos>
      <Jornada>
        <h1>A jornada inteligente na automação comercial!</h1>
        <div>
          <img src={imgBermatec} alt="" />
          <img src={imgDaruma} alt="" />
          <img src={imgBelgin} alt="" />
          <img src={imgZebra} alt="" />

        </div>
      </Jornada>
      <Footer/>
    </>
  );
};

export default Home;
