import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import {NavLink} from "react-router-dom"
 
export function MyNav() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="text-light navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#">Rush</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/products/0/edit">
                Add products
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
