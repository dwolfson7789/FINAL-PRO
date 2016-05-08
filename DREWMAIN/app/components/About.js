import React from 'react';
import {Link} from 'react-router';

const About = React.createClass({
  render: function(){
    return(
      <div className="group">
         <img className='groupPic' src="/app/utilities/drew.jpg" />
          <img className='groupPic' src="/app/utilities/matt.jpg" />
      <p>WE JUST TWO BAD ASS MOFOS TRYING TO BUILD SOME STUFF</p>

      </div>
    );
  }
});


export default About;
