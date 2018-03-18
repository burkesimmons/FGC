import React, { Component } from "react";
import { Container, NavLink, NavItem, Nav } from 'reactstrap';


class History extends Component {

  render() {
    return (
      <Container>
        <Nav vertical>
        <h2>Flaming Gorge History:</h2>
          <NavItem>
            <NavLink href="http://www.flaminggorgecountry.com/Get-a-Little-History"><h4>Flaming Gorge Country</h4></NavLink>
          </NavItem>
        </Nav>
          
      </Container>
    );
  }
}

export default History;
