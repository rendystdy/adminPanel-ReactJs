import React, { Component, Fragment } from 'react';
import BarangPages from './pages/BarangPages';
// import Navbar from './components/Navbar';
// import Home from './pages/MyHome';
import AddBarang from './pages/AddBarang';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          {/* <Navbar /> */}
          {/* <Home/> */}
          {/* <BlogPages /> */}
          {/* <Route path='/' exact componnent={Home} /> */}
          <Route path='/' exact componnent={BarangPages} />
          <Route path='/add-barang/' componnent={AddBarang} />
        </Fragment>
      </Router>
    );
  }
}
