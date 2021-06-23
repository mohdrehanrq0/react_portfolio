import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../Header/Header.css'
import MenuIcon from '@material-ui/icons/Menu';
// import {Navbar , NavList ,NavCollapseBtn, NavListItem, Link,Div} from '../Header/HeaderCss'




function Header() {
    return (
        <>
            {/* <Navbar>
                <NavCollapseBtn classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span classNameName="navbar-toggler-icon"></span>
                </NavCollapseBtn>
                <Div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavList classNameName="navbar-nav mr-auto">
                        <NavListItem classNameName="nav-item active">
                            <Link classNameName="nav-link" href="#">About</Link>
                        </NavListItem>
                        <NavListItem classNameName="nav-item">
                            <Link classNameName="nav-link" href="#">Portfolio</Link>
                        </NavListItem>
                        <NavListItem classNameName="nav-item">
                            <Link classNameName="nav-link" href="#">Contact</Link>
                        </NavListItem>
                    </NavList>
                </Div>s
            </Navbar> */}
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top gts_navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><MenuIcon></MenuIcon></span>
                </button>

                <div className="collapse navbar-collapse gts_nav_collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link gts_nav_link middle" href="#sec-two">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link gts_nav_link middle" href="#sec-three">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link gts_nav_link middle" href="#sec-four">Contact</a>
                    </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
