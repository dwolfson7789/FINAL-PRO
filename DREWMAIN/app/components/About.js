import React from 'react';
import {Link} from 'react-router';
import Title from './Title';
import Nav from './Nav';

const About = React.createClass({
  render: function(){
    return(

      <div className="group">
        <Title></Title>
            <Nav></Nav>
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
                   Drew Wolfson on <a href="https://www.linkedin.com/in/drew-wolfson-80950153"><img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi795S7t83MAhVBwj4KHa7lBRkQjBwIBA&url=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fbettericons%2F354%2Flinkedin-circle-128.png&bvm=bv.121421273,d.dmo&psig=AFQjCNF-aqZw4jvJdMFNlWGA6k0XpiDFHw&ust=1462898423262973"/>/a> </a>
                 </p>
       ​
               </div>
                 <h2> <Link to="/">Back to Home</Link></h2>
             </div>
           );
         }
       });
       export default About;
