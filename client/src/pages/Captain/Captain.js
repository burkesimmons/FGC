import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
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


class Captain extends Component {

  render() {
    return (
     
     
      <Row>
        <Col sm="12" md="6">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Captain Randy Browning</CardTitle>
              <CardText>
                Hey there, so glad you found my website and are thinking of coming fishing with me! I've been fishing since I was 10 years old, starting out with bank fishing, then moving to fly fishing for many years and eventually getting my own boat and spending many days on the open water. I've been fishing Flaming Gorge now for 6 years and have spent hundreds of days out on the water, catching trophy kokanee salmon, lake trout, and rainbow trout.  I'd love to welcome you on my boat and show you what I've learned in hopes that you can make lasting memories with your family and friends.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="6">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Captain Randy Browning</CardTitle>
              <CardText>
                My wife Tiffany and I, along with our 3 kids; Riley, Reagan, and Oakley, love waking up early to go spend time together on the lake chasing the famed trophy fish of Flaming Gorge.
              </CardText>
            </CardBody>
          </Card>
        </Col>

      </Row>
    
    );
  }
}

export default Captain;
