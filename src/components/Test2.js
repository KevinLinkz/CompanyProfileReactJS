import React, { useEffect, useState } from 'react'
import { Button, Container, Modal, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll';

export default function Test() {
    const [showModal, setShowModal] = useState(false);
    const handleScrollFixNavBar = () => {
        var navBar = document.getElementById("navbar");
        var banner = document.getElementById("banner");
        // var defaultActiveKey = document.querySelector(".defaultActiveKey")
        var navBarHeight = navBar.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition > navBarHeight) {
            navBar.classList.remove("wow", "fadeInLeft");
            navBar.classList.add("fixed-navbar");
            // defaultActiveKey.classList.remove("nav-link", "activated")
            banner.style.marginTop = "5.5em";
        } else {
            navBar.classList.add("wow", "fadeInLeft");
            navBar.classList.remove("fixed-navbar")
            // defaultActiveKey.classList.add("nav-link", "active")
            banner.style.marginTop = "0";
        }
    }

    useEffect(() => {
        handleScrollFixNavBar()
        window.addEventListener('scroll', handleScrollFixNavBar)
        return () => {
            window.removeEventListener('scroll', handleScrollFixNavBar)
        }
    }, []);
    const handleModalOpen = () => {
        // window.addEventListener('scroll', handleScrollFixNavBar)
        setShowModal(true);
    }

    const handleModalClose = () => {
        // window.removeEventListener('scroll', handleScrollFixNavBar)
        setShowModal(false);
    }
    var propLink = {
        activeClass: "nav-link active",
        to: "portfolio",
        spy: true,
        smooth: "easeInQuad",
        offset: -90,
        duration: 100,
        isDynamic: true

    }

    return (
        <section id='navbar' className='wow fadeInLeft'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleModalOpen} />
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
            <div>
                <button onClick={handleModalOpen}>Open Modal</button>

                {showModal && (
                    <div className="modals-overlay">
                        test
                        <div className="modals">
                            test1
                            <div className="modals-header">
                                test
                                <h2>Modal Title</h2>
                                <button className="close-button" onClick={handleModalClose}>
                                    X
                                </button>
                            </div>
                            <div className="modals-content">
                                <p>Modal Content</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    )

}
