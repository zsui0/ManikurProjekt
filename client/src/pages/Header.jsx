import React, {useState, useEffect} from 'react';
import logo from '../icons/logos.svg';
import AuthService from '../services/auth.service';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


const Header = (user) => {

const logOut = () => {
  AuthService.logout();
}

  return (
    <header>
        <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
        
          <Container>
            <Row noGutters className="position-relative w-100 align-items-center">
            
              <Col className="d-none d-lg-flex justify-content-start">
                <Nav className="mrx-auto" navbar>
                
                  
                  
                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">Főoldal</NavLink>
                  </NavItem>
                  
                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/booking">Időpont foglalás</NavLink>
                  </NavItem>
                  
                  <UncontrolledDropdown className="d-flex align-items-center" direction="down">
                    <DropdownToggle className="font-weight-bold" nav caret>Ékszerek</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="/gyuru">Gyűrű</DropdownItem>
                      <DropdownItem href="/nyaklanc">Nyaklánc</DropdownItem>
                      <DropdownItem href="/egyeb">Egyéb</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/about">Rólam</NavLink>
                  </NavItem>
                  
                </Nav>
              </Col>
              
              <Col className="d-flex justify-content-xs-start justify-content-lg-center">
                <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
                  <img src={logo} alt="logo" className="position-relative img-fluid" />
                </NavbarBrand>
              </Col>
            

              <Col className="d-none d-lg-flex justify-content-end">
                {user.currentUser === undefined ? (
                  <Nav>
                    <NavLink className="font-weight-bold" href="/signup">Regisztráció</NavLink>
                    <NavLink className="font-weight-bold" href="/login">Bejelentkezés</NavLink>
                  </Nav>
                ) : (
                  <Nav>
                    <NavLink className="font-weight-bold d-flex align-items-center" href="/login" onClick={logOut}>Kijelentkezés</NavLink>
                    <NavItem className="d-flex align-items-center">
                      <NavLink className="font-weight-bold" href="/profile">
                      <img src={require('../icons/user.png')} alt="avatar" className="img-fluid rounded-circle" style={{ width: 40 }} />
                      </NavLink>
                  </NavItem>
                </Nav>
                )}

              </Col>
              
            </Row>
          </Container>
          
        </Navbar>
      </header>
  );
  
};

export default Header;