import React, {Component} from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    MenuItem,
} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
                <Navbar  inverse collapseOnSelect fixedTop className="Top">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#" className="animated flip About">Jk Chao</a>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem className="About" eventKey={1} href="#">About</NavItem>
                        <NavItem className="Ability" eventKey={2} href="#">Ability</NavItem>
                        <NavItem className="Items" eventKey={3} href="#">Items</NavItem>
                    </Nav>
                 </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Header;