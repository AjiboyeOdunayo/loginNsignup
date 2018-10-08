import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Login extends React.Component  {
  render() {
    return(
      <Route path="/Login">    

      <Container className="container-fluid"><br/>
      <div className="img">
        <img src={require("../img/banner1.jpg")} className="img-fluid"  alt=""/>
      </div>
       
          <Row classID="roww" className="row">
            
            <Col className="col-md-12"  >
              <Card className="form-elegant">
                <CardBody className="">
                  <div className="text-center">
                    <h1 className="col-md-12"><span className="pipe">| </span><strong>Welcome Back!</strong></h1>
                  </div>
                  <label><strong>Email</strong></label>
                  <Input group type="email" validate error="wrong" success="right" minlength="5" required/>
                  <label><strong>Password</strong></label>
                  <Input group type="password" validate containerClass="mb-0" validate error="wrong" minlength="6" required/>
                  
                  <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                  <label class="custom-control-label" for="defaultUnchecked">Remember me</label>
                  </div>
                  <p className="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="/" className="blue-text ml-1"> Password?</a></p>
                  <div className="text-center mb-3">
                    <Button type="button" gradient="blue" rounded className="btn-block z-depth-1b" >Log in</Button>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                  <div className="row my-3 d-flex justify-content-center">
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="google" className="blue-text text-center" /></Button>
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="instagram" className="blue-text text-center" /></Button>
                    <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text text-center" /></Button>
                  </div>
                </CardBody>
                <ModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Dont have an Account? <a href="/" className="blue-text ml-1"> Sign Up</a></p>
                </ModalFooter>
              </Card>
            </Col>
          </Row>
        
      </Container>
      </Route>
    );
  }
};

export default Login;

                      