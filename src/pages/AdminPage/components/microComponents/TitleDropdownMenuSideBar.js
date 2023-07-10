import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const TitleDropdownMenuSideBar = ({ title, icon }) => {
    return (
        <div className='menu-item'>
            <div className='background-icon-item'>{icon}</div>
            <h6>{title}</h6>
            <RiArrowDownSLine className='nav-custom-arrow' />
        </div>
    )
}

export default TitleDropdownMenuSideBar