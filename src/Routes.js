import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";
import Midia from "./components/Midia";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/quem-somos-nos" component={About} />
      <Route path="/carreiras" component={Careers} />
      <Route path="/midia" component={Midia} />
      <Route path="/contato" component={Contact} />
      <Route path='*' component={NotFound} />
    </Switch>
  </ BrowserRouter>
);

export default Routes;
