import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CadastroFornecedor from './components/cadastrofornecedor/CadastroFornecedor';
import Login from './components/login/Login';

import CadastroGrupoFor from './components/CadastroGrupoFor/CadastroGrupoFor';
import CadastroGrupoVin from './components/CadastroGrupoVin/CadastroGrupoVin'
import CadastroRevista from './components/CadastroRevista/CadastroRevista';
import ConsultaGrupoVin from './components/ConsultaGrupoVin/ConsultaGrupoVin';
import ConsultaGrupoFor from './components/ConsultaGrupoFor/ConsultaGrupoFor';
import ConsultaRevista from './components/ConsultaRevista/ConsultaRevista';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>  
            <Route path = "/" exact component={Login}/>
            <Route path = "/cadastrofornecedor" component={CadastroFornecedor}/>
            <Route path = "/cadastrogrupofor" component={CadastroGrupoFor}/>
            <Route path = "/cadastrogrupovin" component={CadastroGrupoVin}/>
            <Route path = "/cadastrorevista" component={CadastroRevista}/>
            <Route path = "/consultagrupovin" component={ConsultaGrupoVin}/>
            <Route path = "/consultagrupofor" component={ConsultaGrupoFor}/>
            <Route path = "/consultarevista" component={ConsultaRevista}/>
            </Switch>
        </BrowserRouter>
    );
   
 }
