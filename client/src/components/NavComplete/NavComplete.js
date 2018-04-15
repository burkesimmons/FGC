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
import './NavComplete.css';

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
  



  <Navbar style={{backgroundColor: 'saddlebrown'}} dark expand="lg">
    <NavbarBrand href="/" className="romanFont" style={{fontSize: '3rem'}}>Flaming Gorge Charters</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
     <Collapse isOpen={this.state.isOpen} navbar={true} style={{fontSize: '1.25rem'}}>
      <Nav className="d-flex justify-content-end text-right" navbar={true}>
        <NavItem>
          <NavLink href="/captain" style={{textTransform: 'uppercase'}}>Get to know the Captain</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/rates" style={{textTransform: 'uppercase'}}>Rates</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/bring" style={{textTransform: 'uppercase'}}>Bring</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="gallery" style={{textTransform: 'uppercase'}}>Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/lodging" style={{textTransform: 'uppercase'}}>Lodging</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="history" style={{textTransform: 'uppercase'}}>Flaming Gorge History</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
    );
  }
   }

  export default NavComplete;
