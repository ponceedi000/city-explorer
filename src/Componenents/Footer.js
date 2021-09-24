import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



class Footer extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-md-center">
            <Navbar.Brand href="#">
              Back to the Top
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Footer;