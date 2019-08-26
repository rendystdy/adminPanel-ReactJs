import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import BarangPages from './pages/BarangPages';
// import GlobalProvider from './Context/Context';
import AddBarang from './pages/AddBarang';
import EditBarang from './pages/EditBarang';

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Navbar />
            {/* <Route path='/' exact component={MyHome} /> */}
            <Route path='/' exact component={BarangPages} />
            <Route path='/add-barang' component={AddBarang} />
            <Route path='/edit-barang/:id' component={EditBarang} />
            {/* <Route path='/product' component={Product} />
            <Route path='/total-order' component={TotalOrder} />
            <Route path='/detail-post/:id_post/' component={DetailPost} /> */}
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
