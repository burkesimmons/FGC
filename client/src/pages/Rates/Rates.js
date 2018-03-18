import React, { Component } from "react";
import { Container } from 'reactstrap';


class Captain extends Component {

  render() {
    return (
      <Container>
        <h2>Rates:</h2>
          <h4>* Full Day-</h4>
          <ul>
            <li>1 person - $400</li>
            <li>2 person - $250 per person</li>
            <li>3 person - $200 per person</li>
            <li>4 person - $175 per person</li>
          </ul>
          <h4>* Half Day-</h4>
          <ul>
            <li>1 person - $300</li>
            <li>2 person - $175 per person</li>
            <li>3 person - $135 per person</li>
            <li>4 person - $115 per person</li>
          </ul>
      <h2>Deposits:</h2>
        <ul>
          <li>Deposits: $100 deposit payable through electronic transfers or by check.</li>
          <li>Balance paper on full at eve on trip. Payable through cash per electronic transfers.</li>
          <li>Cancellation Policy: Full refund or rescheduling option for trips cancelled outside of 10 days of scheduled trip date.</li>
        </ul>
        
      </Container>
    );
  }
}

export default Captain;
