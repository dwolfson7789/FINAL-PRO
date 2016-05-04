import React from 'react';
import Home from './Home';
// require("../utilities/Styles.css")

const Main = React.createClass({
  render: function(){
    return(
      <div className="main-container">
        {this.props.children}
      </div>
    )
  }
});

export default Main;
