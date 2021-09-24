import { Component } from 'react';
import axios from 'axios';
// import './App.css'
import Weather from './Weather.js'
import Movies from './Movies.js'
import Error from './Error.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      weatherData: [],
      movieData: [],
      displayMovies: false,
      errorMessage: '',
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
      this.getForecast();
      this.getMovies();

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



  getForecast = async () => {

    try {
      // This URL is the path to my remote server
      const weatherUrl = `https://city-explorer-eddie.herokuapp.com/weather?searchQuery=${this.state.searchQuery}&lon=${this.state.location.lon}&lat=${this.state.location.lat}`
      // This URL is the path to my local server
      //const weatherUrl = `http://localhost:3001/weather?lon=${this.state.location.lon}&lat=${this.state.location.lat}`

      const theWeather = await axios.get(weatherUrl);

      let weatherArray = theWeather.data.map(weather => {
        return weather;
      });
      this.setState({
        weatherData: weatherArray,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getMovies = async () => {

    try {
      // This URL is the path to my remote server
      const movieUrl = `https://city-explorer-eddie.herokuapp.com/movies?searchQuery=${this.state.searchQuery}`
      // This URL is the path to my local server
      //const movieUrl = `http://localhost:3001/movies?searchQuery=${this.state.searchQuery}`

      const movieData = await axios.get(movieUrl);

      this.setState({
        movieData: movieData.data,
        displayMovies: true,
      });
    } catch (err) {
      console.log(err)
      this.setState({
        displayMovies: false,
      })
    }
  };


  render() {
    console.log(this.state.movieData);
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
                <h3> Latitude: {this.state.location.lat}  |  Longitude: {this.state.location.lon}</h3>
              }
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col>
              {this.state.location.place_id &&
                <img src={this.state.map} alt="Map" />
              }
            </Col>
            <Col>
              {this.state.weatherData.map(weather => (
                <Weather weather={weather} />
              ))}
            </Col>
            <Col>
              {this.state.movieData.slice(0, 5).map(movie => (
                <Movies movie={movie} />
              ))}
            </Col>
          </Row>
          <Col>
            {
              this.state.error && <h3>Please enter a city (make sure you're spelling it correctly)</h3>
            }
          </Col>


        </Container>
      </>
    )
  }
}

export default Main;