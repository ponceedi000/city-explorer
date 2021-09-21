import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'



class Header extends Component {
  render() {
    return (

      <>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-md-center">
            <Navbar.Brand href="#home">
              City Explorer
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header;