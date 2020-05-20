import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Views/Home";
import About from "./components/Views/About";
import Careers from "./components/Views/Careers";
import Midia from "./components/Views/Midia";
import Contact from "./components/Views/Contact";
import PersonalCredit from "./components/Views/PersonalCredit";
import PersonalInvesting from "./components/Views/PersonalInvesting";
import PersonalRenegotiation from "./components/Views/PersonalRenegotiation";
import BusinessCredit from "./components/Views/BusinessCredit";
import BusinessInvesting from "./components/Views/BusinessInvesting";
import BusinessRenegotiation from "./components/Views/BusinessRenegotiation";
import BusinessPayroll from "./components/Views/BusinessPayroll";
import NotFound from "./components/Views/NotFound";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/quem-somos-nos" component={About} />
      <Route path="/carreiras" component={Careers} />
      <Route path="/midia" component={Midia} />
      <Route path="/contato" component={Contact} />
      <Route path="/para-voce/credito" component={PersonalCredit} />
      <Route path="/para-voce/investimentos" component={PersonalInvesting} />
      <Route path="/para-voce/renegociacao" component={PersonalRenegotiation} />
      <Route path="/para-sua-empresa/credito" component={BusinessCredit} />
      <Route path="/para-sua-empresa/investimentos" component={BusinessInvesting} />
      <Route path="/para-sua-empresa/renegociacao" component={BusinessRenegotiation} />
      <Route path="/para-sua-empresa/folha-de-pagamento" component={BusinessPayroll} />
      <Route path='*' component={NotFound} />
    </Switch>
  </ BrowserRouter>
);

export default Routes;
