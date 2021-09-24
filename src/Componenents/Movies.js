import { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Movie extends Component {


  render() {


    return (


<CardGroup className='shadow-sm p-3 mb-5 bg-white rounded'>
      <Card className='movieCard'>
      <Card.Body>
        <Card.Title >{this.props.movie.data.original_title}</Card.Title>
        <Card.Text >
          {this.props.movie.data.overview}
          <br></br>
          
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom"  src={`https://image.tmdb.org/t/p/original${this.props.movie.data.poster_path}`} height='60%' />
      <Card.Footer>
      <small className="text-muted">
          Rating: {this.props.movie.data.popularity}
        </small>
      </Card.Footer>
    </Card>
    </CardGroup>




    );
  }
}
export default Movie;