import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InserirVenda from './pages/espetinhos/vendas/vendas.js'
import Main from './pages/espetinhos/principal/principal.js'

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path ="/inicial" component={Main}/>

        <Route exact path ="/inserirVenda" component={InserirVenda}/>
     

        </Switch>
    </BrowserRouter>
)

export default Routes;