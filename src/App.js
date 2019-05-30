import React, { Component } from 'react';
import Login from './components/login/login';
// import './Assets/homepage.css';
//compenents
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
//import { Router } from "react-router"; 
import { Link,NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
//require('./menu-frame.css');
import ProgramTemplateForm from './components/program_template/program_template_create';
import TeacherTemplateForm from './components/teacher_template/teacher_template_create';
import ClassTemplateForm from './components/class_template/class_template_create';
import {Nav, Navbar} from 'react-bootstrap/Nav';
//import Navigation from './Navigation';
import * as ROUTES from './components/Constants/routes'


class App extends Component {
  render() {
    return (
      
      // <div className="App">

      //   <Header />

      //     <Homepage />


      //   <Footer />

      // </div>
      // <Login></Login>
      <Router>
        <div>
          {/* <Navigation /> */}
          <Login></Login>
          <hr />

          {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
          {/* <Route path={ROUTES.SIGN_IN} component={SignInPage} /> */}
          <Route exact path={ROUTES.ptf} component={ProgramTemplateForm} />
          <Route exact path={ROUTES.ttf} component={TeacherTemplateForm} />
          <Route exact path={ROUTES.ctf} component={ClassTemplateForm} />
        </div>
        
      {/* <div > */}
        {/* <Navbar>
         
         
          <Nav>
           
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/another">
              Another
            </Nav.Link>
            <Nav.Link as={NavLink} to="/onemore">
              One More
            </Nav.Link>
          </Nav>
        </Navbar> */}
        {/* <Route path="home" exact component={ProgramTemplateForm} />
        <Route path="/" exact component={Login} /> */}
        {/* <Route path="/another" exact component={Another} />
        <Route path="/onemore" exact component={Onemore} /> */}
      {/* </div> */}
    </Router>
    );
  }
  
}

export default App;
