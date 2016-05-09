import React from 'react';
import axios from 'axios';
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
          <p>What's the Sitch? The Sitch is now! We provide real-time user updates finding out the situation of a bar, restaurant, or museum you would like to visit.</p>
          <br></br>
          <p>
            Matthew Jaikaran on <a href="http://www.linkedin.com/in/mattjaikaran">LinkedIn</a>
            <br></br>
            Drew Wolfson on <a href="https://www.linkedin.com/in/drew-wolfson-80950153">LinkedIn</a>
          </p>

        </div>
          <h2> <Link to="/">Back to Home</Link></h2>
      </div>
    );
  }
});
export default About;
