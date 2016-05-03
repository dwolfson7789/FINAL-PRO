import React from 'react';
import axios from 'axios';
import Map from './Map';
// import the rest containers and shit.

const Home = React.createClass({
  getInitialState: function(){
    return {
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
      </div>
    )
  }
});
export default Home;

//
// //dont mind below this comment line.
//
//   render: function() {
//     return (
//       <div className="home">
//         <p>Home</p>
//         // <LocationContainer />
//         // <br></br>
//         // <RestaurantContainer />
//         // <br></br>
//         <Map />
//       </div>
//     )
//   }
// });
