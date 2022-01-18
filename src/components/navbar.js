import React from "react";
import {Container, Navbar, Nav, Button, Row, Card} from 'react-bootstrap';
import Dashboard from "../pages/Admin/Dashboard";

function navbar(){
    return(
        <Navbar className="" bg="dark" variant="dark">
                <Navbar.Brand className="navheading">Admin Dashboard</Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Classes</Nav.Link>
                    <Nav.Link href="#">Teachers</Nav.Link>
                    <Nav.Link href="#">Students</Nav.Link>
                </Nav>
            </Navbar>
    )

}

export default navbar;