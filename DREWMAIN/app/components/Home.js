import React from 'react';
import {Link} from 'react-router';
import Title from './Title';
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
        Window.map = L.mapbox.map('map', 'mapbox.outdoors').setView(([userLat, userLong]||[40.7527, -73.9772]), 15) .addControl(L.mapbox.geocoderControl('mapbox.places', {
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
            // coordinates here are in longitude, latitude order because
            // x, y is the standard for GeoJSON and many formats
            coordinates: [
               -73.9953862, 40.7400378
            ]
          },
          properties: {
            title: 'Flatiron Lounge',
            description: 'Place is popping here quick! - Syed (10:00PM || 5/6/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
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
            description: 'HAD BEST BURGER EVER TONIGHT- 20 MIN WAIT TIME Drew Wolfson (@ 8:30 PM || 5/9/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'restaurant'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.991812, 40.742282
            ]
          },
          properties: {
            title: 'Flatiron Hall',
            description: 'BEST Old Fashioned - Matt Jaikaran (@ 9:55 PM || 5/6/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bar'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.9968612, 40.7414556
            ]
          },
          properties: {
            title: 'Chipotle',
            description: 'Cultural appropriation at its finest - Syed (@ 4:55 PM || 5/5/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'restaurant'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.9895844, 40.7440456
            ]
          },
          properties: {
            title: 'DREAMDRY - Flatiron',
            description: 'Place is getting packed! (@ 9:00 PM || 6/9/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bar'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.9923696, 40.7412432
            ]
          },
          properties: {
            title: 'Museum of Sex',
            description: 'Boobs! - Ethan (@ 4:55 PM || 6/9/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'museum'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.9953128, 40.725008
            ]
          },
          properties: {
            title: 'Garfunkels',
            description: 'Cool vibe, worth checking out. - Matt Jaikaran (@ 9:55 PM || 4/25/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bar'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.9947093, 40.7364277
            ]
          },
          properties: {
            title: 'Casa Mono',
            description: '45 min wait w/ reservation, not cool. - Matt Jaikaran (@ 10:45 PM || 4/25/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'restaurant'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-74.005257, 40.7597365
            ]
          },
          properties: {
            title: 'XL Nightclub',
            description: 'Never fist pumped so hard in my life. Must go again. - Drew (@ 11:45 PM || 4/25/16)',
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/guides/an-open-platform/#simplestyle
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bar'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-74.0018714, 40.740768
            ]
          },
          properties: {
            title: 'Johnnys Bar',
            description: 'Cool dive bar, line to get in 40 mins. - Drew (@ 11:45 PM || 4/25/16)',
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bar'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-74.0019115, 40.7407674
            ]
          },
          properties: {
            title: 'Barn Joo',
            description: 'Doesnt take reservations, 2 hr wait. - Syed (@ 11:45 PM || 4/25/16)',
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'restaurant'
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-74.0019544, 40.7407668
            ]
          },
          properties: {
            title: 'Bar Veloce',
            description: 'Good drinks, always busy. Not much of a wait, 10 mins or so. - Drew (@ 11:45 PM || 4/25/16)',
            'marker-size': 'large',
            'marker-color': '#BE9A6B',
            'marker-symbol': 'bar'
          },
        }
      ])
      .addTo(Window.map);
      // L.mapbox.featureLayer().addTo(Window.map);
  // -73.9947093, 40.7364277
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
        <div id='map'></div>
        <div>{this.props.children}</div>
      </div>
    )
  }
});
export default Home;
