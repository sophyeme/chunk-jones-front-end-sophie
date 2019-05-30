import React from 'react';
import './class_template.css';

class Class_template_form extends React.Component {
  state = {
    class_title: "",
    class_description: "",
    specialty: "",
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
    class_title: "",
    class_description: "",
    specialty: "",
    skills: "",
  })
};

  render() {
    return(
    <div>
      <h1> Create a new Teacher_Template Object </h1>
      <form>
        <input
          name = "class_title"
          placeholder="Class Title"
          value = {this.state.class_title}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "class_description"
          placeholder="Class Description"
          value = {this.state.class_description}
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
          name = "skills"
          placeholder="Skills"
          value = {this.state.skills}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }



}

export default Class_template_form;
