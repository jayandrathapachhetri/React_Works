import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 3.8rem;
    
    .navbar-link{
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: &{({theme})=> theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover, &.active {
        color: &{({theme})=> theme.colors.helper};
    }
  }
}


  `;

function Navbar() {
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="*">
              Error
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navbar;
