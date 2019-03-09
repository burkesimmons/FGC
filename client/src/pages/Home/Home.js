import React, { Component } from 'react';
import './Home.css';
import {
  Navbar,
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';



class Home extends Component {
  

  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        <Jumbotron fluid className="backgroundImage">
         
            <img src="FGClogo.png" className="FGClogo img-fluid" alt="Flaming Gorge Charters Logo"></img>

        </Jumbotron>

         
          <Container style={{padding: '10px'}}>
            <Row>
              <Col className="col-3">
                  
              </Col>
              <Col className="col-6">
                <Navbar style={{backgroundColor: 'white'}}>
                 <h2>To book your trip, call Captain Randy at <a href="tel:8016336603">#801-633-6603</a></h2>

                </Navbar>
              </Col>
              <Col className="col-3 d-flex justify-content-end align-items-end">
                <img src="AshleyNationalForestPermit.png" style={{width: '100px'}} alt="Ashley National Forest Permit logo"></img>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Home;
