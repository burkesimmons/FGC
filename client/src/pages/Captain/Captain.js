import React, { Component } from "react";
import {
<<<<<<< HEAD
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
=======
>>>>>>> 505800dd8f3cd0ef083ff0682f807484013c39b5
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


<<<<<<< HEAD
class Captain extends Component {
=======
class Detail extends Component {
>>>>>>> 505800dd8f3cd0ef083ff0682f807484013c39b5

  render() {
    return (
     
     
<<<<<<< HEAD
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
=======
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
>>>>>>> 505800dd8f3cd0ef083ff0682f807484013c39b5
    
    );
  }
}

<<<<<<< HEAD
export default Captain;
=======
export default Detail;
>>>>>>> 505800dd8f3cd0ef083ff0682f807484013c39b5
