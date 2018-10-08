import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
class Navigation extends Component {
  constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }
  render(){
    return (
      <div>
        <div className="container" id="head">
        <Navbar color="white" light expand="md">
             <NavbarBrand href="#"><strong>Squatters</strong></NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink href="">BROWSE HOUSES</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="">ABOUT</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="">CONTACT</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink className="login mr-2" href="">LOGIN</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink className="text" href="">SIGN UP</NavLink>
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
        </div>
      </div>
    );
  }
}
export default Navigation;
