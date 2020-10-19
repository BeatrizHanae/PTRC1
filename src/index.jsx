import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Routes from './routes';
import GlobalCss from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCss />
    
    <BrowserRouter basename="/">
      <Menu />
      <Routes />
      <Footer />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root'),
);
