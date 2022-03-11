import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav className="nav">
                {/* <NavLogo to="/">
                Logo
            </NavLogo> */}
                {/* <Bars /> */}

                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/project">
                        Project
                    </NavLink>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                    <NavLink to="/hiring">
                        Hiring
                    </NavLink>
                    <NavLink to="/requrments">
                        Requrments
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    {/* <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn> */}
                </NavMenu>
                <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                    <i className="bi bi-facebook" />
                </button>
                <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                    <i className="bi bi-instagram" />
                </button>
                <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                    <i className="bi bi-twitter" />
                </button>
            </Nav>
        </>
    );
};
export default Navbar;