import { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class Error extends Component {

  render(){
    return(
      <Alert variant="danger">{this.props.errorMessage}ERROR MESSAGE HERE</Alert>
    );
  }
}
export default Error;