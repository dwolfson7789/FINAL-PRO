import React from 'react';
import {Link} from 'react-router';
// import AddRestaurant from './AddRestaurant';
import About from './About';



const Nav = React.createClass({
  render: function(){
    return(
      <div className='cssmenu'>
        <nav className="nav">
         <h3 className='active'><a href='#'><span>HOME</span></a></h3>
         <Link to="/AddTip"><h3><span>ADD TIP</span></h3></Link>
         <Link to="/About"><h3><span>ABOUT</span></h3></Link>
         <a href='mailto:atlmv077@aim.com?' Subject="WHATS%THE%SITCH?" target="_top"><span>CONTACT</span></a>

        </nav>
      </div>
    );
  }
});

export default Nav;
