import React, { Component } from "react";
import { Container } from 'reactstrap';


class Lodging extends Component {

  render() {
    return (
      <Container>
        <h2>Lodging:</h2>
          <ul>
            <li>Flaming Gorge Motel #435-784-3088</li>
            <li>Rocky Ridge Outpost #435-784-3600</li>
            <li>The Villa Motel #435-784-3007</li>
            <li>The KOA #435-784-3184</li>
            <li>Flaming Gorge Resort #435-889-3773</li>
          </ul>
          
      </Container>
    );
  }
}

export default Lodging;
