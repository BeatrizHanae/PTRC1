import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Contato from '../pages/Contato';
import Suporte from '../pages/Suporte';
import ProdutoCadastro from '../pages/ProdutoCadastro';
import SuporteTreinamento from '../pages/SuporteTreinamento';
import SuporteManutencao from '../pages/SuporteManutencao';
import Produtos from '../pages/Produtos';
import PerfilFuncionario from '../pages/PerfilFuncionario';
import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route onlyPublic exact path="/login" component={Login} />
      <Route onlyPublic exact path="/cadastro" component={Cadastro} />
      <Route exact path="/Contato" component={Contato} />
      <Route exact path="/Suporte" component={Suporte} />
      <Route exact path="/Produtos" component={Produtos} />
      <Route isPrivate path="/ProdutoCadastro" component={ProdutoCadastro} admin />
      <Route isPrivate exact path="/SuporteTreinamento" component={SuporteTreinamento} />
      <Route isPrivate exact path="/SuporteManutencao" component={SuporteManutencao} />
      <Route isPrivate path="/PerfilFuncionario" component={PerfilFuncionario} admin/>
    </Switch>
  );
};

export default Routes;
