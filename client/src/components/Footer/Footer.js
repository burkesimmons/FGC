import React, { Component} from "react";
import {
  NavLink,
  Row,
  Col,
  Container
} from 'reactstrap';
import './Footer.css';
import {Icons} from '../FontAwesomeIcons';



class Footer extends Component {
  
  render() {
    return(
        <footer>
        <Container fluid className="footerContainer" style={{backgroundColor: 'beige'}}>
        <Row>
          <Col sm="12" md="3" className="">
            <Container fluid className="icons d-flex justify-content-center align-items-center">
              <Icons/>
            </Container>
          </Col>
          <Col sm="12" md="6" className="d-flex justify-content-center align-items-center ">
            <img src="FGClogo.png" className="fgcLogoFooter img-fluid" alt="Flaming Gorge Charters Logo"></img>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            &copy; 2018<script>new Date().getFullYear()>2010&&document.write("-"+new Date().getFullYear());</script>, <NavLink className="copyright" href="https://burkesimmons.github.io/Responsive-Portfolio/">Burke Simmons.</NavLink>
          </Col>




        </Row>
      </Container>
      </footer>
    );
  }
}

  export default Footer;
