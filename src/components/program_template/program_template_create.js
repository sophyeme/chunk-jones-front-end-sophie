import React from 'react';
import './program_template.css';
import Navigation from '../Navigation'

class ProgramTemplateForm extends React.Component {
  state = {
    program_title: "",
    program_description: "",
    program_specialties: "",
    skills: "",
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
    program_title: "",
    program_description: "",
    program_specialties: "",
    skills: "",
  })
};

  render() {
    return(
    <div>
      <Navigation />
      <h1> Create a new Program_Template Object </h1>
      <form>
        <input
          name = "program_title"
          placeholder="Program Title"
          value = {this.state.program_title}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "program_description"
          placeholder="Program Description"
          value = {this.state.program_description}
          onChange={e => this.setState( { program_description: e.target.value} )}
        />
        <br />
        <input
          name = "program_specialties"
          placeholder="Program Specialties"
          value = {this.state.program_specialties}
          onChange={e => this.setState( { program_specialties: e.target.value} )}
        />
        <br />
        <input
          name = "skills"
          placeholder="Skills"
          value = {this.state.skills}
          onChange={e => this.setState( { skills: e.target.value} )}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }



}

export default ProgramTemplateForm;
