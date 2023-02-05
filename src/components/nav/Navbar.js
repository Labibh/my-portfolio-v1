import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';
import styled from 'styled-components';

const NavbarStyled = styled.div`
  .navbar-main {
    background-color: #442D22;
  }

  .nav-collapse {
    margin-right: 60px;
  }

  .nav-links > * {
    margin: 0 20px;
    color: #ffffff;
    font-family: var(--font-family-Roboto);
    font-size: 24px;
    font-weight: 300;
  }

  .nav-logo {
    margin-left: 15px;
    padding: 0;
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
    text-decoration: none !important;
  }

  .link-pointer {
    cursor: pointer;
  }

  .active {
    color: #ffffff;
    text-decoration: underline;
  }

  @media only screen and (max-width: 576px) {
    .nav-collapse {
      margin: 0;
      text-align: center;
    }

    .navbar-dark {
      --bs-navbar-brand-hover-color: #442D22;
      --bs-navbar-toggler-border-color: #442D22;
      --bs-navbar-toggler-focus-width: 0px;
      --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255,255,255,1.0)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    
  }
`;

const NavbarComp = props => {
    const [expanded, setExpanded] = useState(false);

    return (
        <NavbarStyled>
            <Navbar className="navbar-main navbar-dark" expanded={expanded} expand="sm" fixed="top">
                <Navbar.Brand className="nav-logo link-pointer" as={Link} to="about" spy={true} smooth={true}
                              duration={500}>LH</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}
                               aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="nav-collapse justify-content-center" id="basic-navbar-nav">
                    <Nav className="nav-links link-pointer">
                        <Nav.Link as={Link} activeClass="active" to="about" spy={true} smooth={true} duration={500}
                                  onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link as={Link} activeClass="active" to="skills" spy={true} smooth={true} duration={500}
                                  onClick={() => setExpanded(false)}>Skills</Nav.Link>
                        <Nav.Link as={Link} activeClass="active" to="projects" spy={true} smooth={true} duration={500}
                                  onClick={() => setExpanded(false)}>Projects</Nav.Link>
                        <Nav.Link as={Link} activeClass="active" to="contact" spy={true} smooth={true} duration={500}
                                  onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavbarStyled>
    );
}
export default NavbarComp;