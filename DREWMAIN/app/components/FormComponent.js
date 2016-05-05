import React from 'react';
import {Link} from 'react-router';
require("../utilities/Styles.css")




const FormComponent = React.createClass({
  render: function(){
    return(

    <div className="dropdown">
    <br/>
      <h3>LOCATION:</h3> <br/>
      <br/>
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
     <br />
     <br />
      <br />

<div className="formcomponent">
   <input type="radio" name="chosen-radio"
            className="places-radio" value="museum"
            onChange={this.props.updateValState}
          /> <h2> MUSEUMS</h2>
          <br />


<input type="radio" name="chosen-radio"
   className="places-radio" value="restaurant"
   onChange={this.props.updateValState}
 /> <h2> RESTAURANTS </h2>
 <br />


  <input type="radio" name="chosen-radio"
   className="places-radio" value="bar"
   onChange={this.props.updateValState}
 /> <h2> BARS </h2>
 <br />

          <button className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</button>
          </div>
      </div>
    );
  }
});

export default FormComponent;
