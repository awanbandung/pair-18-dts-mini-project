import React from 'react'
import { Nav, Navbar, Container, Stack } from 'react-bootstrap'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <Navbar className='navbar-bg' expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="60"
                        height="70"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Stack direction='horizontal' gap={3}>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'white' }} to="/cek">Best Rated</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'white' }} to="/">New Release</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: 'none', color: 'white' }} to="/">My List</Link></Nav.Link>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
