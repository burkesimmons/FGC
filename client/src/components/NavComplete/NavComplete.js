import React, { Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
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
  



  <Navbar style={{backgroundColor: '#008066'}} dark expand="md">
    <NavbarBrand href="/">Flaming Gorge Charters</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
     <Collapse isOpen={this.state.isOpen} navbar={true}>
      <Nav className="ml-auto" navbar={true}>
        <NavItem>
          <NavLink href="/detail">Get to know the Captain</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Book a Trip
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Rates
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            What to Bring
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Gallery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Kokanee Salmon
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Lake Trout
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Lodging
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Flaming Gorge History
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
    );
  }
   }

  export default NavComplete;
