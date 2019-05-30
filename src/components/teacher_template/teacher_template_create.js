import React from 'react';
import './teacher_template.css';

class Teacher_template_form extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    verified: "",
    skills: "",
    specialty: "",
    level: "",
    address: "",
  }

change = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  this.setState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    verified: "",
    skills: "",
    specialty: "",
    level: "",
    address: "",
  })
};

  render() {
    return(
    <div>
      <h1> Create a new Teacher_Template Object </h1>
      <form>
        <input
          name = "first_name"
          placeholder="First Name"
          value = {this.state.first_name}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "last_name"
          placeholder="Last Name"
          value = {this.state.last_name}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "username"
          placeholder="Username"
          value = {this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "password"
          placeholder="Password"
          value = {this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "email"
          placeholder="E-mail"
          value = {this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "verified"
          placeholder="Verified status"
          value = {this.state.verified}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "skills"
          placeholder="Skills"
          value = {this.state.skills}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "specialty"
          placeholder="Specialty"
          value = {this.state.specialty}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "level"
          placeholder="Level"
          value = {this.state.level}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "address"
          placeholder="Address"
          value = {this.state.address}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }



}

export default Teacher_template_form;
