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
    return (
      <div style={{backgroundColor: 'white'}}>
        <Navbar style={{backgroundColor: '#008066'}} dark expand="md">
          <NavbarBrand href="/">Flaming Gorge Charters</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/components/">Get to know the Captain</NavLink>
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
