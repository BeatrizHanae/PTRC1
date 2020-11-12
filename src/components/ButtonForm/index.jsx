/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';

const ButtonForm = ({ children, ...rest }) => (
  <Container type="submit" {...rest}>
    {children}
  </Container>
);

export default ButtonForm;
