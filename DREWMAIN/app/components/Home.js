import React from 'react';
import {Link} from 'react-router';
import Title from './Title';
import FormComponent from './FormComponent';
import About from './About';
// import GetPlaces from './GetAll';
import Nav from './Nav';
require("../utilities/Styles.css");


const Home  = React.createClass({


  componentWillMount: function(){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("user latitude" + position.coords.latitude);
        console.log("user longitude" + position.coords.longitude);
        let userLat = position.coords.latitude;
        let userLong = position.coords.longitude;
        L.mapbox.accessToken = 'pk.eyJ1IjoiZHJld3dvbGZzb24xIiwiYSI6ImNpbnFoNHYyNjEwNTl1a2x5Mmw4Y2djZG8ifQ.B7cFyV9ktmmLD0y9bdUhIw';
        Window.map = L.mapbox.map('map', 'mapbox.emerald').setView(([userLat, userLong]||[40.7527, -73.9772]), 17) .addControl(L.mapbox.geocoderControl('mapbox.places', {
        autocomplete: true

    })); L.mapbox.featureLayer({
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [
         userLong,
         userLat
       ]
     },
        properties: {
         title: 'You are here',
         'marker-size': 'large',
         'marker-color': '#f86767',
         'marker-symbol': 'star'
      },

      }).addTo(Window.map);
      L.mapbox.featureLayer({
        type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
           -73.9953862, 40.7400378 
        ]
    },
    properties: {
        title: 'Peregrine Espresso',
        description: '1718 14th St NW, Washington, DC',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'cafe'
    }
        }).addTo(Window.map);
  //

  //
  //
  // L.mapbox.featureLayer({
  //     type: 'Feature',
  //     geometry: {
  //       type: 'Point',

  //
  //     },
  //     properties: {
  //       title: 'Restaurant',
  //       'marker-size': 'large',
  //       'marker-color': 'red',
  //       'marker-symbol': 'star'
  //     }
  //   }).addTo(Window.map)
  })
},
  // updateMap:function(){
  //   more mapbox code in here to drop antoehr makrer
  // },
  render: function(){

    return(
      <div>
        <Title />
        <Nav />
        <FormComponent updateValState={this.updateValState}
        />
        <div id='map'></div>
        <div>{this.props.children}</div>
      </div>
    )
  }
});

export default Home;
