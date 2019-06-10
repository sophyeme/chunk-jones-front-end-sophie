import React from 'react';
import './program_template.css';
import Navigation from '../Navigation'
import axios from 'axios'

class Program_template_form_delete extends React.Component {
  state = {
    program_id: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);

  axios.delete("http://looneyteamapi.herokuapp.com/program_template/" + this.state.program_id, {
    data: { program_id:this.program_id, }
  },{headers: {'Accept': 'application/json'}})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  this.setState({
    program_id: "",
  })
};

  render() {
    return(
    <div>
      <Navigation />
      <h1> Delete a existing Program_Template Object </h1>
      <div>
      <img id='ptdimage' src={require('../assets/gossamer1.png')} alt='decorative'></img>
      <br/>
      <form>
        <input
          name = "program_id"
          placeholder="Program ID"
          value = {this.state.program_id}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      <br/>
      </div>
    </div>
    );
  }



}

export default Program_template_form_delete;
