import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>Ebenézer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="#link">Quem Somos</Nav.Link>
                <Nav.Link href="#link">Contribue!</Nav.Link>
                <NavDropdown title="Projetos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;