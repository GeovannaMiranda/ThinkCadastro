import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CadastroFornecedor from './components/cadastrofornecedor/CadastroFornecedor';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path = "/" exact component={CadastroFornecedor}>
               
               
            </Route>
          </Switch>
        </BrowserRouter>
    );
   
 }

