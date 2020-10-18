import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalCss from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCss />
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
