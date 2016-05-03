import React from 'react';
import axios from 'axios';

  const Map = React.createClass({
    <div>
      var map = (<Map center={position} zoom={13}>
       <TileLayer
         url="http://api.tiles.mapbox.com/v4/<mapid>/{z}/{x}/{y}.png?access_token=<'pk.eyJ1IjoiZHJld3dvbGZzb24xIiwiYSI6ImNpbnFoNHYyNjEwNTl1a2x5Mmw4Y2djZG8ifQ.B7cFyV9ktmmLD0y9bdUhIw'>"
         attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
       />
       <Marker position={position}>
         <Popup>
           <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
         </Popup>
       </Marker>
      </Map>);
    </div>
  });

export default Map;
