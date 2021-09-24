import { Component } from "react";
import Card from 'react-bootstrap/Card';


class Movie extends Component {


  render() {


    return (



      <Card className='movieCard '>
      <Card.Body>
        <Card.Title >{this.props.data.original_title}</Card.Title>
        <Card.Text >
          {this.props.data.overview}
          <br></br>
          
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom"  src={`https://image.tmdb.org/t/p/original${this.props.data.data.poster_path}`} height='60%' />
      <Card.Footer>
      <small className="text-muted">
          Rating: {this.props.data.data.popularity}
        </small>
      </Card.Footer>
    </Card>





    );
  }
}
export default Movie;