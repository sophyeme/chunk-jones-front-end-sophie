import React, { Component } from 'react';
import Navigation from '../Navigation'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { nullLiteral } from '@babel/types';

// CSS?

// class Teacher_template_home extends Component {
//   render() {
//     return (
//       <div>
//         <Navigation />
//         <header>
//         <div>
//           <h1>
//             Teacher Template Tables
//           </h1>
//         </div>
//       </header>
//       </div>
      
//     );
//   }
// }

// export default Teacher_template_home;
// import React, { Component } from 'react';
//import json_data from './program_template_data.json';
// import {BootstrapTable,
//        TableHeaderColumn} from 'react-bootstrap-table';
// import axios from 'axios'
//import '../css/Table.css';
//import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
 
class Teacher_template_unavailability extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      lists: [],
      teacherId: null,
      teacherFirstName: null,
      teacherLastName: null,
      searchInput: null,
      showTable: false,
      teachInfolist: [],
      errorMessage:""
    };
    this.renderTable = this.renderTable.bind(this);
    this.renderTeacherId = this.renderTeacherId.bind(this);
    this.onTeacherIdSubmit = this.onTeacherIdSubmit.bind(this);
    this.formatTime = this.formatTime.bind(this)
  }
  componentDidMount() {
      axios.get('https://looneyteamapi.herokuapp.com/teacher_unavailability')
      .then(response => {
        console.log(response.data);
        this.setState({lists: response.data})
        console.log(this.state.lists)
      })
      axios.get('https://looneyteamapi.herokuapp.com/teachers')
      .then(response => {
        console.log(response.data);
        this.setState({teachInfolist: response.data})
      })
  }
//  componentDidMount() {
  //    fetch('https://looneyteamapi.herokuapp.com/program_template')
  //      .then(response => response.json())
  //      .then(data => this.setState({ data }));
  //  }
  renderTable(){
    // let temp = [];
    // for (var x=0; x<this.state.lists.length; x++){
    //   if (this.state.teacherId == this.state.lists[x].teacher_id){
    //     temp.push(
    //       <tr>
    //         <td>{this.state.teacherId}</td>
    //         <td>{this.formatTime(this.state.lists[x].monday)}</td>
    //         <td>{this.formatTime(this.state.lists[x].tuesday)}</td>
    //         <td>{this.formatTime(this.state.lists[x].wednesday)}</td>
    //         <td>{this.formatTime(this.state.lists[x].thursday)}</td>
    //         <td>{this.formatTime(this.state.lists[x].friday)}</td>
    //       </tr>
    //     )
    //   }
    // };
    let temp = [];
    var ifexsist = false;
    for (var x=0; x<this.state.teachInfolist.length; x++){
      if (this.state.teacherFirstName == this.state.teachInfolist[x].first_name && this.state.teacherLastName == this.state.teachInfolist[x].last_name  ){
        // this.setState({errorMessage : ""})
        ifexsist = true
        for (var y = 0; y<this.state.lists.length; y++ ){
          //console.log("here", x,"dsdf", this.state.teacherFirstName, this.state.teachInfolist[x])
          if (this.state.teachInfolist[x].teacher_id == this.state.lists[y].teacher_id ){
            temp.push(
              <tr>
                <td>{this.state.teachInfolist[x].first_name}</td>
                <td>{this.state.teachInfolist[x].last_name }</td>
                <td>{this.state.lists[x].teacher_id }</td>
                <td>{this.formatTime(this.state.lists[x].monday)}</td>
                <td>{this.formatTime(this.state.lists[x].tuesday)}</td>
                <td>{this.formatTime(this.state.lists[x].wednesday)}</td>
                <td>{this.formatTime(this.state.lists[x].thursday)}</td>
                <td>{this.formatTime(this.state.lists[x].friday)}</td>
              </tr>
            )
          }
        }
      }
    };
    if (! ifexsist){
      temp.push(<tr>This teacher unavailable time does not exsist!</tr>)
    }
    
    return(
     
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Teach Id</th>
          <th>Monday</th>
          <th>Tuesday</th>            
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
 
         
          {temp}
     
        
      </tbody>
    </Table>
      
    )
  }
  formatTime(time){
    //var timeArr = time.split(':')
    //var formattedTime = timeArr[0] + ":" + timeArr[1] + " - " + timeArr[2].substr(2,3) +":"+ timeArr[3]
    //var formattedTime = time[0]
    var timelist = []
    for (let i = 0; i < time.length; i++){
      var temp = time[i][0] + " - " + time[i][1]
      timelist.push(temp)
    }
    console.log(timelist)
    return timelist
  }
  renderTeacherId(){
    return(
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Teacher Full Name </Form.Label>
            <Form.Control type="text"  placeholder="Enter here"  onChange = { (e) => this.onTeacherIdChange(e)} />
          </Form.Group>

          
          <button  type = "button" onClick = {e => this.onTeacherIdSubmit()}>
            Search
          </button>
      </Form>
    )
  }
  onTeacherIdChange(e){
    this.setState({searchInput : e.target.value})
    console.log(this.state.searchInput)
    if (e.target.value == ""){
      this.setState({showTable:false})
      this.setState({errorMessage : ""})
    }
  }
  onTeacherIdSubmit(){
    //this.setState({teacherName: this.state.searchInput})
    if (this.state.searchInput.includes(" ")){
      var nameArr = this.state.searchInput.split(" ")
      this.setState({teacherFirstName:nameArr[0]})
      this.setState({teacherLastName:nameArr[1]})
      this.setState({showTable:true})
    }else{
      this.setState({showTable:false})
      this.setState({errorMessage : "Please enter Full Name!"})
      console.log("here")
    }
  
  }
  render() {
    return (
      <div>
         <Navigation />
          <header>
          <h1> Teacher Unavailability Table </h1>
          <div>
            {this.renderTeacherId()}
            <h1></h1>
            {this.state.showTable && this.renderTable()}
            {this.state.errorMessage}
          {/* {this.state.lists.map((x) => {
            return (<div>
              <p>username: {x.username}, first_name: {x.first_name} , last_name: {x.last_name},
              password: {x.password}, email: {x.email}, verified: {x.verified}, teacher_id: {x.teacher_id},
                skills: {x.skills}, address: {x.address}</p>
            </div>)
        })} */}
  
  
          </div>
        </header>
      </div>
      
    );
  }
}
 
 
 
 
export default Teacher_template_unavailability;