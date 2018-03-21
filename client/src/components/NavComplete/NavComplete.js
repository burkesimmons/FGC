import React, { Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavComplete extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
   render() {
      return(
  



  <Navbar style={{backgroundColor: '#008066'}} dark expand="lg">
    <NavbarBrand href="/">Flaming Gorge Charters</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
     <Collapse isOpen={this.state.isOpen} navbar={true}>
      <Nav className="ml-auto" navbar={true}>
        <NavItem>
          <NavLink href="/captain">Get to know the Captain</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/rates">Rates</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/bring">Bring</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="gallery">Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/lodging">Lodging</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="history">Flaming Gorge History</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
    );
  }
   }

  export default NavComplete;
