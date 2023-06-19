import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Test() {
    useState(() => {
        const handleScrollFixNavBar = () => {
            var navBar = document.getElementById("test2");
            var navBarHeight = navBar.offsetHeight;
            var scrollPosition = window.scrollY;
            if (scrollPosition > navBarHeight) {
                navBar.classList.add("fixed-navbar");
            } else {
                navBar.classList.remove("fixed-navbar")
            }
        }
        window.addEventListener('scroll', handleScrollFixNavBar)
        return () => {
            window.removeEventListener('scroll', handleScrollFixNavBar)
        }
    }, []);

    return (
        <section id='test2' >
            <Navbar  >
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )

}
