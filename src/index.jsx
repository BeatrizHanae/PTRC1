import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Routes from './routes';
import GlobalCss from './styles/global';
import LinhasImg from './components/LinhasImg';
import serviceWorker from './serviceWorker';
import { AuthProvider } from './hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalCss />
      <BrowserRouter basename="/">
        <Menu />
        <Routes />
        <LinhasImg />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker();
