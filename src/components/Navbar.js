import React, { Component } from "react";
import logo from "../images/bhagavad-gita.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
export default class Navbars extends Component {
  render() {
    return (
      <>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light text-warning">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img
                src={logo}
                alt=""
                width={30}
                height={30}
                className="d-inline-block align-text-top"
              />
              Bhagavad Gita
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/moresholk">
                    More Shlok
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Bhagavad Gita
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto ">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link active" to="/moreshlok">
                  More Shlok
                </Link>
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
