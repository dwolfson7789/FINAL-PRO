import axios from 'axios';

const helpers = {
  getUsers: function(){
    // fetch some data from using a promise
    return axios.get('http://localhost:3000/users.json');
  },
  getUser: function(){
    return axios.get('http://localhost:3000/users/'+id)
  },
  addUser: function(user){
    return axios.post('http://localhost:3000/users/new/', user);
  },
  deleteUser: function(user){
    return axios.delete('http://localhost:3000/users/', user);
  },
  updateUser: function(user){
    return axios.put('http://localhost:3000/users/edit/', user);
  },

  //Sitches
  getSitches: function(){
    // fetch some data from using a promise
    return axios.get('http://localhost:3000/sitches.json');
  },
  getSitch: function(){
    return axios.get('http://localhost:3000/sitches/',+id)
  },
  addSitch: function(sitch){
    return axios.post('http://localhost:3000/sitches/new/', sitch);
  },
  deleteSitch: function(sitch){
    return axios.delete('http://localhost:3000/sitches/', sitch);
  },
  updateSitch: function(sitch){
    return axios.put('http://localhost:3000/sitches/', sitch);
  }
}

export default helpers;
