import React, { Component } from "react";
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import './Gallery.css';


class Gallery extends Component {

  render() {
    return (
      <Container style={{paddingTop: '10px'}}>
      <Row>
        <Col sm="12" md="6" lg="6" xl="3">
            <img src="PicsToUse/20170712_105004_005.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20160620_073722.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20160623_094429.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20160713_081329.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20160719_062226.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20160719_063700.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20160727_073440.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20160804_073910.jpg" className="sidePic" alt="fish pic"></img>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3">
            <img src="PicsToUse/20160808_090018.jpg" className="sidePic" alt="fish pic"></img>
	    	<img src="PicsToUse/20160811_082020.jpg" className="sidePic" alt="fish pic"></img>
	    	<img src="PicsToUse/20160818_082638.jpg" className="sidePic" alt="fish pic"></img>
	    	<img src="PicsToUse/20160827_132919.jpg" className="sidePic" alt="fish pic"></img>
	    	<img src="PicsToUse/20170320_092001.jpg" className="sidePic" alt="fish pic"></img>
	    	<img src="PicsToUse/20170411_101109(0).jpg" className="sidePic" alt="fish pic"></img>
	    	<img src="PicsToUse/20170518_112228_001.jpg" className="sidePic" alt="fish pic"></img>
	    	<img src="PicsToUse/20170610_092402.jpg" className="sidePic" alt="fish pic"></img>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3">
            <img src="PicsToUse/20170714_105824.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20171213_091644.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20171213_095904.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20180127_090838.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20180127_130413.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20180127_143002.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20180127_160208.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/20180127_163336.jpg" className="sidePic" alt="fish pic"></img>
        </Col>
        <Col sm="12" md="6" lg="6" xl="3">
            <img src="PicsToUse/20180130_102040.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/1228171116b.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/FB_IMG_1463696034139.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/FB_IMG_1472011243834.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/FB_IMG_1515993572555.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/FullSizeR.jpg" className="sidePic" alt="fish pic"></img>
            <img src="PicsToUse/IMG_1502.jpg" className="sidePic" alt="fish pic"></img>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Gallery;
