import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Title from '../components/Title';
import Main from '../components/Main';
import Home from '../components/Home';


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Title} />
      <IndexRoute component={Home} />
      </Route>
  </Router>
);

export default routes;
