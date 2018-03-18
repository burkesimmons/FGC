import React, { Component } from 'react';
import './Home.css';
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



class Home extends Component {
  

  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        <Jumbotron fluid className="backgroundImage">
           <Container fluid>
            <img src="FGClogo.png" className="FGClogo d-flex justify-content-end"></img>
            <h1 className="display-3">Your slogan</h1>
            <p className="lead">A little blurb about what this is.</p>

        </Container>
        </Jumbotron>

         
          <Container style={{paddingTop: '10px'}}>
            <Row>
              <Col className="col-3">
                  
              </Col>
              <Col className="col-6">
                <Navbar style={{backgroundColor: 'white'}}>
                 <h2>To book your trip, call Captain Randy at #801-633-6603</h2>
                </Navbar>
              </Col>
              <Col className="col-3">
                <img src="AshleyNationalForestPermit.png" style={{width: '100%'}}></img>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Home;
