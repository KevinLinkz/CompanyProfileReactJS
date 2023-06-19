import { useEffect, useState } from 'react'
import { Container, Nav, NavDropdown, Navbar, Modal } from 'react-bootstrap'
import { Link } from 'react-scroll';

const NavBar = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModalOpen = () => {
        window.addEventListener('scroll', handleScrollFixNavBar)
        setShowModal(true);
    }

    const handleModalClose = () => {
        window.removeEventListener('scroll', handleScrollFixNavBar)
        setShowModal(false);
    }

    const handleScrollFixNavBar = () => {
        var navBar = document.getElementById("navbar");
        var banner = document.getElementById("banner");
        var defaultActiveKey = document.querySelector(".defaultActiveKey")

        var navBarHeight = navBar.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition > navBarHeight) {
            navBar.classList.remove("wow", "fadeInLeft");
            navBar.classList.add("fixed-navbar");
            defaultActiveKey.classList.remove("nav-link", "activated")
            banner.style.marginTop = "5.5em";
        } else {
            navBar.classList.add("wow", "fadeInLeft");
            navBar.classList.remove("fixed-navbar")
            defaultActiveKey.classList.add("nav-link", "active")
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
            {/* // <Navbar expand="lg" bg='light' id='NavBar'> */}
            <Navbar className='navbar-contents' expand="lg" expanded={false} >
                <Container >
                    <Navbar.Brand href='#top-bar'>Reve<span>al</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={handleModalOpen}></Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Container className="nav-detail">
                            {/*
                            me-auto for position content on the left 
                            mr-auto for position content on the right 
                        */}
                            <Nav defaultActiveKey="top-bar">
                                <Link {...propLink} to='top-bar' className='defaultActiveKey nav-link active'>Home</Link>
                                <Link {...propLink} to='profile' >About Us</Link>
                                <Link {...propLink} to='services'>Services</Link>
                                <Link {...propLink} to='portfolio'>Portfolio</Link>
                                <Link {...propLink} to='our-teams'>Team</Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 1</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 2</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 3</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 4</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 5</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link {...propLink} to='action/3.1'>Drop Down 6</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Link {...propLink} to='contact-us'>Contact</Link>
                            </Nav >
                        </Container >
                    </Navbar.Collapse >
                    <Modal
                        show={showModal}
                        onHide={handleModalClose}
                        className="modal-navbar-dialog"
                    >
                        <Modal.Header closeButton >
                            <Modal.Title><span className='first-span-modal'>Reve</span><span className='lastNameModal'>al</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Container id='modal-body-link' >
                                <Link {...propLink} to='banner'>Home</Link>
                                <Link {...propLink} to='profile' >About Us</Link>
                                <Link {...propLink} to='services' >Services</Link>
                                <Link {...propLink} to='portfolio' >Portfolio</Link>
                                <Link {...propLink} to='our-teams' >Team</Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Drop Down 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Drop Down 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Drop Down 3</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Drop Down 4</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">Drop Down 5</NavDropdown.Item>
                                </NavDropdown>
                                <Link {...propLink} to='contact-us' >Contact</Link>

                            </Container>
                        </Modal.Body >
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal >
                </Container >
            </Navbar >

        </section >


    )
}

export default NavBar