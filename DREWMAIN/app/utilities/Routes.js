import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Title from '../components/Title';
import Main from '../components/Main';
import Home from '../components/Home';
// import Map from '../components/Map';
// // import AddTipContainer from '../components/AddTipContainer';
// import AddRestaurant from '../components/AddRestaurant';
// import About from '../components/About';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
<<<<<<< HEAD
      <IndexRoute component={Title} />
      // <Route path='AddTip' component={AddTip} >
      //   <Route path='/AddTip/:id'  />
      </Route>

      // <Route path='AddRestaurant' component={AddRestaurant} />
      // <Route path='About' component={About} />



=======
      <IndexRoute component={Home} />
  
>>>>>>> a28427b0e6d23dd658bb64a539996a25dccfdcfc
    </Route>
  </Router>
);

export default routes;
