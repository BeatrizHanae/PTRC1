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
import Orcamento from '../pages/Orcamento';
import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route onlyPublic exact path="/Login" component={Login} />
      <Route onlyPublic exact path="/Cadastro" component={Cadastro} />
      <Route exact path="/Contato" component={Contato} />
      <Route exact path="/Servicos" component={Suporte} />
      <Route exact path="/Produtos" component={Produtos} />
      <Route isPrivate path="/ProdutoCadastro" component={ProdutoCadastro} admin />
      <Route isPrivate path="/SuporteTreinamento" component={SuporteTreinamento} />
      <Route isPrivate path="/SuporteManutencao" component={SuporteManutencao} />
      <Route isPrivate path="/PerfilFuncionario" component={PerfilFuncionario} admin />
      <Route isPrivate path="/PerfilCliente" component={PerfilCliente} />
      <Route exact path="/Sucesso" component={Sucesso} />
      <Route exact path="/Fracasso" component={Fracasso} />
      <Route exact path="/Orcamento" component={Orcamento} />

    </Switch>
  );
};

export default Routes;
