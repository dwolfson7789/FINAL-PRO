import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
var url = 'http://localhost:3000/sitches/new.json';

// function AddTip(props) {
const AddTip = React.createClass({

  getInitialState: function() {
    return {
      ajaxReturn: [],
      searchID: this.props.params.id,
      author: '',
      tip: '',
      message: ''
    };
  },
  onChangeAuthor: function(e) {
    console.log('onChangeAuthor was called!');
    this.setState({
      author: e.target.value
    })
  },
  onChangeTip: function(e) {
    console.log('onChangeTip was called!');
    this.setState({
      tip: e.target.value
    })
  },
  onSubmitTip: function(e) {
    e.preventDefault();
    console.log("onSubmitTip was called!");

    var addTip = {
      searchID: this.state.searchID,
      author: this.state.author,
      tip: this.state.tip
    };

    console.log('restaurantTip:', addTip);

    axios.put(url, addTip)
    .then(function(response){
      console.log("Response.data:", response.data);
      this.setState({
        //ajaxReturn: response.data
        message: 'Thank you for the tip!'
      });
    }.bind(this))
    .catch(function(err){
      console.warn('Error');
      return err;
    })
  },
  render: function(){
    console.log(("AddTip this.props.params.id:", this.props.params.id));
    //console.log('params: ', this.props.params);
    return(
      <div className="tip">
        <form onSubmit={this.onSubmitTip}>
          <h3>ADD A SITCH:</h3> <br/>
          <br/>
          <input onChange={this.onChangeUser} placeholder='your name' type='text' /><br/><br/>
          <input onChange={this.onChangeDescription} placeholder='tip' type='text' /><br/><br/>
          <button type='submit' onClick={this.onChangeUser}>Submit</button>
          <h4>{this.state.message}</h4>
          <Link to="/">Back to Home</Link>
        </form>
      </div>
    );
  }
});

export default AddTip;
