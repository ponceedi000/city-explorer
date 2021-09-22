import { Component } from 'react';
import axios from 'axios';
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    
    try {
      const response = await axios.get(url);
      const location = response.data[0];

      this.setState({
        location,
        error: false,
      });

    } catch (error) {
      console.error('Unable to find city', this.state.searchQuery);
      this.setState({ error: true });
    }

    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12&size=500x500&format=jpeg`
    const responseTwo = await axios.get(mapUrl) 
    const map = responseTwo.config.url;
    this.setState({
      map,
    })
  }



  render() {
    return (
      <>
        <Container fluid>
          <Form>
            <Row className="justify-content-md-center">
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                  Please Enter City Name
                </Form.Label>
                <Form.Control onChange={(event) => this.setState({ searchQuery: event.target.value })} placeholder="Ex: Seattle" />
              </Col>
              <Col xs="auto" className="my-1">
                <Button onClick={this.getLocation} as="input" type="submit" value="Submit" variant="primary" />{' '}
              </Col>
            </Row>
          </Form>

          <Row className="justify-content-md-center">
            <Col className="align-items-md-center">
              {this.state.location.place_id &&
                <h3>The city is: {this.state.location.display_name}</h3>
              }
            </Col>

            <Col>
              {this.state.location.place_id &&
                <img src={this.state.map} alt="Map" />
              }
            </Col>
            <Col>
              {this.state.location.place_id &&
                <h3> Latitude: {this.state.location.lat}  |  Longitude: {this.state.location.lon}</h3>
              }
            </Col>
            </Row>
            {
              this.state.error && <h3>Please enter a city (make sure you're spelling it correctly)</h3>
            }          
        </Container>
      </>
    )
  }
}

export default Map;