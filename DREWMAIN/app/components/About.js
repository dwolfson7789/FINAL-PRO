import React from 'react';
import {Link} from 'react-router';

const About = React.createClass({
  render: function(){
    return(
      <div className="group">
         <img className='drew' src="/app/utilities/About.png" />
          <div className="aboutBody">
          <br/>
            <br/>
            <hr/>
          <p>WE JUST TWO BAD ASS MOFOS TRYING TO BUILD SOME STUFF</p>
        </div>
          <h2> <Link to="/">Back to Home</Link></h2>
      </div>
    );
  }
});


export default About;
