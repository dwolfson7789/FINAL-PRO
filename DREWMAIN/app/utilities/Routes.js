import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import AddTip from '../components/AddTip';
import About from '../components/About';
import Nav from '../components/Nav';
import Title from '../components/Title';
import Home from '../components/Home';


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Title} />
      <IndexRoute component={Home} />
        <Route path='About' component={About} />
        <Route path='AddTip' component={AddTip} >
          <Route path='/AddTip/:id'  />
      </Route>

    </Route>

  </Router>
);

export default routes;
