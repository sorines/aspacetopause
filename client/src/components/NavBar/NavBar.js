import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <nav>
        <Navbar className="shadow-sm" light expand="md">
          <NavbarBrand href="/">A SPACE TO PAUSE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/" className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog" className="nav-link">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    );
  }
  
}

export default NavBar;