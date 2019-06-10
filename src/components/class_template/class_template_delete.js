import React from 'react';
import './class_template.css';
import Navigation from '../Navigation'
import axios from 'axios'

class Class_template_form_delete extends React.Component {
  state = {
    class_template_id: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);

  axios.delete("http://looneyteamapi.herokuapp.com/class_template" + this.state.class_template_id, {
    data: { class_template_id:this.class_template_id, }
  },{headers: {'Accept': 'application/json'}})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  this.setState({
    class_template_id: "",
  })
};
  render() {
    return(
    <div>
      <Navigation />
      <div id='ctdpage'>
        <h1> Delete a existing Class_Template Object </h1>
        <img id='ctdimage' src={require('../assets/tasmanianDevil.png')} alt=''></img>
        <div id='ctdform'>
          <form>
            <input
              name = "class_template_id"
              placeholder="Class ID"
              value = {this.state.class_template_id}
              onChange={e => this.change(e)}
            />
            <br />
            <button onClick={e => this.onSubmit(e)}>Submit</button>
            <br />
          </form>
        </div>
      </div>
    </div>
    );
  }



}

export default Class_template_form_delete;
