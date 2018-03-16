import React from 'react';
import { Route } from 'react-router';
import Search from './components/Search';

const routes = (
  <Route path="/(:query)" component={Search} />
);

export default routes;
