import { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'

class App extends Component {
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
      console.log(response)
      const location = response.data[0];

      this.setState({
        location,
        error: false,
      });

    } catch (error) {
      console.error('Unable to find city', this.state.searchQuery);
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <>
        <input onChange={(event) => this.setState({ searchQuery: event.target.value })} placeholder="Search for a city!"></input>
        <button onClick={this.getLocation}>Explore!</button>

{/* 
        <Form>
          <Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Please Enter City Name
              </Form.Label>
              <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col xs="auto" className="my-1">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form> */}





        {this.state.location.place_id &&
          <h2>The city is: {this.state.location.display_name}</h2>
        }
        {this.state.location.place_id &&
          <h2> Latitude: {this.state.location.lat}  |  Longitude: {this.state.location.lon}</h2>
        }

        {
          this.state.error && <h2>Please enter a city (make sure you're spelling it correctly)</h2>
        }

      </>
    )
  }
}

export default App;

