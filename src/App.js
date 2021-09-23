import { Component } from 'react';
// import axios from 'axios';
// import './App.css'
import Header from './Componenents/Header.js'
import Footer from './Componenents/Footer.js'
import Main from './Componenents/Main.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;

