import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/quem-somos-nos" component={About} />
      <Route path='*' component={NotFound} />
    </Switch>
  </ BrowserRouter>
);

export default Routes;
