import React from 'react'
import TitleDropdownMenuSideBar from './TitleDropdownMenuSideBar'
import SubMenuSideBar from './SubMenuSideBar'
import { NavDropdown } from 'react-bootstrap'

const MenuElementsDropdownSideBar = ({ menuId, menuHref, icon, state, subState, title, handle }) => {
    return (
        <NavDropdown id={menuId} href={menuHref} className={`${state === menuId ? 'custom-main-active' : ''}`}
            title={
                <TitleDropdownMenuSideBar icon={icon} title={title} />
            } >

            <SubMenuSideBar menuId="Buttons" menuHref="#Buttons" handle={handle} title="Buttons" state={subState} />
            <SubMenuSideBar menuId="Typography" menuHref="#Typography" handle={handle} title="Typography" state={subState} />
            <SubMenuSideBar menuId="OtherElements" menuHref="#OtherElements" handle={handle} title="Other Elements" state={subState} />


        </NavDropdown>
    )
}

export default MenuElementsDropdownSideBar