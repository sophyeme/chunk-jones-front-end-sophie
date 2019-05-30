import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import fire from './Firebase/firebase';
// require('firebase/auth');
import Header from '../headerComponent/header';
import Homepage from '../pages/homePage';
import Footer from '../footerComponent/footer';
import Navigation from '../Navigation';
require('./login.css');



class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      routeToHome: false
    };
  }
  onEmailChange(e){
    this.setState({email: e.target.value});
  }
  onPasswordChange(e){
    this.setState({password: e.target.value});
  }
 
  submitLogin(e) {
    e.preventDefault();
    if (this.state.email != "" && this.state.password != ""){
      this.setState({routeToHome: true});
    }
  }
  renderLogin(){
    return (
      <Container fluid={true} className="login-container">
      
        <Row className="login-row">
          <Col className="login-col" sm={2} lg={3} xl={4}></Col>
          <Col className="login-col" xs={12} sm={8} lg={6} xl={4}><img className="login-logo1" src={require('../assets/logo.png')} alt="logo"></img></Col>
          <Col className="login-col" sm={2} lg={3} xl={4}></Col>
        </Row>
        
        <Row className="login-row">
          {/* <Col className="login-col" sm={2} lg={3} xl={4}></Col> */}
          <Col className="login-col login-box" xs={12}>

          {/* <Col className="login-col login-box" xs={12} sm={8} lg={6} xl={4}> */}
            <Row className="login-row">
              <Col className="login-col" lg={1}></Col>
              <Col className="login-col margin" lg={10}><div className="signin-text">Administrator Login</div></Col>
              <Col className="login-col" lg={1}></Col>
            </Row>

            <Row>
              <Col className="login-col" sm={4}></Col>
              <Col className="login-col" sm={4}>
                <form method="post" onSubmit={this.submitLogin.bind(this)}>
                  {/* <input className="login-input-field" type="text" name="eventname" placeholder="Event Name" onChange={this.onEventNameChange.bind(this)} /> */}
                  <input className="login-input-field" type="text" name="email" placeholder="Email" onChange={this.onEmailChange.bind(this)} />
                  <input className="login-input-field" type="password" name="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)} />
                  {this.state.accountInvalid && <label className="error">{this.state.loginError}</label>}
                  <input className="login-submit" type="submit" value="SIGN IN" />
                </form>
              </Col>
              <Col className="login-col" sm={4}></Col>
            </Row>
          </Col>
        </Row>
        <Row className="login-row">
          <Col className="login-col" lg={3} xl={4}></Col>
          <Col className="login-col" xs={12} lg={6} xl={4}></Col>
          <Col className="login-col" lg={3} xl={4}></Col>
        </Row>
      </Container>
    )
  }
  
  render(){
    return (
      <div>
        { !this.state.routeToHome && this.renderLogin()}
        {this.state.routeToHome && 
          <div>
            {/* <Header></Header> */}
            {/* <Homepage></Homepage>
            <Footer></Footer> */}
            <Navigation />
            
          </div>
        }
      </div>
      
      
      
    );
  }
}
export default LoginPage;
