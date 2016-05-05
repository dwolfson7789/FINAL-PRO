import React from 'react';

const GetPlaces = React.createClass({

  handleName: function(e){
    this.props.nameInput(e);
  },

  render: function() {
    return(
      <div>
        <p>PLACES BY ME!: </p>
        <br />
        <button onClick={this.props.onSubmit}>Get All!</button>
        <hr></hr>
      </div>
    );
  }
});

export default GetPlaces;
