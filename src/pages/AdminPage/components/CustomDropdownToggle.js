import React, { forwardRef } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const CustomDropdownToggle = forwardRef(({ children, onClick }, ref) => (
    <a href="#" ref={ref} onClick={onClick} className="custom-dropdown-toggle">
        {children} <BsChevronDown />
    </a>
));

export default CustomDropdownToggle