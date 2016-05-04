import React from 'react';
import {Link} from 'react-router';
require("../utilities/Styles.css")




const Nav = React.createClass({
  render: function(){
    return(
      <div className="dropdown">
      <h3>Fun by Location:</h3>
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

          <button className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</button>

      </div>
    );
  }
});

export default Nav;
