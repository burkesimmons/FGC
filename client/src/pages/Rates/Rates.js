import React, { Component } from "react";
import { Container, Col } from 'reactstrap';


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
          <li>Deposits of $100 due upon booking and is payable through check, credit card, or Venmo.</li>
          <li>Make checkes payable to: <Col><p style={{marginBottom: '0rem',}}><b>FGC</b></p> <p style={{marginBottom: '0rem'}}><b>PO Box 443</b></p> <p style={{marginBottom: '0rem'}}><b>Manilla, UT</b></p> <p><b>84046.</b></p></Col></li>
          <li>Balance to be paid in full at end of trip. Payable by cash or credit card.</li>
          <li>Cancellation Policy: Full refund or rescheduling option for trips cancelled outside of 10 days of scheduled trip date.</li>
        </ul>
        
      </Container>
    );
  }
}

export default Captain;
