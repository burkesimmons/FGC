import React, { Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container
} from 'reactstrap';
import './Footer.css';
import { facebookIcon, youtube } from '../FontAwesomeIcons';

class Footer extends Component {
  
  render() {
    return(
        <Container fluid className="footerContainer" style={{backgroundColor: 'aqua'}}>
        <Row>
          <Col>
            &copy; 2018<script>new Date().getFullYear()>2010&&document.write("-"+new Date().getFullYear());</script>, <NavLink className="copyright" href="https://burkesimmons.github.io/Responsive-Portfolio/">Burke Simmons.</NavLink>
          </Col>
          <Col>
            <img src="FGClogo.png" className="fgcLogoFooter" alt="Flaming Gorge Charters Logo"></img>
          </Col>
          <Col>
            { facebookIcon }
            { youtube }
          </Col>




        </Row>
      </Container>
    );
  }
}

  export default Footer;
