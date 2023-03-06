import React from 'react'
import { NavLink } from 'react-router-dom'

import "./NavLinks.css";


const NavLinks = (props) => {

    return (
        <nav>
        <ul className="nav-links">
            <li>
                <NavLink to="/" >
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="../pages/LogIssue" >
                    LOG ISSUE
                </NavLink>
            </li>
            <li>
                <NavLink to="../pages/AllIssues" >
                    ALL ISSUES
                </NavLink>
            </li>
            <li>
                <NavLink to="../pages/SignIn">
                    SIGN IN
                </NavLink>
            </li>
        </ul>
        </nav>
    )

}

export default NavLinks