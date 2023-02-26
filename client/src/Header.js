import React from 'react';
import logo from './icons/logos.svg';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
            
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/profile">
                  <img src={require('./icons/user.png')} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/test">Test</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/booking">Időpont foglalás</NavLink>
              </NavItem>
              
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>Ékszerek</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Gyűrű</DropdownItem>
                  <DropdownItem>Nyaklánc</DropdownItem>
                  <DropdownItem>Egyéb</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/about">Rólunk</NavLink>
              </NavItem>
              
            </Nav>
          </Col>
          
          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              <img src={logo} alt="logo" className="position-relative img-fluid" />
            </NavbarBrand>
          </Col>
        

          <Col className="d-none d-lg-flex justify-content-end">
            <Nav>
              <NavLink className="font-weight-bold" href="/signup">Regisztráció</NavLink>
              <NavLink className="font-weight-bold" href="/login">Bejelentkezés</NavLink>
            </Nav>
          </Col>
          
        </Row>
      </Container>
      
    </Navbar>
  </header>
);

export default Header;