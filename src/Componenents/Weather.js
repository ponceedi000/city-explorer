import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends Component {


  render() {


    return (






      <CardGroup className='shadow-sm p-3 mb-5 bg-black rounded' style={{ width: '35rem', marginTop: '5rem'}}>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Date:</strong> {this.props.weather.date}</ListGroup.Item>
          <ListGroup.Item><strong>Description:</strong> {this.props.weather.description}</ListGroup.Item>
        </ListGroup>
      </Card>
      </CardGroup>





    );
  }
}
export default Weather;