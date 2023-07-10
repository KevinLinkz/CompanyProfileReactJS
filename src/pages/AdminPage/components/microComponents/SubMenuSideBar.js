import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const SubMenuSideBar = ({ menuId, menuHref, handle, title, state }) => {
    return (
        <NavDropdown.Item href={menuHref} onClick={handle}>
            <div id={menuId} className={`background-item ${state === menuId ? 'nav-custom-dropdown' : ''}`}>
                {title}
            </div>
        </NavDropdown.Item>
    )
}

export default SubMenuSideBar