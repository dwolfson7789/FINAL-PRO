import React from 'react';
require('../styles/Main.css');

const Title = React.createClass({
  render: funtion(){
    return(
      <div>
        <h1 className='h1'>Final Project</h1>
        <img className='titlePic' src='http://i.makeagif.com/media/11-24-2015/asxvo7.gif' />
        <p>Suh dudes, it's Matt and Drew coming fur ur bitch ass.</p>
      </div>
    )
  }
});


export default Title;
