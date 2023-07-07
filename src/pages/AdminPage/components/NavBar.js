import React from 'react'
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
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

                    <Navbar.Brand>
                        <div className='icon-background'><GiHamburgerMenu></GiHamburgerMenu></div>
                        <Form.Group controlId="searchInput">
                            <Form.Control type="search" placeholder="Search" />
                        </Form.Group>
                    </Navbar.Brand>


                    <Nav className='item'>

                        <NavDropdown className='dropdown-messages' title={<span><div className='icon-background'><BiSolidEnvelope /></div>Messages<RiArrowDownSLine className='nav-custom-arrow' /></span>}>
                            <NavDropdown.Item>
                                <img className='img-profile' alt='profile' src={imgProfile} />
                                <div>
                                    <h6>John send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <img className='img-profile' alt='profile' src={imgProfile} />
                                <div>
                                    <h6>John send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <img className='img-profile' alt='profile' src={imgProfile} />
                                <div>
                                    <h6>John send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </NavDropdown.Item>


                            <NavDropdown.Item><h6>See all messages </h6></NavDropdown.Item>


                        </NavDropdown>
                        <NavDropdown className='dropdown-notifications' title={<span><div className='icon-background'><IoMdNotifications /></div>Notifications<RiArrowDownSLine className='nav-custom-arrow' /></span>}>
                            <NavDropdown.Item><h6>Profile updated </h6><small>15 minutes ago</small></NavDropdown.Item>
                            <NavDropdown.Item><h6>New User added </h6><small>15 minutes ago</small></NavDropdown.Item>
                            <NavDropdown.Item><h6>Password changed </h6><small>15 minutes ago</small></NavDropdown.Item>
                            <NavDropdown.Item><h6>See all notifications </h6></NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className='dropdown-profile' title={<span><div className='icon-background'><img className='img-profile' alt='profile' src={imgProfile} /></div>Admin<RiArrowDownSLine className='nav-custom-arrow' /></span>}>
                            <NavDropdown.Item>My Profile</NavDropdown.Item>
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                            <NavDropdown.Item>Log out</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>


                </Container>
            </Navbar>


        </section >
    )
}

export default NavBar