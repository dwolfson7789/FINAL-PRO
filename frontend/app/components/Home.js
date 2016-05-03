import React from 'react';
import axios from 'axios';
import LocationContainer from '../containers/LocationContainer';
import APIListsContainer from './APIEventsLists/APIListsContainer';

const Home = React.createClass({
  getInitialState: function(){
    return {
      <div className='hello'>Hello World</div>
      // ajaxreturn: []
      //uncomment this out
    }
  },
  ajaxRun: function(){
    //Run Google Places API for call
    //this too
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
