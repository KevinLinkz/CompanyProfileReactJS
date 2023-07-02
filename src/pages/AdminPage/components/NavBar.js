import React from 'react'
import { Container, Dropdown, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSolidEnvelope } from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import imgProfile from './assets/profile.jpg'

const NavBar = () => {
    return (
        <section id='navbar-admin'>
            <Navbar expanded={true} className='navbar-contents'>
                <Container>
                    {/* <Navbar.Toggle><div><GiHamburgerMenu></GiHamburgerMenu></div></Navbar.Toggle> */}

                    <Navbar.Brand>
                        <div className='icon-background'><GiHamburgerMenu></GiHamburgerMenu></div>
                        <Form.Group controlId="searchInput">
                            <Form.Control type="search" placeholder="Search" />
                        </Form.Group>
                    </Navbar.Brand>


                    <Nav className='item'>
                        <NavDropdown title={<span><div className='icon-background'><BiSolidEnvelope /></div>Messages<RiArrowDownSLine className='nav-custom-arrow' /></span>}>
                        </NavDropdown>
                        <NavDropdown title={<span><div className='icon-background'><IoMdNotifications /></div>Notifications<RiArrowDownSLine className='nav-custom-arrow' /></span>}>
                        </NavDropdown>
                        <NavDropdown title={<span><div className='icon-background'><img alt='profile' src={imgProfile} /></div>Admin<RiArrowDownSLine className='nav-custom-arrow' /></span>}>
                        </NavDropdown>

                    </Nav>


                </Container>
            </Navbar>


        </section>
    )
}

export default NavBar