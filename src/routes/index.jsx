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
import Carrinho from '../pages/Carrinho';
import PerfilFuncionario from '../pages/PerfilFuncionario';
import PerfilCliente from '../pages/PerfilCliente';
import Sucesso from '../pages/Sucesso';
import Fracasso from '../pages/Fracasso';
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
      <Route exact path="/ProdutoCadastro" component={ProdutoCadastro} />
      <Route exact path="/SuporteTreinamento" component={SuporteTreinamento} />
      <Route exact path="/SuporteManutencao" component={SuporteManutencao} />
      <Route exact path="/Carrinho" component={Carrinho} />
      <Route exact path="/PerfilFuncionario" component={PerfilFuncionario} />
      <Route exact path="/PerfilCliente" component={PerfilCliente} />
      <Route exact path="/Sucesso" component={Sucesso} />
      <Route exact path="/Fracasso" component={Fracasso} />

    </Switch>
  );
};

export default Routes;
