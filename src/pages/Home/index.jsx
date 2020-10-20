import React, { useState } from 'react';
import { FiCpu, FiSettings } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { QuemSomos, SectionOne, Produtos, Jornada } from './styles';
import Button from '../../components/Button';
import imgBermatec from '../../assets/bematech.png';
import imgDaruma from '../../assets/daruma.png';
import imgBelgin from '../../assets/elgin.png';
import imgZebra from '../../assets/zebra.png';


const Home = () => {
  const [products] = useState([
    {
      titulo: 'Produtos',
      icon: FiCpu,
      description1:'-  Comercialização de equipamentos para automação comercial.',
      description2:'- Consultoria para otimização da operação indicando o tipo de automação mais indicado. ',
      description3:'',
      description4:'',
      link: '#',
    },
    {
      titulo: 'Serviços',
      icon: FiSettings,
      description1:'- Treinamento na utilização dos hardwares, quando necessário. ',
      description2:'- Atendimento On Site. ',
      description3:'- Atendimento On Site. ', 
      description4:'- Contrato de Manutenção de Hardware. ',     
      link: '#',
    },
    {
      titulo: 'Contato',
      icon: FaWhatsapp,
      description1:'-E-mail ',
      description2:'-Redes sociais',
      description3:'-Localização',
      description4:'-Telefone ',
      link: '#',
    },
  ]);

  return (
    <>
      <SectionOne>
        <div className="content">
          Oferecemos a maior linha de equipamentos para a sua empresa
        </div>
        <div className="flex" />
      </SectionOne>

      <QuemSomos>
        <h1> QUEM SOMOS NÓS</h1>
        <p>
          Com tanta experiência profissional conseguimos entender perfeitamente as necessidades de sua empresa.
          Com ferramentas ideais para gestão completa do seu negócio, integrando vendas,
          estoque e financeiro.Soluções que trazem economia e agilidade para seu empreendimento.
        </p>
        <p>
          A AUPRIS proporciona as melhores soluções do mercado que resultam numa empresa ágil,
          com processos bem controlados, mantendo sempre as informações precisas e completas.
          Entre em contato e descubra tudo que podemos fazer por você.
        </p>
      </QuemSomos>
      <Produtos>
        {products.map(product => (
          <div key={product.titulo}>
            <product.icon size={40} />
            <h2>{product.titulo}</h2>
            <p>{product.description1}</p>
             <p>{product.description2}</p>
             <p>{product.description3}</p>
             <p>{product.description4}</p>
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
    </>
  );
};

export default Home;
