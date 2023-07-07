import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import imgProfile from './assets/profile.jpg'
import { AiFillDashboard } from 'react-icons/ai'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { MdOutlineWidgets } from 'react-icons/md'
import { LiaKeyboardSolid } from 'react-icons/lia'
import { RiArrowDownSLine, RiPagesLine } from 'react-icons/ri'
import { BsTable } from 'react-icons/bs'
import { AiOutlineBarChart } from 'react-icons/ai'
import { Link } from 'react-scroll'

const SideBar = () => {
    //target is object children
    //current target is that object
    var handleActiveItem = (e) => {
        // e.classList.add('active');
        console.log("🚀 ~ file: SideBar.js:16 ~ handleActiveItem ~ e.currentTarget:", e)
    };
    return (
        <section id='sidebar'>
            <Container>
                <a href="/"><h2>#DASHMIN</h2></a>
                <div className='profile-item'>
                    <img className='img-profile' alt='profile' src={imgProfile} />
                    <div className='img-online-icon'></div>
                    <div>
                        <h3>John Doe</h3>
                        <span>Admin</span>
                    </div>
                </div>

                <Navbar>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' ></Navbar.Toggle>
                    <Nav defaultActiveKey="dashboard">
                        <Nav.Link href='#dashboard'>
                            <div className='menu-item'>
                                <div className='background-icon-item'><AiFillDashboard /></div>
                                <h6>Dashboard</h6>
                            </div>
                        </Nav.Link>


                        {/* <Nav.Link href='#elements'> */}
                        <NavDropdown title={
                            <div className='menu-item'>
                                <div className='background-icon-item'><HiOutlineDesktopComputer /></div>
                                <h6>Elements</h6>
                                <RiArrowDownSLine className='nav-custom-arrow' />
                            </div>
                        }>
                            <NavDropdown.Item href='#Buttons' onClick={(e) => { handleActiveItem(e.target) }}>
                                <div className='background-item'>
                                    Buttons
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#Typography'>
                                <div className='background-item'>
                                    Typography
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#OtherElements'>
                                <div className='background-item'>
                                    Other Elements
                                </div>
                            </NavDropdown.Item>

                        </NavDropdown>
                        {/* </Nav.Link> */}
                        <Nav.Link href='#widgets'>
                            <div className='menu-item'>
                                <div className='background-icon-item'><MdOutlineWidgets /></div>
                                <h6>Widgets</h6>
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#forms'>
                            <div className='menu-item'>
                                <div className='background-icon-item'><LiaKeyboardSolid /></div>
                                <h6>Forms</h6>
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#tables'>
                            <div className='menu-item'>
                                <div className='background-icon-item'><BsTable /></div>
                                <h6>Tables</h6>
                            </div>
                        </Nav.Link>
                        <Nav.Link href='#charts'>
                            <div className='menu-item'>
                                <div className='background-icon-item'><AiOutlineBarChart /></div>
                                <h6>Charts</h6>
                            </div>
                        </Nav.Link>
                        <NavDropdown title={
                            <div className='menu-item'>
                                <div className='background-icon-item'><RiPagesLine /></div>
                                <h6>Pages</h6>
                                <RiArrowDownSLine className='nav-custom-arrow' />
                            </div>
                        }>
                            <NavDropdown.Item href='#SignIn'>
                                <div className='background-item'>
                                    Sign In
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#SignUp'>
                                <div className='background-item'>
                                    Sign Up
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#ErrorPage'>
                                <div className='background-item'>
                                    404 Error
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#BlankPage'>
                                <div className='background-item'>
                                    Blank Page
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>





            </Container>
        </section>
    )
}

export default SideBar