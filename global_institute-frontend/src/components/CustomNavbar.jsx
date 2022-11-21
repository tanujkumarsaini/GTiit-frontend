import React from 'react'
import { useState } from 'react';
import {NavLink as ReactLink,} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
       <Navbar
       color='primary'
       fixed='top'
       dark
       expand="md"
       className='px-5 shadow'
       >
        <NavbarBrand tag={ReactLink} to="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Courses
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Java</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Python</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Tally</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>CCC</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          
            <NavItem>
              <NavLink tag={ReactLink} to="/certificate">
               Certificate
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Follow Us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Twitter</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Facebook</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav className="me-auto" navbar>
          <NavItem>
             <marquee>Hello</marquee>
            </NavItem>
            </Nav>

          <Nav className="ms-auto" navbar>
          <NavItem>
              <NavLink tag={ReactLink} to="/login">Login</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/signup">Register</NavLink>
            </NavItem>
          </Nav>
        
    
        </Collapse>
      </Navbar>
    </div>
  )
}

export default CustomNavbar