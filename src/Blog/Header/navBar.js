import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import React from 'react';
 class BlogNavBar extends React.Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Blog</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as="div">
              <Link to="/users" className="nav-link active">Users</Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link to="/posts" className="nav-link">Posts</Link>
            </Nav.Link>
          </Nav>
        </Navbar>);
  }
}


export default (BlogNavBar);