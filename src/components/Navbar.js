import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (

            <div className = "Header" >
                <Navbar collapseOnSelect >
                <Navbar.Header >
                <Navbar.Brand >
                <a href = "#brand" > < strong > Squatters < /strong></a >
                </Navbar.Brand> <Navbar.Toggle / >
                </Navbar.Header>

                <Navbar.Collapse >
                <Nav pullRight >

                <NavItem href = "#" >
                <button className = "placead" > PLACE AD < /button> </NavItem>

                <NavItem className = "links" href = "#" >
                BROWSE HOUSES </NavItem>

                <NavItem className = "links" href = "#" >
                ABOUT </NavItem>

                <NavItem className = "links" href = "#" >
                CONTACT </NavItem>

                <NavItem href = "#" >
                <button className = "login" > LOGIN < /button> </NavItem>

                <NavItem href = "#" >
                <button className = "signup" > SIGN UP < /button> </NavItem>

                </Nav> </Navbar.Collapse> </Navbar>

            </div>

        );
    }
}

export default Header;