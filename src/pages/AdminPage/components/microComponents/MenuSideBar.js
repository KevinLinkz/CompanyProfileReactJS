import React from 'react'
import { Nav } from 'react-bootstrap'


const MenuSideBar = ({ menuId, menuHref, icon, title, state }) => {

    return (
        <Nav.Link id={menuId} className={`nav-custom ${state === menuId ? 'custom-main-active' : ''}`} href={menuHref} >
            <div className='menu-item'>
                <div className='background-icon-item'>{icon}</div>
                <h6>{title}</h6>
            </div>
        </Nav.Link>
    )
}

export default MenuSideBar