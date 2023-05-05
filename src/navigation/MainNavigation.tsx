import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./MainNavigation.css";

import MainHeader from './MainHeader'
import Backdrop from './Backdrop'
import SideDrawer from './SideDrawer'
import NavLinks from './NavLinks'
import { useStyles } from "../styles"


const MainNavigation = (props) => {

    const classes = useStyles();

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false)
    };

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>

                <h1 className={classes.mainHeader}>
                    <Link to="/">Issue Logger</Link>
                </h1>
                <button className={classes.burgerButton} onClick={openDrawerHandler}>
                    MENU
                </button>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation