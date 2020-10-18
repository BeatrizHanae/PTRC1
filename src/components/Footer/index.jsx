import React from "react"
import { Container}  from './styles'
import imgLogoImagem from './../../assets/logoImagem.png';
import imgLogoMarca from './../../assets/logoMarca.png';

const Footer = () =>{
  return ( 
  <Container>
    <img src={imgLogoImagem} alt="" />
    <img src={imgLogoMarca} alt="" />
  </Container> 
  )
}

export default Footer;
