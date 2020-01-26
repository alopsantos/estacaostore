import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Venda from './pages/Venda';
import Cancelamento from './pages/Cancelamento';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Dashboard" exact component={Dashboard} />
                <Route path="/Venda" exact component={Venda} />
                <Route path="/Cancelamento" exact component={Cancelamento} />
            </Switch>
        </BrowserRouter>
    );
}