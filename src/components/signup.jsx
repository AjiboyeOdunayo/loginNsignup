import React, { Component } from 'react';
import { Container, Row, Col, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Signup extends Component {
  render() {
    return (
      <Route path="/Signup">    
       <Container className="container-fluid"><br/>
       <div className="img">
        <img src={require("../img/banner1.jpg")} className="img-fluid" classID="img" alt=""/>
       </div>
        
          <Row classID="roww" className="row"> 
          
            <div className="col-md-12" >
            <Card className="form-elegant">
                  <CardBody className="mx-4">
                    <div className="text-center">
                    <h1 className="dark-grey-text mb-2"><span className="pipe">| </span><strong>Sign up</strong></h1>
                  </div>
                 
                    <p className="mb-2 mr-auto">Enter your details below.</p>
                    <fieldset>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="icon-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="FullName" validate error="wrong" minlength="5" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="icon-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="123 House, City, State."  minlength="5" validate error="wrong"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="icon-user"></i></span>
                        </div>
                        <input type="email" className="form-control" placeholder="Email" validate error="wrong"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="icon-user"></i></span>
                        </div>
                        <input type="date" className="form-control" placeholder="Birthday" validate error="wrong"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="icon-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Phone Number" validate error="wrong" minlength="11"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Sex<i className="icon-user"></i></span>
                        </div>
                     
                        <div className="form-group-radio">
                        <input type="radio" className="col-xs-6"  name="gender" value="male" /> Male
                        </div>
                        <div className="form-group-radio">
                        <input type="radio" className="col-xs-6"  name="gender" value="female" /> Female
                        </div>
                      </div>
                    </div>
                    <div className="form-group"><strong>Upload Avatar</strong>
                      <div className="input-group">
                        
                        <input type="file" className="form-group-file" placeholder="Image"/> 
                    </div>
                    </div>
                    
                    <div className="form-group">
                    
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="icon-lock"></i></span>
                        </div>               
                        <input type="password" className="form-control" placeholder="Password" validate error="wrong" minlength="6"/>
                      </div>
                     
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="icon-lock"></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="Confirm Password" validate error="wrong" minlength="6"/>
                      </div>
                    </div>
                    </fieldset>
                    <ul>
                      <li><h6>By signing up i accept <strong>Terms and Conditions</strong>.</h6></li>
                    </ul>
                    <br/>                
                  <div className="text-center mb-3">
                    <Button type="button" gradient="blue" rounded className="btn-block z-depth-1b" >Sign up</Button>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">Sign Up with:</p>
                  <div className="row my-3 d-flex justify-content-center">
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="google" className="blue-text text-center" /></Button>
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="instagram" className="blue-text text-center" /></Button>
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text text-center" /></Button>
                  </div>
                  
                </CardBody>
                <ModalFooter className="mx-5 pt-3 ">
                  <p className="font-small grey-text d-flex justify-content-end">Already have an account? <a href="/" className="blue-text ml-1"> Log in</a></p>
                </ModalFooter>
              </Card>
          </div>
          <div className="col-md-6" ></div>
        </Row>
     
    </Container>
    </Route>

        );
    }
  }

export default Signup;