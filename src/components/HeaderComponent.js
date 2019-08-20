import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/cube-48.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link to="/home" className="navbar-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/home"
              className="nav-link"
              activeStyle={{ color: "#f5a540" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className="nav-link"
              activeStyle={{ color: "#f5a540" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/faq"
              className="nav-link"
              activeStyle={{ color: "#f5a540" }}
            >
              FAQs
            </NavLink>
          </Nav>
          <Nav>
            <a
              className="nav-link"
              href="https://github.com/tensorwerk/hangar-py"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
              <span>Github</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
