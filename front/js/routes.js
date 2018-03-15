import React from 'react';
import { Route } from 'react-router';
import HelloWorld from './components/HelloWorld';

function onEnterApp() {

}

const routes = (
  <Route path="/" component={HelloWorld} onEnter={onEnterApp}>
    <Route path="/search(/:query)" component={HelloWorld} />
  </Route>
);

export default routes;
