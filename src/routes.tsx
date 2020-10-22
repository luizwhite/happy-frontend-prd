import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import UserLogin from './pages/UserLogin';
import PasswordReset from './pages/PasswordReset';
import NewPassword from './pages/NewPassword';

  function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/app" component={OrphanagesMap} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/login/password-reset" component={PasswordReset} />
          <Route path="/login/new-password" component={NewPassword} />

          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
      </BrowserRouter>
    );
  }

  export default Routes;