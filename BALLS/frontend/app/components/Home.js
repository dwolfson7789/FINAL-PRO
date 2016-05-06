import React from 'react';
import axios from 'axios';

import Map from './Map';

const Home = React.createClass({
  getInitialState: function(){
    return (
      <div className='hello'>Hello World</div>

    )
  },
  render: function(){
    return(
      <div className="home">
        <p>Home</p>
        <Map />
      </div>
    )
  }
});
export default Home;
