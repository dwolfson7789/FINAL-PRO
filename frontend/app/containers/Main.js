import React from 'react';
import Title from '../components/Title';

const Main = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Title />
        <div className="main-container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Main;
