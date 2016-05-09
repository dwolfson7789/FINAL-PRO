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
         <a href='atlmv077@aim.com'><span>CONTACT</span></a>
           <label>
          <select onChange={this.props.onChangeLocation}>
          <option placeholder='select location' value=''>select location</option>
          <option value='Chelsea'>Chelsea</option>
          <option value='Financial District'>Financial District</option>
          <option value='Flatiron'>Flatiron</option>
          <option value='Hells Kitchen'>Hells Kitchen</option>
          <option value='Meatpacking'>Meatpacking</option>
          <option value='Midtown East'>Midtown East</option>
          <option value='Soho'>Soho</option>
          <option value='Tribeca'>Tribeca</option>
          <option value='Upper East'>Upper East</option>
          <option value='Upper West'>Upper West</option>
        </select>
          </label>
        </nav>
      </div>
    );
  }
});

export default Nav;
