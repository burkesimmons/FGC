import React, { Component } from "react";
import { Container } from 'reactstrap';


class Bring extends Component {

  render() {
    return (
      <Container>
        <h2>What to Bring:</h2>

          <h4>Items included are...</h4>
          <ul>
            <li>All fishing gear.</li>
            <li>We will clean and prepare all fish for transport.</li>
            <li>Snacks and drink.</li>
              <ul type="circle">
                <li>You are welcome to bring your own.</li>
                <li>Lunch available for an added fee upon request.</li>
              </ul>
          </ul>
      
          <h4>Needed Items...</h4>
          <ul>
            <li>Fishing license with WY or UT reciprocal stamp.</li>
            <li>Hat, sunglasses, sunscreen.</li>
            <li>Warm clothing. Even the nicest days start out chilly.</li>
            <li>Personal items.</li>
            <li>Camera.</li>
            <li>A cooler to transport your catch. (Cooler can be left in car.)</li>
            <li>A great attitude!! This always makes for a better day.</li>
          </ul>    
        <h5>* Space is limited, so be mindful of what you bring on the boat.</h5>
        <h5>* NO restroom facilities on the boat. Prepare accordingly.</h5>

      </Container>
    );
  }
}

export default Bring;
