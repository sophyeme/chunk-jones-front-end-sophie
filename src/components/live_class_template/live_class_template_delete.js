import React from 'react';
import './live_class_template.css';
import Navigation from '../Navigation'
import axios from 'axios'

class Live_class_template_form_delete extends React.Component {
  state = {
    live_class_template_id: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);

  axios.delete("http://looneyteamapi.herokuapp.com/classes" + this.state.live_class_template_id, {
    data: { live_class_template_id:this.live_class_template_id, }
  },{headers: {'Accept': 'application/json'}})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  this.setState({
    live_class_template_id: "",
  })
};

  render() {
    return(
    <div>
      <Navigation />
      <h1> Delete a existing Live Class Template Object </h1>
      <form>
        <input
          name = "live_class_template_id"
          placeholder="Live Class Template ID"
          value = {this.state.live_class_template_id}
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

export default Live_class_template_form_delete;
