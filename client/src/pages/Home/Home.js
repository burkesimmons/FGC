import React, { Component } from 'react';
import FGClogo from './FGClogo.png';
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
      
          <Container className="container" style={{paddingTop: '10px'}}>
            <Row>
              <Col className="col-3">
                  <img src="PicsToUse/20160502_063214_001.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160620_073722.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160623_094429.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160713_081329.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160719_062226.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160719_063700.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160727_073440.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160804_073910.jpg" className="sidePic"></img>
              </Col>
              <Col className="col-6">
                <Navbar style={{backgroundColor: 'white'}}>
                  <img src={FGClogo} className="FGClogo"></img>
                </Navbar>
              </Col>
              <Col className="col-3">
                <img src="PicsToUse/20160808_090018.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160811_082020.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160818_082638.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20160827_132919.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20170320_092001.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20170411_101109(0).jpg" className="sidePic"></img>
                  <img src="PicsToUse/20170518_112228_001.jpg" className="sidePic"></img>
                  <img src="PicsToUse/20170610_092402.jpg" className="sidePic"></img>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Home;
