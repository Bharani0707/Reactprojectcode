import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "./Contact"; 

const Header = ({ cartAllProduct }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-dark d-flex justify-content-between align-content-center px-5 p-2">
          <h3 className="text-info alert-danger" style={{ textShadow: "2px 2px 4px black" }}>
            <i className="fa-solid fa-cart-shopping"></i> Shopping
          </h3>
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3 justify-content-center">
            <NavLink
              to="/"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
              style={{ color: "#f8f9fa", fontWeight: "bold" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
              style={{ color: "#f8f9fa", fontWeight: "bold" }}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
              style={{ color: "#f8f9fa", fontWeight: "bold" }}
            >
              Contact
            </NavLink>
          </ul>
          <ul className="m-0 p-0 py-3 position-relative">
            <NavLink
              to="/cart"
              className="list-unstyled text-light p-0 pointer"
            >
              <i className="fa-solid fa-cart-shopping fs-3"></i>
            </NavLink>
            <span
              className="text-decoration-none count rounded-pill text-dark position-absolute top-0 roght"
              style={{ backgroundColor: "yellow", right:'-49%' }}
            >
              {cartAllProduct?.length}
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
