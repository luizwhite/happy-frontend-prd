/* eslint-disable object-curly-newline */
import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DashboardPending from '../pages/DashboardPending';
import DeleteOrphanageScreen from '../pages/DeleteOrphanageScreen';

const AdminRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Redirect from="/login" to="/dashboard" />
      <Redirect from="/app" to="/dashboard" />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/delete/:id" component={DeleteOrphanageScreen} />
      <Route path="/dashboard/pending" component={DashboardPending} />
    </Switch>
  </BrowserRouter>
);

export default AdminRoutes;
