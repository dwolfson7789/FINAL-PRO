import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
<<<<<<< HEAD

import Title from '../components/Title';
=======
>>>>>>> 055475162e907ec833646c1cbb801cddc3855f8e
import Main from '../components/Main';
import AddTip from '../components/AddTip';
import About from '../components/About';
import Nav from '../components/Nav';

<<<<<<< HEAD
=======
import Title from '../components/Title';
import Home from '../components/Home';

>>>>>>> 055475162e907ec833646c1cbb801cddc3855f8e

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Title} />
      <IndexRoute component={Home} />
<<<<<<< HEAD
      </Route>
        <Route path='About' component={About} />
        <Route path='AddTip' component={AddTip} >
      <Route path='/AddTip/:id'  />
  </Route>
=======
        <Route path='About' component={About} />
        <Route path='AddTip' component={AddTip} >
          <Route path='/AddTip/:id'  />
      </Route>

    </Route>

>>>>>>> 055475162e907ec833646c1cbb801cddc3855f8e
  </Router>
);

export default routes;
