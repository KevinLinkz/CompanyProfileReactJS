import React from 'react'
import TitleDropdownMenuSideBar from './TitleDropdownMenuSideBar'
import SubMenuSideBar from './SubMenuSideBar'
import { NavDropdown } from 'react-bootstrap'

const MenuPagesDropdownSideBar = ({ menuId, menuHref, icon, state, subState, title, handle }) => {
    return (
        <NavDropdown id={menuId} href={menuHref} className={`${state === menuId ? 'custom-main-active' : ''}`}
            title={
                <TitleDropdownMenuSideBar icon={icon} title={title} />
            } >

            <SubMenuSideBar menuId="SignIn" menuHref="#SignIn" handle={handle} title="Sign In" state={subState} />
            <SubMenuSideBar menuId="SignUp" menuHref="#SignUp" handle={handle} title="Sign Up" state={subState} />
            <SubMenuSideBar menuId="ErrorPage" menuHref="#ErrorPage" handle={handle} title="404 Error" state={subState} />
            <SubMenuSideBar menuId="BlankPage" menuHref="#BlankPage" handle={handle} title="Blank Page" state={subState} />


        </NavDropdown>
    )
}

export default MenuPagesDropdownSideBar