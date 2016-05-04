import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
// import Title from '../components/Title';
// import Map from '../components/Map';
// // import AddTipContainer from '../components/AddTipContainer';
// import AddRestaurant from '../components/AddRestaurant';
// import About from '../components/About';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />

    </Route>
  </Router>
);

export default routes;
