import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>

      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Services</Link>
    </Navbar>
  );
};

export default Navbars;
