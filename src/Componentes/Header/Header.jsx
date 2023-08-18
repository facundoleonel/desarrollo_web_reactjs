// imports de bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Router: son las rutas
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Header (){
    return (
      <>
        <Navbar collapseOnSelect expand='lg' bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/">UNER</Navbar.Brand>
            <Navbar.Toggle aria-controls='algo'/>
            <Navbar.Collapse id='algo'>
                {/* <Nav className="me-auto">            
                <Nav.Link as={Link} to='/institucional'>Institucional</Nav.Link>
                <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
}

export {Header};