import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/cube-48.png";
import logoLight from "../assets/cube-light-theme-48.png";
import lightSwitch from "../assets/sun-dark-theme-24.png";
import darkSwitch from "../assets/moon-light-theme-24.png";
import { Link, NavLink } from "react-router-dom";
import { ThemeConsumer } from "../context/theme-context";

function Header() {
  return (
    <ThemeConsumer>
      {({ isDarkMode, toggleThemeMode }) => (
        <Navbar bg="dark" expand="lg" variant={isDarkMode ? "dark" : "light"}>
          <Link to="/home" className="navbar-brand">
            <img
              src={isDarkMode ? logo : logoLight}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Hangar logo"
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
              <label className="mode-switcher" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={toggleThemeMode}
                />
                <div className="switch">
                  <img src={darkSwitch} className="dark" alt="dark mode" />
                  <img src={lightSwitch} className="light" alt="light mode" />
                </div>
              </label>
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
      )}
    </ThemeConsumer>
  );
}

export default Header;
