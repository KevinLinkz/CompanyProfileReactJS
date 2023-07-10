import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { AiFillDashboard } from 'react-icons/ai'
import { MdOutlineWidgets } from 'react-icons/md'
import { LiaKeyboardSolid } from 'react-icons/lia'
import { BsTable } from 'react-icons/bs'
import { AiOutlineBarChart } from 'react-icons/ai'
import { RiPagesLine } from 'react-icons/ri'

import imgProfile from './assets/profile.jpg'
import MenuSideBar from './microComponents/MenuSideBar'
import MenuElementsDropdownSideBar from './microComponents/MenuElementsDropdownSideBar'
import MenuPagesDropdownSideBar from './microComponents/MenuPagesDropdownSideBar'


const SideBar = () => {
    const [subActiveItem, setSubActiveItem] = useState();
    const [mainActiveItem, setMainActiveItem] = useState('test');
    const isLoad = useRef(false);

    //target is object children
    //current target is that object
    // const elementNavLink = e.currentTarget.parentElement.parentElement.querySelector('a');  
    // e.stopPropagation(); for stop dropdown

    const toggleSubActiveItem = (e) => {
        const elementNavDropdown = e.currentTarget.parentElement.parentElement.querySelector('a');
        setSubActiveItem(e.target.id);
        setMainActiveItem(elementNavDropdown.id);
        e.stopPropagation();

    };

    const toggleMainActiveItem = useCallback((e) => {
        setMainActiveItem(e.currentTarget.id);
        setSubActiveItem();
    }, [])

    const addHandleSideBarMenu = useCallback(() => {
        const navItems = document.querySelectorAll('.nav-custom')

        navItems.forEach(element => {
            element.addEventListener('click', toggleMainActiveItem)
        });

        return () => {
            navItems.forEach(element => {
                element.removeEventListener('click', toggleMainActiveItem)
            });
        }

    }, [toggleMainActiveItem])


    useEffect(() => {
        if (!isLoad.current) {
            setMainActiveItem('nav-dashboard');
            addHandleSideBarMenu();
            isLoad.current = true;
            return () => {
            };
        }

    }, [addHandleSideBarMenu]);
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
                    <Nav>
                        <MenuSideBar menuId="nav-dashboard" menuHref="#dashboard" icon={<AiFillDashboard />} title="Dashboard" state={mainActiveItem} />
                        <MenuElementsDropdownSideBar menuId="nav-elements" menuHref="#elements" icon={<HiOutlineDesktopComputer />} state={mainActiveItem} subState={subActiveItem} title="Elements" handle={(e) => { toggleSubActiveItem(e) }} />
                        <MenuSideBar menuId="nav-widgets" menuHref="#widgets" icon={<MdOutlineWidgets />} title="Widgets" state={mainActiveItem} />
                        <MenuSideBar menuId="nav-forms" menuHref="#forms" icon={<LiaKeyboardSolid />} title="Forms" state={mainActiveItem} />
                        <MenuSideBar menuId="nav-tables" menuHref="#tables" icon={<BsTable />} title="Tables" state={mainActiveItem} />
                        <MenuSideBar menuId="nav-charts" menuHref="#charts" icon={<AiOutlineBarChart />} title="Charts" state={mainActiveItem} />
                        <MenuPagesDropdownSideBar menuId="nav-pages" menuHref="#pages" icon={<RiPagesLine />} state={mainActiveItem} subState={subActiveItem} title="Pages" handle={(e) => { toggleSubActiveItem(e) }} />
                    </Nav>
                </Navbar>
            </Container>
        </section>
    )
}

export default SideBar