import React from 'react';
import axios from 'axios';
import LocationContainer from '../containers/LocationContainer';
import APIListsContainer from './APIEventsLists/APIListsContainer';
import Map from './Map';
// import the rest containers and shit.

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
        <Nav />
        <br></br>
        <APIListsContainer />
      </div>
    )
  }
});
export default Home;
