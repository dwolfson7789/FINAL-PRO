import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Title from '../components/Title';
import Main from '../components/Main';
import Home from '../components/Home';
import AddTip from '../components/AddTip';
import About from '../components/About';
import Nav from '../components/Nav';


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Title} />
      <IndexRoute component={Home} />
      </Route>
        <Route path='About' component={About} />
        <Route path='AddTip' component={AddTip} >
      <Route path='/AddTip/:id'  />
  </Route>
  </Router>
);

export default routes;
