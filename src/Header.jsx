import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import web from '../src/images/mesla.png';
import Login from './Login';
import Signup from './Signup'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className ="navbar fixed" color="dark" dark expand="md">
        <NavbarBrand className="mr-5 brands" href="/">
        <img src={web}  alt="Mesla_logo" className="nav-images" />
        <em>MESLA</em>
        <span className="nav-images"></span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
         
            <NavItem className="nav-items mr-3">
            <NavLink  href ="/" className="menu" >Home</NavLink>
            </NavItem> 

     <NavItem className="nav-items mr-3">
             <NavLink href="/about" className="menu">About Us</NavLink>
            </NavItem>

           <NavItem className="nav-items mr-3">
            <NavLink href ="/jobs" className="menu">Jobs</NavLink>
            </NavItem>
            
             <NavItem className="nav-items mr-3">
             <NavLink href ="/contact" className="menu">Contact us</NavLink>
            </NavItem>
            
          </Nav>
          
          <NavbarText className="nav_text d-flex">
              {/* <button name="login" className="nav-btn btn btn-primary">Login</button> */}
            
               <Signup name = "signup-name"
               label = "Sign up"
               classNames = "nav-btn btn btn-secondary"
              />
                  <Login name = "Login-name"
               label = "Login"
               classNames = "nav-btn btn btn-success"
              />

              {/* <button className="nav-btn btn btn-secondary">Sign up</button>      */}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

