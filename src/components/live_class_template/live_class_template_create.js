import React from 'react';
import './live_class_template.css';

class Live_class_template_form extends React.Component {

  state = {
    is_part_of_program: false,
    lattitude: "",
    longitude: "",
    max_students: "",
    name: "",
    time_start: "",
    time_end: "",
    description: "",
    region_id: "",
    program_template_id: "",
    class_template_id: "",
    specialty: "",
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
    is_part_of_program: false,
    lattitude: "",
    longitude: "",
    max_students: "",
    name: "",
    time_start: "",
    time_end: "",
    description: "",
    region_id: "",
    program_template_id: "",
    class_template_id: "",
    specialty: "",
  })
};

handleChange = () => {
    this.setState({
      is_part_of_program: true,
    })
};


  render() {
    return(
    <div>
      <h1> Create a new Teacher_Template Object </h1>
      <form>
        <label>Is part of a program (Check if True)</label>
        <input
          type="checkbox"
          value={this.state.is_part_of_program}
          onChange={this.handleChange}
        />

        <br />
        <input
          name = "lattitude"
          placeholder="Lattitude"
          value = {this.state.lattitude}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "longitude"
          placeholder="Longitude"
          value = {this.state.longitude}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "max_students"
          placeholder="Max Student Count"
          value = {this.state.max_students}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "time_start"
          placeholder="Time Start"
          value = {this.state.time_start}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "time_end"
          placeholder="Time End"
          value = {this.state.time_end}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "description"
          placeholder="Description"
          value = {this.state.description}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "region_id"
          placeholder="Region ID"
          value = {this.state.region_id}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "program_template_id"
          placeholder="Program Template Id"
          value = {this.state.program_template_id}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "class_template_id"
          placeholder="Class Template Id"
          value = {this.state.class_template_id}
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
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }



}

export default Live_class_template_form;
