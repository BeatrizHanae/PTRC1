import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import GlobalCss from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCss />
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
