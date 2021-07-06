import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CadastroFornecedor from './components/cadastrofornecedor/CadastroFornecedor';
import Login from './components/login/Login';
import MenuSuperior from './components/menuSuperior/MenuSuperior';
import CadastroRevista from './components/CadastroRevista/CadastroRevista';
import CadastroGrupoVin from './components/CadastroGrupoVin/CadastroGrupoVin';
import ConsultaRevista from './components/ConsultaRevista/ConsultaRevista';
import ConsultaGrupoVin from './components/ConsultaGrupoVin/ConsultaGrupoVin';
import ConsultaGrupoFor from './components/ConsultaGrupoFor/ConsultaGrupoFor';
import login from './components/login/Login';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            
            {/*<Route path = "/cadastrofornecedor" exact component={CadastroFornecedor}/>*/}
            {/*<Route path = "/" exact component={CadastroRevista}/>*/}
            {/*<Route path = "/" exact component={CadastroGrupoVin}/>*/}
            {/*<Route path = "/" exact component={ConsultaGrupoVin} */}
            {/*<Route path = "/" exact component={ConsultaGrupoFor}*/}
            {/*<Route path = "/" exact component={ConsultaRevista}/>*/}
            <Route path = "/" exact component={Login}/>
            <Route path = "/menusuperior" component={MenuSuperior}/>
            

          </Switch>
        </BrowserRouter>
    );
   
 }
