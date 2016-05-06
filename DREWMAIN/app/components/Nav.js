import React from 'react';
import {Link} from 'react-router';
// import AddRestaurant from './AddRestaurant';
import About from './About';



const Nav = React.createClass({
  render: function(){
    return(
      <div className='nav-bar'>
        <nav className="nav">
         <h3 className='active'><a href='#'><span>HOME</span></a></h3>
         <Link to="/AddTip"><h3><span>ADD TIP</span></h3></Link>
         <Link to="/About"><h3><span>ABOUT</span></h3></Link>
         <h3 className='last'><a href='atlmv077@aim.com'><span>CONTACT</span></a></h3>
        </nav>
      </div>
    );
  }
});

export default Nav;
