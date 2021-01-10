import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { 
    Link
} from 'react-router-dom';

const menuStyle = {
    color: 'rgba(0,0,0,.5)',
    textDecoration: 'none'
};

class Menu extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>Ebenézer</Navbar.Brand>
            <Navbar.Toggle aria-controls="nav-menu" />
            <Navbar.Collapse id="nav-menu">
                <Nav className="mr-auto">
                <Nav.Link>
                    <Link style={menuStyle} to={'/'}>Home</Link>
                </Nav.Link>
                <Nav.Link href="#">Quem Somos</Nav.Link>
                <Nav.Link href="#">Contribue!</Nav.Link>
                <Nav.Link href="#">Projetos</Nav.Link>
                <Nav.Link>
                    <Link style={menuStyle} to={'/contact'}>Contato</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;