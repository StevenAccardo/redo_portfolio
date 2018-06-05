import React, { Component } from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import linkedin from '../../../assets/images/linkedin.png';
import github from '../../../assets/images/github.png';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="header">
        <Navbar dark expand="md">
          <NavbarBrand tag={RRNavLink} to={'/'}>
            <h4 className="header__navbarBrand">Welcome to My Portfolio!</h4>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink className="header__navLink" tag={RRNavLink} to={'/projects'}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="header__navLink" tag={RRNavLink} to={'/courses'}>
                  Courses
                </NavLink>
              </NavItem>
              <NavItem>
                <a target="_blank" href="https://github.com/StevenAccardo" className="header__navLink">
                  <img src={github} alt="github icon" className="header__githubIcon" />
                </a>
              </NavItem>
              <NavItem>
                <a target="_blank" href="https://www.linkedin.com/in/accardosteven" className="header__navLink">
                  <img src={linkedin} alt="linkedin icon" className="header__linkedinIcon" />
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
