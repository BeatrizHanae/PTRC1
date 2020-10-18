/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';

const Button = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Button;
