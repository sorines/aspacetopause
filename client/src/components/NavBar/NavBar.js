import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => (
    <div>
        <Nav>
            <NavItem>
                <NavLink><Link to="/">HOME</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to="/blog">BLOG</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to="/about">ABOUT</Link></NavLink>
            </NavItem>
        </Nav>
    </div>
);

export default NavBar;