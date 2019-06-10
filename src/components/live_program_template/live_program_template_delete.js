import React from 'react';
import './live_program_template.css';
import Navigation from '../Navigation'
import axios from 'axios'

class Live_program_template_form_delete extends React.Component {
  state = {
    live_program_template_id: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);

  axios.delete("http://looneyteamapi.herokuapp.com/liveprogram" + this.state.live_program_template_id, {
    data: { live_program_template_id:this.live_program_template_id, }
  },{headers: {'Accept': 'application/json'}})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  this.setState({
    live_program_template_id: "",
  })
};

  render() {
    return(
    <div>
      <Navigation />
      <h1> Delete a existing Live Program Template Object </h1>
      <form>
        <input
          name = "live_program_template_id"
          placeholder="Live Program ID"
          value = {this.state.live_program_template_id}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        <br />
      </form>
    </div>
    );
  }



}

export default Live_program_template_form_delete;
