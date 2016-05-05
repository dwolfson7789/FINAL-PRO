import React from 'react';
import {Link} from 'react-router';
require("../utilities/Styles.css")




const FormComponent = React.createClass({
  render: function(){
    return(

    <div className="dropdown">
      <h3>Location:</h3>
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

<div className="formcomponent">
   <h3>FormComponent</h3>
   <input
            type="radio" name="chosen-radio"
            className="contacts-radios" value="see-all"
            onChange={this.props.updateValState}
          /> SEE ALL PLACES
          <br />

 <input
   type="radio" name="chosen-radio"
   className="contacts-radios" value="add-new"
   onChange={this.props.updateValState}
 /> ADD TIP TO A PLACE
 <br />

 <input
   type="radio" name="chosen-radio"
   className="contacts-radios" value="find-contact"
   onChange={this.props.updateValState}
 /> FIND PLACE
 <br />


 <input
   type="radio" name="chosen-radio"
   className="contacts-radios" value="update-contact"
   onChange={this.props.updateValState}
 /> UPDATE PLACE
 <br />

 <hr></hr>
          <button className="Submit" onClick={this.props.onSubmit} type='button'>Submit!</button>
          </div>
      </div>
    );
  }
});

export default FormComponent;
