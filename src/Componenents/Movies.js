import { Component } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Movie from './Movie';


class Movies extends Component {


  displayData = (obj) => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(
        <Movie
          data={obj.data[i]} />
      )
    }
    return arr;
  }

  render() {


    return (
      <>
        <CardGroup className='shadow-sm p-3 mb-5 bg-white rounded'>
          {this.displayData(this.props.data.data)}
        </CardGroup>
      </>

    );
  }
}
export default Movies;