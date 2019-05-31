import React from 'react';
import './live_program_template.css';

class Live_program_template_form extends React.Component {
  state = {
    region_id: "",
    program_template_id: "",
    main_location: "",
    primary_teacher: "",
    start_date: "",
    end_date: "",
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
    region_id: "",
    program_template_id: "",
    main_location: "",
    primary_teacher: "",
    start_date: "",
    end_date: "",
  })
};

  render() {
    return(
    <div>
      <h1> Create a new Live Program Template Object </h1>
      <form>
        <input
          name = "region_id"
          placeholder="Region ID"
          value = {this.state.region_id}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "program_template_id"
          placeholder="Program Template ID"
          value = {this.state.program_template_id}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "main_location"
          placeholder="Main Location"
          value = {this.state.main_location}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "primary_teacher"
          placeholder="Primary Teacher"
          value = {this.state.primary_teacher}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "start_date"
          placeholder="Start Date"
          value = {this.state.start_date}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name = "end_date"
          placeholder="End Date"
          value = {this.state.end_date}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }



}

export default Live_program_template_form;
