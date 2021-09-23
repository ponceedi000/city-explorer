import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends Component {


  render() {


    return (







      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{this.props.weather.date}</ListGroup.Item>
          <ListGroup.Item>{this.props.weather.description}</ListGroup.Item>
        </ListGroup>
      </Card>





    );
  }
}
export default Weather;