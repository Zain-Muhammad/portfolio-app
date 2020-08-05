import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';

import './style.css';
import {Link} from 'react-router-dom';

class Menu extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (

    
    <div className="container-fluid sticky-top">
      <MDBContainer>
        <MDBNavbar color="" style={{ marginTop: '20px' }}  className="main-menu " >
          <MDBContainer>
            <MDBNavbarBrand>
               <img src={process.env.PUBLIC_URL + '/assets/images/zs.jpg'} className="menu-logo rounded-circle" />
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="primary" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active className="main-menu-links" light>
                    <MDBNavLink to="/" className="white-text">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="main-menu-links">
                    <MDBNavLink to="/about" className="white-text">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="main-menu-links">
                    <MDBNavLink to="/resume" className="white-text">Resume</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="main-menu-links">
                    <MDBNavLink to="/portfolio" className="white-text">Portfolio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="main-menu-links">
                    <MDBNavLink to="/testimonials" className="white-text">Testimonials</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="main-menu-links">
                    <MDBNavLink to="/contact" className="white-text">Contact</MDBNavLink>
                  </MDBNavItem>
                  <div>
                  <p> <span><img src={process.env.PUBLIC_URL + '/assets/images/PngItem_2194090.png'}  className="copyrights-logo" /></span> </p>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!">Zain Sher</a>
        </div>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      </div>
    
    );
  }
}

export default Menu;