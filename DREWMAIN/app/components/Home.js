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
    })); L.mapbox.featureLayer()
      .setGeoJSON([
        {
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
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
               -73.9953862, 40.7400378
            ]
          },
          properties: {
            title: 'Flatiron Lounge',
            description: 'Place is popping here quick! POST TIME: 10:00PM  5/6/16',
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bar'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.9904278, 40.7445271
            ]
          },
          properties: {
            title: 'The Flatiron Room',
            description: 'BEST BURGER EVER',
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'restaurant'
          },
        },
      ])

      .addTo(Window.map);
      // L.mapbox.featureLayer().addTo(Window.map);
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
