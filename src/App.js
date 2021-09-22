import { Component } from 'react';
import axios from 'axios';
// import './App.css'
import Header from './Componenents/Header.js'
import Footer from './Componenents/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Componenents/Map.js'


class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Map />
        <Footer />
      </>
    )
  }
}

export default App;

